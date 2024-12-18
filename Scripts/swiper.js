var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    centeredSlides: true,
    fade: true,
    spaceBetween: 25,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        1045: {
            slidesPerView: 3,
        },
    },
  });