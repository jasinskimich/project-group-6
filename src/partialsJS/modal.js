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

openModalBtn.addEventListener('click', toggleModalOn);


function toggleModalOn() {
  openModalBtn.removeEventListener('click', toggleModalOn);
  modal.classList.toggle('is-hidden');

  closeModalBtn.addEventListener('click', toggleModalOff);
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

  closeModalBtn.removeEventListener('click', toggleModalOff);
  modal.classList.toggle('is-hidden');
  openModalBtn.addEventListener('click', toggleModalOn);
}

