const t=document.querySelector(".options__button--clicked"),e=document.querySelector(".options__button");document.querySelector("#options__button--watched"),document.querySelector("#options__button--queue");async function o(t){await fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=b32896ed8f56a3105cdf45e097423bca`).then((t=>t.json())).then((t=>{let e="";e+=t.genres[0].name+", ",e+=t.genres[1].name;const o=document.createElement("div");let s=`<div class="movie__card">\n        <div class="movie__imgbox">\n        <img class="movie__img" src="https://image.tmdb.org/t/p/w500${t.poster_path}" alt="${t.title}" loading="lazy"/>\n        </div>\n        <p style="display:none">${t.id}<p>\n        <p class="movie__title">\n            <b>${t.title}</b>\n          </p>\n        <div class="movie__info">\n          <p class="movie__genres">\n            ${e}&nbsp;\n          </p>\n          <p class="movie__year">\n            | ${t.release_date.substring(0,4)}\n          </p>\n        </div>\n      </div>`;o.innerHTML=s,n.append(o)})).catch((t=>{console.log(t)}))}e.addEventListener("click",(()=>{e.classList.remove("options__button"),e.classList.add("options__button--clicked"),t.classList.remove("options__button--clicked"),t.classList.add("options__button")})),t.addEventListener("click",(()=>{t.classList.remove("options__button"),t.classList.add("options__button--clicked"),e.classList.remove("options__button--clicked"),e.classList.add("options__button")}));const n=document.querySelector(".library-box"),s=document.querySelector("#options__button--watched"),i=document.querySelector("#options__button--queue");function c(){console.log(n.children);for(let t=0;t<=n.children.length;t++)n.removeChild(n.children[0]);l()}function l(){if(s.classList.contains("options__button--clicked")){let t=localStorage.getItem("watched");t=t.split(";"),t.forEach((t=>{""!=t&&o(t)}))}if(i.classList.contains("options__button--clicked")){let t=localStorage.getItem("queue");t=t.split(";"),t.forEach((t=>{""!=t&&o(t)}))}}s.addEventListener("click",c),i.addEventListener("click",c),l();
//# sourceMappingURL=library.9417e90d.js.map