import Swiper, { Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],

  // autoplay: {
  //   delay: 3000,
  // },

  freeMode: true,
  speed: 800,

  // effect: 'coverflow',
  // preloadImages: false,

  // coverflowEffect: {
  //   rotate: 20,
  //   stretch: 50,
  //   slideShadows: true,
  // },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },

  slideToClickedSlide: true,
  watchOverflow: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2.4,
      spaceBetween: 32,
      slidesPerGroup: 2,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 32,
      slidesPerGroup: 4,
    },
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: true,
    eventsTarget: '.swiper',
  },
});
