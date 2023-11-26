'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const accordionEls = document.querySelectorAll('.accordion');

  accordionEls.forEach((acc) => {
    const accordionContent = acc.querySelector('.accordion__content');
    acc.addEventListener('click', () => {
      if (acc.classList.contains('active')) {
        acc.classList.remove('active');
        accordionContent.style.maxHeight = 0 + 'px';
      } else {
        acc.classList.add('active');
        accordionContent.style.maxHeight =
          accordionContent.scrollHeight + 100 + 'px';
      }
    });
  });
});
