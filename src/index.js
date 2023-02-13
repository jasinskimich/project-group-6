// api
// const searchBar = document.querySelector('#search');
// const output = document.querySelector('.output');
// // event listener searchBar

// searchBar.addEventListener('input', event => {
//   output.textContent = event.target.value;
//   const x = getMovies(output);
//   console.log(x);
//   return x;
// });

// // funkcja fetch API (klucz:b32896ed8f56a3105cdf45e097423bca)

// const getMovies = async movie_id => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=b32896ed8f56a3105cdf45e097423bca`
//   );
//   const movies = await response.json();
//   console.log(movies);
//   return movies;
// };
import './partialsJS/libraryButtons';
import './partialsJS/searchingPupularMovies';
import './partialsJS/fetchAPI';

