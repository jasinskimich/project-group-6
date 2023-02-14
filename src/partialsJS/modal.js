import '../partialsJS/searchingPupularMovies';
const openModalBtn = document.querySelector('.modal-open');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.classList.toggle('is-hidden');
//   }
// };
