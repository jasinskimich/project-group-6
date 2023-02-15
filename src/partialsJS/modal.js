import '../partialsJS/searchingPupularMovies';

const box = document.querySelector('.box');
const closeModalBtn = document.querySelector('.modal__btn-close');
const modal = document.querySelector('[data-modal]');

export function attachModal() {
  box.addEventListener('click', toggleModalOn);
}

function toggleModalOn(event) {
  let movie = event.target.parentNode;
  if (movie.nodeName == 'DIV') {
    movie = movie.parentNode;
    modal.classList.remove('is-hidden');
  }
  closeModalBtn.addEventListener('click', toggleModalOff);

  console.log(movie.children[1].textContent);
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