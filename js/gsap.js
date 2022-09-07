gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);

const imgBefore = CSSRulePlugin.getRule('.about-me-img-container::before');
const imgAfter = CSSRulePlugin.getRule('.about-me-img-container::after');
const ctaBtn = document.getElementById('hero-cta-btn');
const heroDownArrow = document.getElementById('hero-down-arrow');

const isHeroAnimated = sessionStorage.getItem('isHeroAnimated');

const hoverCtaBtn = gsap.to(ctaBtn, {
  y: 5,
  duration: 0.2,
  paused: true,
  ease: 'power1.inOut',
});

const hoverHeroDownArrow = gsap.to(heroDownArrow, {
  scale: 0.9,
  y: 5,
  duration: 0.2,
  paused: true,
});

ctaBtn.addEventListener('mouseenter', () => hoverCtaBtn.play());
ctaBtn.addEventListener('mouseleave', () => hoverCtaBtn.reverse());

heroDownArrow.addEventListener('mouseenter', () => hoverHeroDownArrow.play());
heroDownArrow.addEventListener('mouseleave', () =>
  hoverHeroDownArrow.reverse()
);

const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.out' } });

if (!isHeroAnimated) {
  tl.from('.header', { y: -100 });
  tl.from('.social-media', { x: '100%' });
  tl.from('.hero-content-left-cta__primary-heading', { opacity: 0 });
  tl.from('.hero-content-left-cta__secondary-heading', { opacity: 0 });
  tl.from(ctaBtn, { y: 20, opacity: 0 });
  tl.from('.floating-icons__icon', { opacity: 0, stagger: 0.1 });
  tl.from(heroDownArrow, { opacity: 0, stagger: 0.1 });
  tl.from('.verticalSwiper', {
    y: '100%',
    opacity: 0,
    onComplete: setAnimationEndToSessionStorage,
  });
}

function setAnimationEndToSessionStorage() {
  sessionStorage.setItem('isHeroAnimated', true);
}

//Hero section floating icons
tl.to('.floating-icons__icon', {
  x: 'random(0, 10)', //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
  y: 'random(-20, 10)',
  duration: 2,
  ease: 'none',
  repeat: -1,
  opacity: 1,
  repeatRefresh: true, // gets a new random x and y value on each repeat
});

//About me section img
gsap.to(imgBefore, {
  duration: 3,
  cssRule: {
    y: 0,
    x: -10,
    opacity: 0.9,
  },
  yoyo: true,
  repeat: -1,
});

gsap.to(imgAfter, {
  duration: 3,
  cssRule: {
    x: -10,
    y: 10,
    opacity: 0.4,
  },
  yoyo: true,
  repeat: -1,
});

//ScrollTrigger

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

    .from('.swiper3', { y: innerHeight * 1.5 })
    .from('.swiper2', { y: innerHeight * 1.5 })
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
