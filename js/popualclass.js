$(document).ready(function() {
  var $swiper = $(".swiper-container");
  var $bottomSlide = null;
  var $bottomSlideContent = null;

  var mySwiper = new Swiper(".popualclass .swiper-container", {
    spaceBetween: 1,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".popualclass .swiper-button-next",
      prevEl: ".popualclass .swiper-button-prev"
    },
    breakpoints: {
      320: {
        spaceBetween: 1,
        slidesPerView: 1,
      },
    
      758: {
        spaceBetween: 1,
        slidesPerView: 2,
      },
      1920: {
        spaceBetween: 1,
        slidesPerView: 3,
      }
    
    }
  });

  // 마우스 오버 시 슬라이드 일시 정지
  $swiper.on('mouseenter', function() {
    mySwiper.autoplay.stop();
  });

  // 마우스 아웃 시 슬라이드 다시 재생
  $swiper.on('mouseleave', function() {
    mySwiper.autoplay.start();
  });
});

