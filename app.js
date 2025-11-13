// future small helpers can live here (active link, scroll, etc.)
(function(){
  const links = document.querySelectorAll('.cc-menu a');
  links.forEach(a=>{
    if (a.getAttribute('href') && location.pathname.endsWith(a.getAttribute('href'))) {
      a.classList.add('is-active');
    }
  });
})();
