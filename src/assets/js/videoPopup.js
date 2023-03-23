import { toggleModal } from './onClickCardServices';

const modal = document.querySelector('.modal-content');
const reviewsList = document.querySelector('.reviews-list');

reviewsList.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    modal.innerHTML = `
    <iframe
      width="441"
      height="784"
      src=${e.target.dataset.video}
      title="#shorts"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
      web-share" allowfullscreen>
    </iframe>`;

    toggleModal();
  }
});
