
// Add a tiny check to link a PDF if present
(async function(){
  const el = document.getElementById('pdf-link');
  if(!el) return;
  try{
    const resp = await fetch('CoolourCoin.pdf', {method:'HEAD'});
    if(resp.ok){
      el.innerHTML = '<a class="btn" href="CoolourCoin.pdf" target="_blank" rel="noopener">Download the PDF</a>';
    }
  }catch(e){ /* ignore */ }
})();
