"use strict";

// $(document).ready(function() {
//     $('#slider').lightSlider({
//         speed:600,
//         slideMargin: 33,
//         item:3.8,
//         loop:false,
//         slideMove:2,
//     });
// });
$(document).ready(function () {
  var slider = $('#slider').lightSlider({
    controls: false,
    item: 3.8,
    loop: true,
    slideMargin: 33
  });
  $('.prev').on('click', function () {
    slider.goToPrevSlide();
  });
  $('.next').on('click', function () {
    slider.goToNextSlide();
  });
});