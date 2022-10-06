export const verticalSwiper = new Swiper('.verticalSwiper', {
  direction: 'vertical',
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
