/**
 * @name case studies carouses
 * @function handle slick carousel for case studies
 */

$(document).ready(function(){
  var showSlide = 2;
  var $carousel = $('#case_studies_carousel');
  // Slick go to the last slide
  if (window.innerWidth > 1200 && $("html").attr("dir") === "ltr") {
    var prop = window.innerWidth > 1400 ? 0 : 1;
    var lastSlide = Math.floor($carousel.data('length') - showSlide + prop);
    setTimeout(function() {
      $carousel.slick('slickGoTo', lastSlide);
    }, 100)
  }

  // slick carousel config
  $carousel.slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          dots: false,
          slidesToShow: 1
        }
      }
    ]
  });
  
  // Fade effect
  var sliderArt = $('#art_case_studies');
  $carousel.on('afterChange', function(slick, currentSlide){
    if (currentSlide.currentSlide >= 1) {
      sliderArt.addClass('faded');
      $('#prev_case').removeClass('disabled');
    } else {
      sliderArt.removeClass('faded');
      $('#prev_case').addClass('disabled');
    }
  });

  // Handle slick navigation
  $('#prev_case').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_case').click(function() {
    $carousel.slick('slickNext');
  });
})

/**
 * @name case study
 * @function lightbox gallery
 * @function selected menu
 */

$('#case_categories li').click(function(){
  $('#case_categories li').removeClass('active');
  $(this).addClass('active');
});

$('#case_studies_carousel').each(function() { 
  $(this).magnificPopup({
    delegate: '.item a',
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });
});
