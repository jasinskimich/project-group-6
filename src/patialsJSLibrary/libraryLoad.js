async function loadLibrary(id){
    const url ='https://api.themoviedb.org/3/'
    const apiKey ='b32896ed8f56a3105cdf45e097423bca'
    await fetch(`${url}movie/${id}?api_key=${apiKey}`)
    .then(movie => movie.json())
    .then(movie => {
      let genres = '';
        genres += movie.genres[0].name + ', ';
        genres += movie.genres[1].name;
        const card = document.createElement("div");
        let myHTML = `<div class="movie__card">
        <div class="movie__imgbox">
        <img class="movie__img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" loading="lazy"/>
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
      card.innerHTML= myHTML;
      box.append(card);
    })
    .catch(error => {console.log(error);})}

const box = document.querySelector(".library-box"); 
const watchedBtn = document.querySelector("#options__button--watched");
const queueBtn = document.querySelector("#options__button--queue");

watchedBtn.addEventListener("click", clearScreen);
queueBtn.addEventListener("click", clearScreen);
function clearScreen(){
  console.log(box.children);
    for(let i = 0; i <= box.children.length; i++ ){
        box.removeChild(box.children[0]);
    }
    loadScreen();
}

function loadScreen(){
if(watchedBtn.classList.contains('options__button--clicked')){
    let watched = localStorage.getItem("watched");
    watched = watched.split(";");
    watched.forEach(element => {
        if(element != ""){
            loadLibrary(element);
        }
    });}

if(queueBtn.classList.contains('options__button--clicked')){
let queue = localStorage.getItem("queue");
queue = queue.split(";");
queue.forEach(element => {
    if(element != ""){
        loadLibrary(element);
    }
});}
}

loadScreen();


// console.log('Pagination');
// const select = document.getElementById('movie-pagination');

// function renderMoviePaginator() {
//   const pages = 2;
//   select.innerHTML = '';
//   for (let i = 1; i <= pages; i++) {
//     const option = document.createElement('option');
    
//     option.innerText = 'Page ' + i;
//     option.value = i;
//     if (i === Number(1)) {
//       option.setAttribute('selected', true);
//     }
//     select.append(option);
//     console.log(pages);
//   }
// }