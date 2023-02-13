
const buttonClicked = document.querySelector('.options__button--clicked');
const buttonUnclicked = document.querySelector('.options__button');

const buttonWatched = document.querySelector('#options__button--watched');
const buttonQueue = document.querySelector('#options__button--queue');

// const buttonAddToWatched = document.querySelector('#id or .class');
// const buttonAddToQueue = document.querySelector('#id or .class');

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

// buttonAddToWatched.addEventListener('click', () => {
// 	localStorage.setItem('Watched', ' ');
// });

// buttonAddToQueue.addEventListener('click', () => {
// 	localStorage.setItem('Queue', ' ');
// });

// buttonWatched.addEventListener('click', () => {
//   const filmWatched = localStorage.getItem('Watched');
//   console.log(filmWatched);
// });

// buttonQueue.addEventListener('click', () => {
//   const filmQueue = localStorage.getItem('Queue');
//   console.log(filmQueue);
// });
