const loader=document.querySelector(".loader");
window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("hide"),1900));
document.getElementById("year").textContent=new Date().getFullYear();

const progress=document.querySelector(".progress");
window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+"%"});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));

const cursor=document.querySelector(".cursor");
if(cursor){
 window.addEventListener("mousemove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px"});
 document.querySelectorAll("a,.project,.circle-btn").forEach(el=>{
  el.addEventListener("mouseenter",()=>{cursor.style.width="48px";cursor.style.height="48px"});
  el.addEventListener("mouseleave",()=>{cursor.style.width="16px";cursor.style.height="16px"});
 });
}
document.querySelectorAll(".magnetic").forEach(el=>{
 el.addEventListener("mousemove",e=>{
   const r=el.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)*.18,y=(e.clientY-r.top-r.height/2)*.18;
   el.style.transform=`translate(${x}px,${y}px)`;
 });
 el.addEventListener("mouseleave",()=>el.style.transform="translate(0,0)");
});
document.querySelectorAll("video").forEach(v=>{
 v.addEventListener("mouseenter",()=>v.play().catch(()=>{}));
});
function notice(msg){alert(msg);return false}
