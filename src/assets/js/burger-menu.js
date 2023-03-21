const burgerBtn = document.querySelector('[data-burger-menu]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const closeBtn = document.querySelector('[data-close]');

burgerBtn.addEventListener('click', e => {
  mobileMenu.style.transform = 'translateX(0)';
});

mobileMenu.addEventListener('click', e => {
  const { tagName } = e.target;

  if (tagName !== 'DIV' && tagName !== 'UL' && tagName !== 'NAV') {
    mobileMenu.style.transform = 'translateX(100%)';
  }
});
