const header = document.getElementById('header');
const hamburgerBars = document.querySelectorAll('span.hamburger__bar ');
const navLinks = document.getElementById('nav-links');
const navItemLinks = document.querySelectorAll('.nav-item__link');
const navLogo = document.querySelector('.nav-logo');

export function handleStickyNav() {
  handleStickyNavColor();
  return scrollY > 10 && window.innerWidth > 640
    ? header.classList.add('sticky-nav')
    : header.classList.remove('sticky-nav');
}

function handleStickyNavColor() {
  if (header.classList.contains('sticky-nav')) {
    navLogo.style.color = 'var(--clr-light-gray)';

    navItemLinks.forEach((navItemLink) => {
      navItemLink.style.color = 'var(--clr-light-gray)';
    });
  } else {
    navLogo.style.color = '';

    navItemLinks.forEach((navItemLink) => {
      navItemLink.style.color = '';
    });
  }
}

function handleHamburgerColor() {
  if (navLinks.classList.contains('active')) {
    hamburgerBars.forEach((hamburgerBar) => {
      hamburgerBar.style.backgroundColor = 'hsl(0, 0%, 85%)';
    });
  } else {
    hamburgerBars.forEach((hamburgerBar) => {
      hamburgerBar.style.backgroundColor = '';
    });
  }
}

export function toggleNavLinks() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  handleHamburgerColor();
}

export function closeNavLinks() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
}

hamburger.addEventListener('click', toggleNavLinks);
