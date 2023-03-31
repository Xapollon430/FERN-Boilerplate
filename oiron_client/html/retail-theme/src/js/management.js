/**
 * @name management carousel
 * @function handle carousel slider
 */

$(function() {
  var $carouselSide = $('#slider_side');
  var $carouselCenter = $('#slider_center');

  setTimeout(function() {
    $carouselSide.slick('slickGoTo', 1);
  }, 100)

  // Handle carousel tag
  $carouselSide.slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 3,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.slider-center'
  });
  $carouselCenter.slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    fade: true,
    arrows: false,
    pauseOnHover: true,
    asNavFor: '.slider-side'
  });
});