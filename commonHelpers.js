import{a as q,S as y,i as f}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();async function g(o,t,r){new URLSearchParams({page:t,per_page:r});const s="42993354-9366f462d179fd9692b03d8e1",e=o;return(await q.get(`https://pixabay.com/api/?key=${s}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${r}`)).data}function b(o,t,r){const s=o.hits.map(e=>`<li class="gallery-item"><a href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"></a>
            <p><b>Likes: </b>${e.likes}</p>
            <p><b>Views: </b>${e.views}</p>
            <p><b>Comments: </b>${e.comments}</p>
            <p><b>Downloads: </b>${e.downloads}</p>
            </li>`).join("");t.insertAdjacentHTML("beforeend",s),new y(".gallery a",r)}const h=document.querySelector(".form"),i=document.querySelector(".gallery"),v=document.querySelector("input"),E=document.querySelector(".container"),p=document.querySelector(".btn-load");let c=1,L=15,d;const w=()=>{const o=document.createElement("span");o.classList.add("loader"),E.append(o)},u=()=>{const o=document.querySelector(".loader");o&&o.remove()},m=()=>{p.style.display="block"},a=()=>{p.style.display="none"};function $(o,t){return o>=t}const C={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250},S=new y(".gallery a");h.addEventListener("submit",async o=>{w(),c=1,o.preventDefault(),i.innerHTML="",d=v.value;try{const t=await g(d,c,L);if(b(t,i,C),S.refresh(),h.reset(),u(),m(),t.hits.length===0){f.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"});const r=document.querySelector(".gallery");if(r&&r.firstElementChild){const{height:s}=r.firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}$(i.children.length,t.totalHits)?a():m()}catch(t){console.log(t),a()}});p.addEventListener("click",async()=>{w();try{c+=1;const o=await g(d,c,L);b(o,i),S.refresh(),u();const t=document.querySelector(".gallery");if(t&&t.firstElementChild){const{height:r}=t.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}i.children.length>=o.totalHits&&(f.warning({title:"",message:"We are sorry, but you have reached the end of search results."}),a())}catch(o){console.log(o),u(),a()}});
//# sourceMappingURL=commonHelpers.js.map
