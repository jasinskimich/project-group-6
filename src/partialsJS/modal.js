import '../partialsJS/searchingPupularMovies';

const box = document.querySelector('.box');
const closeModalBtn = document.querySelector('.modal__btn-close');
const modal = document.querySelector('[data-modal]');
const blur = document.querySelector('.blur');
const addToWatched = document.querySelector('.modal__btn--watched');
const addToQueue = document.querySelector('.modal__btn--queue');

localStorage.setItem('queue', '');
localStorage.setItem('watched', '');

// handlery Queue i Watch

addToWatched.addEventListener('click', () => {
  watchHandler();
});
addToQueue.addEventListener('click', () => {
  queueHandler();
});

function watchHandler() {
  let id = addToWatched.getAttribute('data-id');
  const localStorageWatched = localStorage.getItem('watched');
  let localStorageWatchedParsed = [];
  if (localStorageWatched) {
    localStorageWatchedParsed = JSON.parse(localStorageWatched);
  }
  localStorageWatchedParsed.push(id);
  const currentArrayStringified = JSON.stringify(localStorageWatchedParsed);
  localStorage.setItem('watched', currentArrayStringified);
}

function queueHandler() {
  let id = addToQueue.getAttribute('data-id');
  const localStorageQueue = localStorage.getItem('queue');
  let localStorageQueueParsed = [];
  if (localStorageQueue) {
    localStorageQueueParsed = JSON.parse(localStorageQueue);
  }
  localStorageQueueParsed.push(id);
  const currentArrayStringified = JSON.stringify(localStorageQueueParsed);
  localStorage.setItem('queue', currentArrayStringified);
}

export function attachModal() {
  box.addEventListener('click', toggleModalOn);
}

async function refershModal(id) {
  const url = 'https://api.themoviedb.org/3/';
  const apiKey = 'b32896ed8f56a3105cdf45e097423bca';
  await fetch(`${url}movie/${id}?api_key=${apiKey}`)
    .then(r => r.json())
    .then(r => {
      // update karta filmowa modal
      const details = modal.children[0].children[2];
      const description = details.children[1].children[1];
      modal.children[0].children[1].src = `https://image.tmdb.org/t/p/w500${r.poster_path}`;
      modal.children[0].children[1].alt = r.original_title;
      details.children[0].textContent = r.title;
      description.children[0].children[0].firstChild.textContent =
        Math.round(r.vote_average * 10) / 10;
      description.children[0].children[0].firstChild.textContent =
        Math.round(r.vote_average * 10) / 10;
      description.children[1].textContent = r.popularity;
      description.children[2].textContent = r.original_title;
      let content = '';
      r.genres.forEach(element => {
        content += element.name + ', ';
      });
      description.children[3].textContent = content.slice(0, -2);
      details.children[2].children[1].textContent = r.overview;
      // koniec karty filmowej modal
    })
    .catch(error => {
      console.log('error: ' + error);
    });
}

function toggleModalOn(event) {
  let movie = event.target.parentNode;

  if (movie.nodeName == 'DIV') {
    movie = movie.parentNode;
    modal.classList.remove('is-hidden');
    blur.classList.remove('is-hidden');
  }
  document.addEventListener('keydown', closeModalWithEscapeKey);
  closeModalBtn.addEventListener('click', toggleModalOff);
  refershModal(movie.children[1].textContent);

  const id = movie.children[1].textContent;

  addToWatched.setAttribute('data-id', id);
  addToQueue.setAttribute('data-id', id);
}

// funkcja zamykająca modal

function toggleModalOff() {
  modal.classList.add('is-hidden');
  blur.classList.add('is-hidden');
  closeModalBtn.removeEventListener('click', toggleModalOff);
}
function closeModalWithEscapeKey(event) {
  if (event.key === 'Escape') {
    modal.classList.add('is-hidden');
    blur.classList.add('is-hidden');
    document.removeEventListener('keydown', event);
  }
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add('is-hidden');
    blur.classList.add('is-hidden');
  }
};
