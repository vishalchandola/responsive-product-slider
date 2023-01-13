var windowWidth = $(window).width();
var $sliderWrapper = $(".product-slider-wrapper");
var $secondarySliderWrapper = $(".secondary-slider-wrapper");

function slider() {
  mobileWidth = windowWidth;
  var primarySliderRef = $(".primary-slider").bxSlider({
    responsive: true,
    slideWidth: 600,
    touchEnabled: false,
    startSlide: 0,
    auto: true,
    onSlideNext: function (_, __, newIndex) {
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
      if ($sliderWrapper.hasClass("handleClick")) {
        $(".secondary-slider-wrapper, .close, .overlay").show();
        $secondarySliderWrapper.addClass("active");
      }
    });

    $(".close").on("click", function () {
      $(this).hide();
      $(".overlay").hide();
      $secondarySliderWrapper.removeClass("active");
    });
  }
}

$(document).ready(function () {
  slider();
  $sliderWrapper.addClass("handleClick");
});

$(window).resize(function () {
  windowWidth = $(window).width();
  if (windowWidth <= 768) {
    $sliderWrapper.addClass("handleClick");
    slider();
  } else {
    $sliderWrapper.removeClass("handleClick");
    $secondarySliderWrapper.removeClass("active");
    $(".overlay, .close").hide();
  }
});
