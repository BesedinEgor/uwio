const comunicationSwiper = new Swiper(".comunication-swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".comunication-swiper-pagination",
  },
  breakpoints: {
    1080: {
      slidesPerView: 3,
    },
    
  },
});


const purposesSwiper = new Swiper(".purposes-swiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
    1080: {
      slidesPerView: 3,
    },
  },
});


const reviewsSwiper = new Swiper(".reviews-swiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1080: {
      slidesPerView: 1,
    },
  },
});

  const advantagesSwiper = new Swiper(".advantages-swiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1080: {
        slidesPerView: 1,
      },
    },
  });

const teamSwiper = new Swiper(".team-slider-swiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1080: {
      slidesPerView: 1,
    },
  },
});
