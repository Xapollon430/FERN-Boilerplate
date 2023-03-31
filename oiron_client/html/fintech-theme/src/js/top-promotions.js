/**
 * @name top promotions carousel
 * @function handle carousel tag
 */

$(function() {
  var $carousel = $('#promotions_slider');
  // Handle carousel tag
  $carousel.slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  // Handle slick navigation
  $('#prev_promo').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_promo').click(function() {
    $carousel.slick('slickNext');
  });
});
