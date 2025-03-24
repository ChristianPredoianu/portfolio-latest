import {
  toggleDarkMode,
  setUserPreferedTheme,
  watchPreferedThemeChange,
} from './darkMode';
import { handleStickyNav, closeNavLinks } from './components/nav';
import { verticalSwiper } from './components/verticalSwiper';
import { cubeSwiper1, cubeSwiper2 } from './components/cubeSwiper';
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
      this.classList.add('active-link');
    }
  })
);

window.addEventListener('scroll', () => {
  scrollY > 1000
    ? (scrollToTopIcon.style.display = 'block')
    : (scrollToTopIcon.style.display = 'none');
});

scrollToTopIcon.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', handleStickyNav);
window.addEventListener('resize', closeNavLinks);
