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

function handleActiveLink() {
  if (header.classList.contains('sticky-nav')) {
    navItemLinks.forEach((navItemLink) => {
      navItemLink.style.color = 'var(--clr-light-gray)';
    });
  }
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
