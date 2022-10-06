export const cubeSwiper1 = new Swiper('.swiper2', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export const cubeSwiper2 = new Swiper('.swiper3', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperShadows = document.querySelectorAll('.swiper-cube-shadow');

export function removeCubeSwiperShadow() {
  swiperShadows.forEach((swiperShadow) => {
    swiperShadow.classList.add('swiper-shadow-darkmode');
  });
}

export function addCubeSwiperShadow() {
  swiperShadows.forEach((swiperShadow) => {
    swiperShadow.classList.remove('swiper-shadow-darkmode');
  });
}

console.log('dsa');
