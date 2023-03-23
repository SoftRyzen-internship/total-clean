import { togglePopup } from './popup';

const refs = {
  popupContent: document.querySelector('.popup-content'),
  socialMedia: document.querySelector('[data-social-media]'),
  popupTitle: document.querySelector('.popup__title'),
  popupSubtitle: document.querySelector('.popup__subtitle'),
  popupBtn: document.querySelector('.popup__btn'),
};

refs.socialMedia.addEventListener('click', e => {
  if (e.target.tagName !== 'UL') {
    togglePopup();

    refs.popupTitle.textContent = 'This page is under construction';
    refs.popupSubtitle.textContent = "Sorry for the inconvenience! We'll be with you soon.";
    refs.popupBtn.textContent = 'Back to Home Page';
    refs.popupContent.classList.replace('popup-content', 'popup-underConstruction');
  }
});
