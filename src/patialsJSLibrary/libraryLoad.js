async function loadMovies(ids) {
  const url = 'https://api.themoviedb.org/3/';
  const apiKey = 'b32896ed8f56a3105cdf45e097423bca';
  await fetch(`${url}movie/${ids}?api_key=${apiKey}`)
    .then(movie => movie.json())
    .then(movie => {
      let genres = '';
      genres += movie.genres[0].name + ', ';
      genres += movie.genres[1].name;
      const card = document.createElement('div');
      let myHTML = `<div class="movie__card">
      <div class="movie__imgbox">
      <img class="movie__img" src="https://image.tmdb.org/t/p/w500${
        movie.poster_path
      }" alt="${movie.title}" loading="lazy"/>
      </div>
      <p style="display:none">${movie.id}<p>
      <p class="movie__title">
          <b>${movie.title}</b>
        </p>
      <div class="movie__info">
        <p class="movie__genres">
          ${genres}&nbsp;
        </p>
        <p class="movie__year">
          | ${movie.release_date.substring(0, 4)}
        </p>
      </div>
    </div>`;
      card.innerHTML = myHTML;
      box.append(card);
    })
    .catch(error => {
      console.log(error);
    });
}

const box = document.querySelector('.library-box');
const watchedBtn = document.querySelector('#options__button--watched');
const queueBtn = document.querySelector('#options__button--queue');

watchedBtn.addEventListener('click', displayWatched);
queueBtn.addEventListener('click', displayQueue);

function displayWatched() {
  const localStorageWatched = localStorage.getItem('watched');
  if (localStorageWatched === '') {
    box.innerHTML = '';
  } else {
    const WatchedParsed = JSON.parse(localStorageWatched);
    box.innerHTML = '';
    WatchedParsed.forEach(ids => {
      loadMovies(ids);
    });
    console.log(WatchedParsed);
  }
}

function displayQueue() {
  const localStorageQueue = localStorage.getItem('queue');
  if (localStorageQueue === '') {
    box.innerHTML = '';
  } else {
    const QueueParsed = JSON.parse(localStorageQueue);
    box.innerHTML = '';
    QueueParsed.forEach(id => {
      loadMovies(id);
    });
    console.log(QueueParsed);
  }
}

displayWatched();
displayQueue();
