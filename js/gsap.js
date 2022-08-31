const tl = gsap.timeline({ defaults: { duration: 1 } });

tl.to('.floating-icons__icon', {
  x: 'random(0, 10)', //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
  y: 'random(-20, 10)',
  duration: 2,
  ease: 'none',
  repeat: -1,
  opacity: 1,
  repeatRefresh: true, // gets a new random x and y value on each repeat
});
