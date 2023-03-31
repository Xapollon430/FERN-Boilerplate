/**
 * @name payment step carousel
 * @function handle carousel tag
 */

$(function() {
  var $carousel = $('#payment_slider');

  // Handle carousel
  $carousel.slick({
    dots: true,
    arrows: false,
    speed: 800,
    infinity: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true
  });
});
