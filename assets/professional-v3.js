(()=>{'use strict';
function ready(){
 document.querySelectorAll('.v3-hamb').forEach(btn=>{
  const nav=document.getElementById(btn.getAttribute('aria-controls'));if(!nav)return;
  btn.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');btn.setAttribute('aria-expanded',String(open));btn.textContent=open?'×':'☰'});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');btn.setAttribute('aria-expanded','false');btn.textContent='☰'}));
 });
 document.querySelectorAll('[data-year]').forEach(e=>e.textContent=String(new Date().getFullYear()));
 const h=location.hash;
 if(h&&h.startsWith('#')&&document.querySelector(h)){ /* native hash navigation works */ }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();