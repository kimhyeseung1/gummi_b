window.addEventListener("load", function () {
    new Swiper(".interview_section .swiper", {
        autoplay: {
            delay: 4000,
        },
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        autoHeight: true,
        pagination: {
            el: ".interview_section .swiper-pagination",
            clickable: true,
        },

        navigation: {
            prevEl: ".interview_section .swiper-button-prev",
            nextEl: ".interview_section .swiper-button-next",
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            760: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
        },
    });
});
