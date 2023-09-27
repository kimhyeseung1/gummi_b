$(document).ready(function() {
  // Assign some jquery elements we'll need
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

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
        slidesPerView:3,
      }
    
    }
  });
  
});


