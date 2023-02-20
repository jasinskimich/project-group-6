//funkcja fetch API

let ids = [];
const searchBar = document.querySelector('#search-form');
searchBar.addEventListener('keypress', clear);

export async function getMovie(movie_id) {
  try {
    // fetch do szukania filmów
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b32896ed8f56a3105cdf45e097423bca&query=${movie_id}`
    );
    const movieInfo = await res.json();
    let movieId = movieInfo.results.map(el => el.id);
    // funkcja, która dla każdego wyszukanego filmu pobiera detale
    for (let id of movieId)
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b32896ed8f56a3105cdf45e097423bca`
      )
        .then(res => {
          return res.json();
        })
        .then(res => {
          ids.push(res);
        });
    // zwraca tablicę z filmami uzupełnioną o szczegóły
    return ids;
  } catch (error) {
    console.log(error);
  }
}

// funkcja czyszcząca

function clear(event) {
  if (event.key === 'Enter') {
    return (ids = []);
  }
}
