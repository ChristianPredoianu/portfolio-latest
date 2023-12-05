const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const hamburgerBars = document.querySelectorAll('span.hamburger__bar ');
const navLinks = document.getElementById('nav-links');
const navItemLinks = document.querySelectorAll('.nav-item__link');
const navLogo = document.querySelector('.nav-logo');

export function handleStickyNav() {
  handleStickyNavColor();
  return scrollY > 50 && window.innerWidth > 640
    ? header.classList.add('sticky-nav')
    : header.classList.remove('sticky-nav');
}

function handleStickyNavColor() {
  console.log(header.classList.contains('sticky-nav'));
  console.log(window.scrollY === 0);
  if (header.classList.contains('sticky-nav')) {
    navLogo.style.color = 'var(--clr-light-gray)';

    navItemLinks.forEach((navItemLink) => {
      navItemLink.style.color = 'var(--clr-light-gray)';
    });
  } else {
    navLogo.removeAttribute('style');

    navItemLinks.forEach((navItemLink) => {
      navItemLink.removeAttribute('style');
    });
  }
}

function handleHamburgerColorNavOpen() {
  if (navLinks.classList.contains('active')) {
    hamburgerBars.forEach((hamburgerBar) => {
      hamburgerBar.style.backgroundColor = 'hsl(0, 0%, 85%)';
    });
  }
}

function handleHamburgerColorNavClosed() {
  hamburgerBars.forEach((hamburgerBar) => {
    hamburgerBar.style.backgroundColor = 'var(--clr-accent-light';
  });
}

export function toggleNavLinks() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');

  navLinks.classList.contains('active')
    ? handleHamburgerColorNavOpen()
    : handleHamburgerColorNavClosed();
}

export function closeNavLinks() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');

  handleHamburgerColorNavClosed();
}

hamburger.addEventListener('click', toggleNavLinks);
