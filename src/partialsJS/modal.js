import '../partialsJS/searchingPupularMovies';

const openModalBtn = document.querySelector('.box');
const closeModalBtn = document.querySelector('.modal__btn-close');
const modal = document.querySelector('[data-modal]');

export function attachModal() {
  openModalBtn.addEventListener('click', toggleModalOn);
}

function toggleModalOn(event) {
  let movie = event.target.parentNode;
  if (movie.nodeName == 'DIV') {
    movie = movie.parentNode;
    modal.classList.remove('is-hidden');
  }
  closeModalBtn.addEventListener('click', toggleModalOff);
}
function toggleModalOff() {
  modal.classList.add('is-hidden');
  closeModalBtn.removeEventListener('click', toggleModalOff);
  openModalBtn.removeEventListener('click', toggleModalOn);
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add('is-hidden');
    openModalBtn.removeEventListener('click', toggleModalOn);
    closeModalBtn.removeEventListener('click', toggleModalOff);
  }
};
