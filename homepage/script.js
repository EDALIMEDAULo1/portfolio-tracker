document.addEventListener('DOMContentLoaded', function(){
  const navSvg = document.getElementById('nav-svg');
  const navLinks = document.querySelector('.nav-links');

  navSvg.addEventListener('click', function(){
    navLinks.classList.toggle('nav-links');
  });
});
