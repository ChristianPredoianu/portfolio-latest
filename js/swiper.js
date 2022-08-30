const swiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  autoplay: {
    delay: 5000,
  },
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
