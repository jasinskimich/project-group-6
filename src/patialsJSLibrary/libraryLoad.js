async function loadLibrary(id){
    const url ='https://api.themoviedb.org/3/'
    const apiKey ='b32896ed8f56a3105cdf45e097423bca'
    await fetch(`${url}movie/${id}?api_key=${apiKey}`)
    .then(movie => movie.json())
    .then(movie => {
        console.log(movie);
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
            ${movie.genres.slice(0, 2)}&nbsp;
          </p>
          <p class="movie__year">
            | ${movie.release_date.substring(0, 4)}
          </p>
        </div>
      </div>`;
      box.innerHTML= myHTML;
      box.insertAdjacentElement("afterbegin", card);
    })
    .catch(error => {console.log(error);})}

const box = document.querySelector(".library-box"); 
const watchedBtn = document.querySelector("#options__button--watched");
const queueBtn = document.querySelector("#options__button--queue");

watchedBtn.addEventListener("click", clearScreen);
queueBtn.addEventListener("click", clearScreen);
function clearScreen(){
    if(Array.isArray(box.children)){
        box.children.forEach(()=>{
            box.removeChild(box.children[0]);
        }
      )
    }
}

if(watchedBtn.classList.contains('options__button--clicked')){
    let watched = localStorage.getItem("watched");
    watched = watched.split(";");
    console.log(watched);
    watched.forEach(element => {
        if(element != ""){
            loadLibrary(element);
        }
    });}

if(queueBtn.classList.contains('options__button--clicked')){
let queue = localStorage.getItem("queue");
queue = queue.split(";");
console.log(queue);
queue.forEach(element => {
    if(element != ""){
        loadLibrary(element);
    }
});}


//615777 640146 505642"