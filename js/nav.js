const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItemLinks = document.querySelectorAll('.nav-item__link');

window.onscroll = () => {
  scrollY > 10 && window.innerWidth > 640
    ? header.classList.add('sticky-nav')
    : header.classList.remove('sticky-nav');
};
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

window.addEventListener('resize', closeNavLinks);
