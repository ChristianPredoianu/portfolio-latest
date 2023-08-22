export const verticalSwiper = new Swiper('.verticalSwiper', {
  direction: 'vertical',
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
