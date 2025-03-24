import {
  toggleDarkMode,
  setUserPreferedTheme,
  watchPreferedThemeChange,
} from './darkMode';
import { handleStickyNav, closeNavLinks } from './components/nav';
import gsap from './gsap';
import scrollTrigger from './scrollTrigger';

const navItemLinks = document.querySelectorAll('.nav-item');
const scrollToTopIcon = document.getElementById('scroll-to-top');

toggleDarkMode();
gsap();
scrollTrigger();

window.addEventListener('load', () => {
  setUserPreferedTheme();
  watchPreferedThemeChange();
});

navItemLinks.forEach((navItemLink) =>
  navItemLink.addEventListener('click', () => {
    closeNavLinks();

    if (window.innerWidth > 640) {
      navItemLinks.forEach((navItemLink) => navItemLink.classList.remove('active-link'));
      navItemLink.classList.add('active-link');
    }
  })
);

let isScrolling;
window.addEventListener('scroll', () => {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    handleStickyNav();

    scrollToTopIcon.style.display = window.scrollY > 1000 ? 'block' : 'none';
  }, 100);
});

window.addEventListener('scroll', handleStickyNav);
window.addEventListener('resize', closeNavLinks);
