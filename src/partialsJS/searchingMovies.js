import '../sass/index.scss';
import { getMovie } from '../partialsJS/fetchAPI';

const searchBar = document.querySelector('#search-form');
const movieBox = document.querySelector('.box');
const notFound = document.querySelector('.search__text');
const loader = document.querySelector('.loader');

searchBar.addEventListener('submit', inputHandler);

// funkcja event listener

function inputHandler(event) {
  loader.classList.remove('loader--visibility');
  event.preventDefault();
  const output = event.target[0].value;
  getMovie(output.trim()).then(res => {
    if (res.length === 0 || output === '') {
      notFound.classList.remove('is-hidden');
      notFound.classList.add('is-not-hidden');
      movieBox.innerHTML = '';
    } else {
      notFound.classList.remove('is-not-hidden');
      notFound.classList.add('is-hidden');
      showMovies(res);
    }
  });
}

// render karty filmu

async function showMovies(el) {
  let genre;
  let releaseDate;
  const mySearch = el
    .map(el => {
      genre = el.genres.map(genre => ` ${genre.name}`);
      releaseDate = el.release_date.substring(0, 4);
      return `<div class="movie__card">
  <div class="movie__imgbox">
  <img class="movie__img" src="https://image.tmdb.org/t/p/w500${
    el.poster_path
  }" alt="${el.title}" loading="lazy"/>
  </div>
  <p style="display:none">${el.id}<p>
  <p class="movie__title">
      <b>${el.title}</b>
    </p>
  <div class="movie__info">
    <p class="movie__genres">
      ${genre.slice(0, 2)}
    </p>
    <p class="movie__year">
      | ${releaseDate}
    </p>
  </div>
</div>`;
    })
    .join('');
  movieBox.innerHTML = mySearch;
}
