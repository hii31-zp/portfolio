// CONTACTが見えたら scroll を消す
const scrollHidden = document.querySelector('.scroll-sign');
new IntersectionObserver(([e]) => scrollHidden.classList.toggle('is-end', e.isIntersecting))
  .observe(document.querySelector('.contact'));
