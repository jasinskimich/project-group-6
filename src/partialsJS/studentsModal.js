const studentModalOpen = document.getElementById('studentInfoOpen');
const studentModalClose = document.getElementById('studentInfoClose');
const studentModal = document.getElementById('studentInfo');
const studentBlur = document.getElementById('studentInfoBlur');

studentModalOpen.addEventListener('click', openStudentsModal);
studentModalClose.addEventListener('click', closeStudentsModal);
document.addEventListener('keydown', closeStudentsModalOnEscape);

function openStudentsModal() {
  studentModal.classList.remove('is-hidden');
  studentBlur.classList.remove('is-hidden');
}

function closeStudentsModal() {
  studentModal.classList.add('is-hidden');
  studentBlur.classList.add('is-hidden');
}

function closeStudentsModalOnEscape(event) {
  if (event.key === 'Escape') {
    closeStudentsModal();
  }
}
