import '../sass/index.scss';
import { getMovie } from '../partialsJS/fetchAPI';
import { showingpopularMovies } from '../partialsJS/searchingPupularMovies';

const searchBar = document.querySelector('#search-form');
const movieBox = document.querySelector('.box');
const notFound = document.querySelector('.search__text');

searchBar.addEventListener('submit', inputHandler);

function inputHandler(event) {
  event.preventDefault();
  const output = event.target[0].value;
  getMovie(output.trim()).then(res => {
    if (res.length === 0) {
      console.log();
      notFound.classList.remove('is-hidden');
      notFound.classList.add('is-not-hidden');
      showingpopularMovies();
    } else {
      notFound.classList.remove('is-not-hidden');
      notFound.classList.add('is-hidden');
      showMovies(res);
    }
  });
}

async function showMovies(el) {
  let genre;
  const mySearch = el
    .map(el => {
      genre = el.genres.map(genre => ` ${genre.name}`);
      yearOfProduction = el.release_date.substring(0, 4);
      return `<div class="movie__card">
  <div class="movie__imgbox">
  <img class="movie__img" src="https://image.tmdb.org/t/p/w500${
    el.poster_path
  }" alt="${el.title}" loading="lazy"/>
  </div>
  <p class="movie__title">
  <p class="movie__title">
      <b>${el.title}</b>
    </p>
  <div class="movie__info">
    <p class="movie__genres">
      ${genre.slice(0, 2)}
    </p>
    <p class="movie__year">
      | ${yearOfProduction}
    </p>
  </div>
</div>`;
    })
    .join('');
  movieBox.innerHTML = mySearch;
}
