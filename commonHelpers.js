import{a as v,S as f,i as g}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function b(o,t,r){new URLSearchParams({page:t,per_page:r});const i="42993354-9366f462d179fd9692b03d8e1",e=o;return(await v.get(`https://pixabay.com/api/?key=${i}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${r}`)).data}function L(o,t,r){const i=o.hits.map(e=>`<li class="gallery-item"><a href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"></a>
            <p><b>Likes: </b>${e.likes}</p>
            <p><b>Views: </b>${e.views}</p>
            <p><b>Comments: </b>${e.comments}</p>
            <p><b>Downloads: </b>${e.downloads}</p>
            </li>`).join("");t.insertAdjacentHTML("beforeend",i),new f(".gallery a",r)}const m=document.querySelector(".form"),c=document.querySelector(".gallery"),E=document.querySelector("input"),$=document.querySelector(".container"),h=document.querySelector(".btn-load");let a=1,w=15,u;const S=()=>{const o=document.createElement("span");o.classList.add("loader"),$.append(o)},p=()=>{const o=document.querySelector(".loader");o&&o.remove()},y=()=>{h.style.display="block"},l=()=>{h.style.display="none"};function C(o,t){return o>=t}const P={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250},q=new f(".gallery a");m.addEventListener("submit",async o=>{S(),a=1,o.preventDefault(),c.innerHTML="",u=E.value;try{const t=await b(u,a,w);if(L(t,c,P),q.refresh(),m.reset(),p(),y(),t.hits.length===0){g.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"});const r=document.querySelector(".gallery");if(r&&r.firstElementChild){const{height:i}=r.firstElementChild.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}}C(c.children.length,t.totalHits)?l():y()}catch(t){console.log(t),l()}});h.addEventListener("click",async()=>{S();try{a+=1;const o=await b(u,a,w);L(o,c),q.refresh(),p();const t=document.querySelector(".gallery");if(t&&t.firstElementChild){const{height:r}=t.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}c.children.length>=o.totalHits&&(g.warning({title:"",message:"We are sorry, but you have reached the end of search results."}),l())}catch(o){console.log(o),p(),l()}});n;
//# sourceMappingURL=commonHelpers.js.map
