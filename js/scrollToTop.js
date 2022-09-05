const scrollToTopIcon = document.getElementById('scroll-to-top');

scrollToTopIcon.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  scrollY > 1000
    ? (scrollToTopIcon.style.display = 'block')
    : (scrollToTopIcon.style.display = 'none');
});
