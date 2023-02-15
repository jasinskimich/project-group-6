import axios from 'axios';
import '../sass/index.scss';
import { attachModal } from '../partialsJS/modal.js';
const movieBox = document.querySelector('.box');

const apiKey = `6f4e972748a8ce0b96b8a311e5f34016`;
let popularMovieID = [];
let popularMovieDetails = [];

async function fetchingPopularMovies() {
  const media_type = 'movie';
  const time_window = 'week';

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/${media_type}/${time_window}`,
      {
        params: {
          api_key: `6f4e972748a8ce0b96b8a311e5f34016`,
        },
      }
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

function updatingPopularMovies(popularMoviesData) {
  popularMoviesData.forEach(movie => {
    popularMovieID.push(movie.id);
  });
  console.log(popularMovieID);
  return popularMovieID;
}

async function fetchingPopularMovieDetails() {
  for (let id of popularMovieID) {
    await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => popularMovieDetails.push(data));
  }
  console.log(popularMovieDetails);
}

async function updatingPopularMovieHTML() {
  let myHTML = '';
  let genre;
  let yearOfProduction;
  await popularMovieDetails.forEach(movie => {
    genre = movie.genres.map(genre => ` ${genre.name}`);
    yearOfProduction = movie.release_date.substring(0, 4);
    myHTML += `<div class="movie__card">
    <div class="movie__imgbox">
    <img class="movie__img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" loading="lazy"/>

    

    </div>
    <p class="movie__title">
        <b>${movie.title}</b>
      </p>
    <div class="movie__info">
      <p class="movie__genres">
        ${genre.slice(0, 2)}&nbsp;
      </p>
      <p class="movie__year">
        | ${yearOfProduction}
      </p>
    </div>
  </div>`;
  });
  movieBox.innerHTML += myHTML;
}

async function showingpopularMovies() {
  const popularMoviesData = await fetchingPopularMovies();
  updatingPopularMovies(popularMoviesData);
  const popularMovieID = await fetchingPopularMovieDetails();
  updatingPopularMovieHTML(popularMovieID);
  attachModal();
}

window.addEventListener('load', showingpopularMovies());
