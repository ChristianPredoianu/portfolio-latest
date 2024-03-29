const imgBefore = CSSRulePlugin.getRule('.about-me-img-container::before');
const imgAfter = CSSRulePlugin.getRule('.about-me-img-container::after');
const ctaBtn = document.getElementById('hero-cta-btn');
const heroDownArrow = document.getElementById('hero-down-arrow');

const isHeroAnimated = sessionStorage.getItem('isHeroAnimated');

gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);

export default () => {
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
  heroDownArrow.addEventListener('mouseleave', () => hoverHeroDownArrow.reverse());

  const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.out' } });

  if (!isHeroAnimated) {
    tl.from('.header', { y: -100, autoAlpha: 0 });
    tl.from('.social-media', { x: '100%', autoAlpha: 0 });
    tl.from('.hero-content-left-cta__primary-heading', { autoAlpha: 0 });
    tl.from('.hero-content-left-cta__secondary-heading', { autoAlpha: 0 });
    tl.from(ctaBtn, { y: 20, autoAlpha: 0 });
    tl.from('.floating-icons__icon', { autoAlpha: 0, stagger: 0.1 });
    tl.from(heroDownArrow, { autoAlpha: 0, stagger: 0.1 });
    tl.from('.verticalSwiper', {
      y: '100%',
      autoAlpha: 0,
      onComplete: setAnimationEndToSessionStorage,
    });
  }

  if (isHeroAnimated) showAnimatedHeroElements();

  function setAnimationEndToSessionStorage() {
    sessionStorage.setItem('isHeroAnimated', true);
  }

  function showAnimatedHeroElements() {
    const floatingIcons = document.querySelectorAll('.floating-icons__icon');

    document.querySelector('.header').style.visibility = 'visible';
    document.querySelector('.social-media').style.visibility = 'visible';
    document.querySelector('.hero-content-left-cta__primary-heading').style.visibility =
      'visible';
    document.querySelector('.hero-content-left-cta__secondary-heading').style.visibility =
      'visible';
    ctaBtn.style.display = 'visible';
    heroDownArrow.style.display = 'visible';
    floatingIcons.forEach((floatingIcon) => {
      floatingIcon.style.visibility = 'visible';
    });
    document.querySelector('.verticalSwiper').style.visibility = 'visible';
  }

  //Hero section floating icons
  tl.to('.floating-icons__icon', {
    x: 'random(0, 10)',
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
      opacity: 0.1,
    },
    yoyo: true,
    repeat: -1,
  });
};
