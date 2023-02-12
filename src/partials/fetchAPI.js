const searchBar = document.querySelector('#search');

//funkcja fetch API

async function getMovie(movie_id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=b32896ed8f56a3105cdf45e097423bca&query=${movie_id}`
  );
  const movieInfo = await res.json();
  movieInfo.results.forEach(el => {
    return el;
  });
  return movieInfo.results;
}

// funkcja zwracająca obiekty z informacjami na temat danego filmu z API
// np. el.title zwraca listę tytułów wyszukanych po nazwie

searchBar.addEventListener('input', showMovies);

function showMovies(event) {
  const movieId = event.target.value;
  getMovie(movieId).then(res => {
    res.forEach(el => {
      return console.log(el);
    });
  });
}
