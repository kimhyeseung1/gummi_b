window.addEventListener("load", function () {
    new Swiper(".visualswiper", {
        autoHeight: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        slidesPerView: 1,
        autoWidth: true,
        autoHeight: true,

        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,

        pagination: {
            el: ".visual .swiper-pagination",
            clickable: true,
        },

        navigation: {
            prevEl: ".visual .swiper-button-prev",
            nextEl: ".visual .swiper-button-next",
        },
    });
});
