new Swiper('.about_placing_swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    1180: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new Swiper('.technologies_list', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    1100: {
      slidesPerView: 4,
      spaceBetween: 11,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 11,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: '.button_next',
    prevEl: '.button_prev',
  },
});

new Swiper('.steps__container', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    1100: {
      slidesPerView: 4,
      spaceBetween: 89,
    },
    868: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: '.button_next',
    prevEl: '.button_prev',
  },
});

new Swiper('.services', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    1100: {
      slidesPerView: 4,
      spaceBetween: 11,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 11,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: '.button_next',
    prevEl: '.button_prev',
  },
});
