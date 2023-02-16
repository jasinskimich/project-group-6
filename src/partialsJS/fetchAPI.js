//funkcja fetch API
let ids = [];

export async function getMovie(movie_id) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b32896ed8f56a3105cdf45e097423bca&query=${movie_id}`
    );
    const movieInfo = await res.json();

    let movieId = movieInfo.results.map(el => el.id);
    console.log(movieId);
    return movieId;
  } catch (error) {
    console.log(error);
  }
}

//getMovie();

// .push(el => ids.push(el));
// async function pullId()

async function getMovieDetails(id) {
  for (id of ids)
    await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b32896ed8f56a3105cdf45e097423bca`
    );
  try {
    const res = await getMovie(id);
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  // (res => {
  //   return res.json();
  // })
  // .then(res => {
  //   console.log(res);
  //   // movieDetails.push(res);
  // });
}

getMovieDetails();

// async function show() {
//   const ids = await getMovie();
//   getMovieDetails(ids);
// }

// show();
