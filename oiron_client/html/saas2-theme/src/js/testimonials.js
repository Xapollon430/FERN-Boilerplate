/**
 * @name testimonial carousel
 * @function handle carousel tag
 */

$(function() {
  var $carousel = $('#testimonial_carousel');
  // Handle carousel tag
  $carousel.slick({
    infinite: true,
    dots: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000
  });

  // Handle slick navigation
  $('#prev_testi').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_testi').click(function() {
    $carousel.slick('slickNext');
  });
});