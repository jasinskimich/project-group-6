const e=document.querySelector(".options__button--clicked"),t=document.querySelector(".options__button");document.querySelector("#options__button--watched"),document.querySelector("#options__button--queue");async function n(e){await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=b32896ed8f56a3105cdf45e097423bca`).then((e=>e.json())).then((e=>{let t="";t+=e.genres[0].name+", ",t+=e.genres[1].name;const n=document.createElement("div");let s=`<div class="movie__card">\n      <div class="movie__imgbox">\n      <img class="movie__img" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}" loading="lazy"/>\n      </div>\n      <p style="display:none">${e.id}<p>\n      <p class="movie__title">\n          <b>${e.title}</b>\n        </p>\n      <div class="movie__info">\n        <p class="movie__genres">\n          ${t}&nbsp;\n        </p>\n        <p class="movie__year">\n          | ${e.release_date.substring(0,4)}\n        </p>\n      </div>\n    </div>`;n.innerHTML=s,o.append(n)})).catch((e=>{console.log(e)}))}t.addEventListener("click",(()=>{t.classList.remove("options__button"),t.classList.add("options__button--clicked"),e.classList.remove("options__button--clicked"),e.classList.add("options__button")})),e.addEventListener("click",(()=>{e.classList.remove("options__button"),e.classList.add("options__button--clicked"),t.classList.remove("options__button--clicked"),t.classList.add("options__button")}));const o=document.querySelector(".library-box"),s=document.querySelector("#options__button--watched"),i=document.querySelector("#options__button--queue");function c(){const e=localStorage.getItem("watched");if(""===e)o.innerHTML="";else{const t=JSON.parse(e);o.innerHTML="",t.forEach((e=>{n(e)}))}}c(),s.addEventListener("click",c),i.addEventListener("click",(function(){const e=localStorage.getItem("queue");if(""===e)o.innerHTML="";else{const t=JSON.parse(e);o.innerHTML="",t.forEach((e=>{n(e)}))}}));const d=document.getElementById("studentInfoOpen"),a=document.getElementById("studentInfoClose"),l=document.getElementById("studentInfo"),r=document.getElementById("studentInfoBlur");function u(){l.classList.add("is-hidden"),r.classList.add("is-hidden")}d.addEventListener("click",(function(){l.classList.remove("is-hidden"),r.classList.remove("is-hidden")})),a.addEventListener("click",u),document.addEventListener("keydown",(function(e){"Escape"===e.key&&u()}));
//# sourceMappingURL=library.b71a18a2.js.map