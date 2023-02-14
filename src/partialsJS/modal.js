const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

openModalBtn.addEventListener('click', toggleModalOn);


function toggleModalOn() {
  openModalBtn.removeEventListener('click', toggleModalOn);
  modal.classList.toggle('is-hidden');
  closeModalBtn.addEventListener('click', toggleModalOff);
}

function toggleModalOff() {
  closeModalBtn.removeEventListener('click', toggleModalOff);
  modal.classList.toggle('is-hidden');
  openModalBtn.addEventListener('click', toggleModalOn);
}