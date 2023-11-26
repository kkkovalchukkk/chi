'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const reviewsSlider = new Swiper('.reviews-section__swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.reviews-section__swiper-btn_right',
      prevEl: '.reviews-section__swiper-btn_left',
    },
  });
});
