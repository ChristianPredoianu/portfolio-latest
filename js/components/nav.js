const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const hamburgerBars = document.querySelectorAll('span.hamburger__bar ');
const navLinks = document.getElementById('nav-links');
const navItemLinks = document.querySelectorAll('.nav-item');

export default () => {
  function handleStickyNav() {
    return scrollY > 10 && window.innerWidth > 640
      ? header.classList.add('sticky-nav')
      : header.classList.remove('sticky-nav');
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

  function toggleNavLinks() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    handleHamburgerColor();
  }

  function closeNavLinks() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }

  navItemLinks.forEach((navItemLink) =>
    navItemLink.addEventListener('click', function () {
      closeNavLinks();

      if (window.innerWidth > 640) {
        navItemLinks.forEach((navItemLink) =>
          navItemLink.classList.remove('active-link')
        );
        this.classList.add('active-link');
      }
    })
  );

  window.addEventListener('scroll', handleStickyNav);
  window.addEventListener('resize', closeNavLinks);
  hamburger.addEventListener('click', toggleNavLinks);
};
