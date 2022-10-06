import {
  removeCubeSwiperShadow,
  addCubeSwiperShadow,
} from './components/cubeSwiper';

const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
const darkModeToggler = document.getElementById('dm-toggler');
const body = document.querySelector('body');

export default () => {
  window.addEventListener('load', () => {
    setUserPreferedTheme();
    watchPreferedThemeChange();
  });

  function setUserPreferedTheme() {
    const isPreferedDarkMode = window.matchMedia(
      '(prefers-color-scheme:dark)'
    ).matches;

    if (isPreferedDarkMode) {
      enableDarkMode();
      removeCubeSwiperShadow();
    } else {
      disableDarkMode();
      addCubeSwiperShadow();
    }
  }

  function watchPreferedThemeChange() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', function (e) {
        const colorScheme = e.matches ? 'dark' : 'light';

        colorScheme === 'dark' ? enableDarkMode() : disableDarkMode();
      });
  }

  function toggleDarkMode() {
    darkModeToggler.addEventListener('click', () => {
      darkModeCheckbox.checked = !darkModeCheckbox.checked;

      darkModeCheckbox.checked ? enableDarkMode() : disableDarkMode();
    });
  }

  function enableDarkMode() {
    body.classList.add('darkmode');
    darkModeCheckbox.checked = true;
    removeCubeSwiperShadow();
  }

  function disableDarkMode() {
    body.classList.remove('darkmode');
    darkModeCheckbox.checked = false;
    addCubeSwiperShadow();
  }

  toggleDarkMode();
};
