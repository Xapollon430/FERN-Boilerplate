/**
 * @name services carousel
 * @function handle slick carousel for services lit
 */

$(document).ready(function(){
  var $carousel = $('#services_carousel');
  // Slick go to the last slide
  if ($("html").attr("dir") === "rtl") {
    var lastSlide = Math.floor($carousel.data('length') - 2)
    setTimeout(function() {
      $carousel.slick('slickGoTo', lastSlide);
    }, 100);
  }

  // slick carousel config
  $carousel.slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  
  // Fade effect
  var sliderArt = $('#art_services');
  $carousel.on('afterChange', function(slick, currentSlide){
    if (currentSlide.currentSlide >= 1) {
      sliderArt.addClass('faded');
    } else {
      sliderArt.removeClass('faded');
    }
  });

  // Handle slick navigation
  $('#prev_services').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_services').click(function() {
    $carousel.slick('slickNext');
  });
})