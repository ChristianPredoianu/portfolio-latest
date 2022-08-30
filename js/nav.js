const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItemLinks = document.querySelectorAll('.nav-item__link');

hamburger.addEventListener('click', toggleNavLinks);

function toggleNavLinks() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
}

navItemLinks.forEach((navItemLink) =>
  navItemLink.addEventListener('click', closeNavLinks)
);
function closeNavLinks() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
}
