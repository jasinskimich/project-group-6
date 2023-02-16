import '../sass/index.scss';
import { getMovie } from '../partialsJS/fetchAPI';

let ids = [];
let movieDetails = [];

const searchBar = document.querySelector('#search');
const movieBox = document.querySelector('.box');
const notFound = document.querySelector('.search__text');

searchBar.addEventListener('input', inputHandler);

function inputHandler(event) {
  movieBox.innerHTML = '';
  const output = event.target.value;

  getMovie(output).then(res => {
    console.log(res);
    res.forEach(el => {
      return ids.push(el.id);
    });

    if (res.length === 0) {
      notFound.classList.remove('is-hidden');
      notFound.classList.add('is-not-hidden');
    } else {
      notFound.classList.remove('is-not-hidden');
      notFound.classList.add('is-hidden');

      let mySearch = '';
      let genre;

      movieDetails.forEach(el => {
        genre = el.genres.map(genre => `${genre.name}`);
        mySearch += `<div class="movie__card">
        <div class="movie__imgbox">
        <img class="movie__img" src="https://image.tmdb.org/t/p/w500${
          el.poster_path
        }" alt="${el.title}" loading="lazy"/>
        </div>
        <p class="movie__title">
            <b>${el.title}</b>
          </p>
        <div class="movie__info">
          <p class="movie__genres">
            ${genre.slice(0, 2)}&nbsp;
          </p>
          <p class="movie__year">
            | ${el.release_date}
          </p>
        </div>
      </div>`;
      });
      movieBox.innerHTML += mySearch;
    }
  });
}

// API detale filmów

async function getMovieDetails() {
  for (id of ids)
    await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b32896ed8f56a3105cdf45e097423bca`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        movieDetails.push(res);
      });
  console.log(movieDetails);
  return movieDetails;
}

// API detale filmów
getMovieDetails();
