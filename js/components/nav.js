const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItemLinks = document.querySelectorAll('.nav-item');

export default () => {
  window.addEventListener('scroll', () => {
    scrollY > 10 && window.innerWidth > 640
      ? header.classList.add('sticky-nav')
      : header.classList.remove('sticky-nav');
  });

  function toggleNavLinks() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
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

  window.addEventListener('resize', closeNavLinks);
  hamburger.addEventListener('click', toggleNavLinks);
};
