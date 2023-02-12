
const buttonClicked = document.querySelector('.options__button--clicked');
const buttonUnclicked = document.querySelector('.options__button');

buttonUnclicked.addEventListener('click', () => {
  buttonUnclicked.classList.remove('options__button');
  buttonUnclicked.classList.add('options__button--clicked');
  buttonClicked.classList.remove('options__button--clicked');
  buttonClicked.classList.add('options__button');
  
});

buttonClicked.addEventListener('click', () => {
  buttonClicked.classList.remove('options__button');
  buttonClicked.classList.add('options__button--clicked');
  buttonUnclicked.classList.remove('options__button--clicked');
  buttonUnclicked.classList.add('options__button');
  
});
