var windowWidth = $(window).width();
function slider() {
  mobileWidth = windowWidth;
  var primarySliderRef = $(".primary-slider").bxSlider({
    responsive: true,
    slideWidth: 600,
    touchEnabled: false,
    startSlide: 0,
    auto: true,
    onSlideNext: function (_, __, newIndex) {
      console.log("newIndex----", newIndex);
      sedondarySliderRef.goToSlide(newIndex);
    },
    onSlidePrev: function (_, __, newIndex) {
      sedondarySliderRef.goToSlide(newIndex);
    },
  });

  var sedondarySliderRef = $(".secondary-slider").bxSlider({
    responsive: true,
    touchEnabled: false,
    startSlide: 0,
    auto: false,
    slideWidth: 0,
    pagerCustom: ".bx-pager",
    controls: false,
    onSlideNext: function (_, __, newIndex) {
      primarySliderRef.goToSlide(newIndex);
    },
    onSlidePrev: function (_, __, newIndex) {
      primarySliderRef.goToSlide(newIndex);
    },
  });

  if (mobileWidth <= 768) {
    $(".img-wrapper").on("click", function () {
      if ($(".product-slider-wrapper").hasClass("handleClick")) {
        $(".secondary-slider-wrapper, .close, .overlay").show();
        $(".secondary-slider-wrapper").addClass("active");
      }
    });

    $(".close").on("click", function () {
      $(this).hide();
      $(".overlay").hide();
      $(".secondary-slider-wrapper").removeClass("active");
    });
  }
}

$(document).ready(function () {
  slider();
  $(".product-slider-wrapper").addClass("handleClick");
});

$(window).resize(function () {
  windowWidth = $(window).width();
  if (windowWidth <= 768) {
    $(".product-slider-wrapper").addClass("handleClick");
    slider();
  } else {
    $(".product-slider-wrapper").removeClass("handleClick");
    $(".secondary-slider-wrapper").removeClass("active");
    $(".overlay, .close").hide();
  }
});
