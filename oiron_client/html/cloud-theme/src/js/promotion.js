/**
 * @name promotion carousel
 * @function handle carousel tag
 */

$(function() {
  var $carousel = $('#promotion_slider');

  // Handle carousel
  $carousel.slick({
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: true
        }
      }
    ]
  });

  // Handle navigation
  $('#promotion_prev').click(function() {
    $carousel.slick('slickPrev');
  });

  $('#promotion_next').click(function() {
    $carousel.slick('slickNext');
  });
});
