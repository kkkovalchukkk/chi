'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const overlayEl = document.querySelector('.overlay');
  const popupEl = document.querySelector('.popup');
  const togglePopupBtnEls = document.querySelectorAll('.togglePopup');
  const closePopupBtnEl = popupEl.querySelector('.popup__close-btn');

  const closeActivePopup = () => {
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
    overlayEl.classList.remove('active');
    popupEl.classList.remove('active');
    window.removeEventListener('click', closePopupByClickOnOverlay);
    window.removeEventListener('keydown', closePopupByClickOnEsc);
  };

  const closePopupByClickOnEsc = (e) => {
    e.key === 'Escape' && closeActivePopup();
  };

  const closePopupByClickOnOverlay = (e) => {
    e.target === overlayEl && closeActivePopup();
  };

  const openPopup = () => {
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
    overlayEl.classList.add('active');
    popupEl.classList.add('active');
    window.addEventListener('click', closePopupByClickOnOverlay);
    window.addEventListener('keydown', closePopupByClickOnEsc);
  };

  togglePopupBtnEls.forEach((btn) => {
    btn.addEventListener('click', openPopup);
  });

  closePopupBtnEl.addEventListener('click', closeActivePopup);
});
