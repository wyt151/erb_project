const fadeInUpElements = document.querySelectorAll('.fade-in-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  rootMargin: '0px',
  threshold: 1
});

fadeInUpElements.forEach((element) => {
  observer.observe(element);
});