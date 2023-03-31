/**
 * @name benefit carousel
 * @function handle carousel tag
 */

$(function() {
  var $carousel = $('#benefit_slider');

  // Handle carousel
  $carousel.slick({
    dots: true,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 10000
  });

  // Handle navigation
  $('#benefit_prev').click(function() {
    $carousel.slick('slickPrev');
  });

  $('#benefit_next').click(function() {
    $carousel.slick('slickNext');
  });
});
