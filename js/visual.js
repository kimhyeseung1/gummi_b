window.addEventListener("load", function () {
  var swiper = new Swiper(".visual_swiper", {
    autoplay: {
        delay: 3000,
    },
    loop: true,
    slidesPerView: 1,
    autoWidth: true,
    autoHeight: true,

    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,

    pagination: {
        el: ".visual_swiper .swiper-pagination",
        clickable: true,
    },

    navigation: {
        prevEl: ".visual_swiper .swiper-button-prev",
        nextEl: ".visual_swiper .swiper-button-next",
    },
  });
});
