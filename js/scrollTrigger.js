const mMedia = gsap.matchMedia();

//Run cube constructor animation on screens >1024px
mMedia.add('(min-width: 1024px)', () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'center center',
        end: '+=2000px',
        scrub: true,
        pin: true,
      },
    })
    .from('.cube-swiper-container__heading', { y: innerHeight * 1.5 })
    .from('.swiper2', { y: innerHeight * 1.5 })
    .from('.swiper3', { y: innerHeight * 1.5 })
    .from('.swiper-button-prev', { y: innerHeight * 1.5 })
    .from('.swiper-button-next', { y: innerHeight * 1.5 })
    .from('.swiper-slide-cube__overlay', { y: innerHeight * 1.5 })
    .from('.swiper-slide-cube-content__heading', { y: innerHeight * 1.5 })
    .from('.swiper-slide-cube-content__link', { y: innerHeight * 1.5 })
    .from('.swiper-slide-cube-content__secondary-heading', {
      y: innerHeight * 1.5,
    })
    .from('.swiper-slide-cube-content-list', { y: innerHeight * 1.5 })
    .from('.swiper-slide-cube-content__demo-paragraph', {
      y: innerHeight * 1.5,
    })
    .from('.pagination-bullets', { y: innerHeight * 1.5 });
});

gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 },
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.contact-me-section',
      start: 'top 400px',
      end: 'bottom bottom',
      scrub: true,
    },
  })

  .to('.contact-card__img', { rotate: 6 })
  .from('.contact-card-headings__primary-heading', { x: 10, opacity: 0 })
  .from('.contact-card-headings__secondary-heading', {
    x: 10,
    opacity: 0,
    scale: 0.5,
  })
  .from('.contact-card-headings__paragraph', { y: 10, opacity: 0 });
