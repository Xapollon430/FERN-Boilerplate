/**
 * @name discover carousel
 * @function handle carousel slider
 */

$(function() {
  var $carousel = $('#slider_discover');
  // Handle carousel tag
  $carousel.slick({
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 2,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});