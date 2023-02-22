import axios from 'axios';
import '../sass/index.scss';
import { attachModal } from '../partialsJS/modal.js';

const movieBox = document.querySelector('.box');
const loader = document.querySelector('.loader');
const apiKey = `6f4e972748a8ce0b96b8a311e5f34016`;
const paginatorElem = document.getElementById('pagination-container');
const select = document.getElementById('movie-pagination');

let popularMovieID = [];
let popularMovieDetails = [];

async function fetchingPopularMovies(page = 1) {
  const media_type = 'movie';
  const time_window = 'week';
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${apiKey}&page=${page}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

function renderMovieList(popularMoviesData) {
  popularMoviesData.results.forEach(movie => {
    popularMovieID.push(movie.id);
  });
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
  // console.log(popularMovieDetails);
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
    <img class="movie__img" src="https://image.tmdb.org/t/p/w500${
      movie.poster_path
    }"
      alt="${movie.title}" loading="lazy"/>
    </div>
    <p style="display:none">${movie.id}<p>
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

export async function showingpopularMovies() {
  const popularMoviesData = await fetchingPopularMovies();
  renderMoviePaginator(popularMoviesData);
  renderMovieList(popularMoviesData);
  const popularMovieID = await fetchingPopularMovieDetails();
  loader.classList.add('loader--visibility');
  updatingPopularMovieHTML(popularMovieID);
  attachModal();
}

window.addEventListener('load', showingpopularMovies);

export function renderMoviePaginator(popularMoviesData) {
  const pages = popularMoviesData.total_results / 20;
  select.innerHTML = '';
  for (let i = 1; i <= pages; i++) {
    const option = document.createElement('option');
    option.innerText = 'Page ' + i;
    option.value = i;
    if (i === Number(popularMoviesData.page)) {
      option.setAttribute('selected', true);
    }
    select.append(option);
    // console.log(pages);
  }
  select.addEventListener('change', async function showingNextPage(e) {
    window.removeEventListener('load', showingpopularMovies);
    loader.classList.remove('loader--visibility');
    let newpage = e.target.value;
    // console.log(e.target.value);
    paginatorElem.classList.add('hidden');
    movieBox.classList.add('hidden');
    movieBox.innerHTML = '';
    popularMovieDetails.splice(0, popularMovieID.length);
    popularMovieID.splice(0, popularMovieID.length);
    popularMoviesData = await fetchingPopularMovies(newpage);
    renderMovieList(popularMoviesData);
    popularMovieID = await fetchingPopularMovieDetails();
    updatingPopularMovieHTML(popularMovieID);
    popularMovieDetails = [];
    popularMovieID = [];
    loader.classList.add('loader--visibility');
    setTimeout(() => {
      paginatorElem.classList.remove('hidden');
      movieBox.classList.remove('hidden');
    }, 1500);
  });
}
