
document.addEventListener('click',(e)=>{const link=e.target.closest('[data-home]');if(link){window.location.href='index.html'}});
const bubble=document.createElement('div');bubble.className='spectral-cursor';document.body.appendChild(bubble);
let t=null;window.addEventListener('mousemove',(e)=>{bubble.style.left=e.clientX+'px';bubble.style.top=e.clientY+'px';
bubble.classList.add('show-cursor');clearTimeout(t);t=setTimeout(()=>bubble.classList.remove('show-cursor'),300)});
setInterval(()=>{document.querySelectorAll('.coin').forEach(el=>el.style.filter=`hue-rotate(${(Date.now()/100)%360}deg)`)},1500);
