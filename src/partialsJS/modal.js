import '../partialsJS/searchingPupularMovies';

const box = document.querySelector('.box');
const closeModalBtn = document.querySelector('.modal__btn-close');
const modal = document.querySelector('[data-modal]');

export function attachModal() {
  box.addEventListener('click', toggleModalOn);
}

async function refershModal(id){
  const url ='https://api.themoviedb.org/3/'
  const apiKey ='b32896ed8f56a3105cdf45e097423bca'
  await fetch(
    `${url}movie/${id}?api_key=${apiKey}`
  )
  .then(r => r.json())
  .then(r => {
    console.log(r);
    const details = modal.children[0].children[2];
    const description = details.children[1].children[1];
    modal.children[0].children[1].src = `https://image.tmdb.org/t/p/w500${r.poster_path}`;
    modal.children[0].children[1].alt = r.original_title;
    details.children[0].textContent = r.title;
    description.children[0].children[0].firstChild.textContent = r.vote_average; 
    description.children[0].children[1].firstChild.textContent = r.vote_count;
    description.children[1].textContent = r.popularity;
    description.children[2].textContent = r.original_title;
    let content = '';
    r.genres.forEach(element => {
      content += element.name + ', ';
    });
    description.children[3].textContent = content.slice(0, -2);
    details.children[2].children[1].textContent = r.overview;
  })
  .catch(error => {
    console.log('error: ' + error);}
    );
}

function toggleModalOn(event) {
  let movie = event.target.parentNode;
  if (movie.nodeName == 'DIV') {
    movie = movie.parentNode;
    modal.classList.remove('is-hidden');
  }
  closeModalBtn.addEventListener('click', toggleModalOff);

  refershModal(movie.children[1].textContent)
}

function toggleModalOff() {
  modal.classList.add('is-hidden');
  closeModalBtn.removeEventListener('click', toggleModalOff);
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add('is-hidden');
  }
};