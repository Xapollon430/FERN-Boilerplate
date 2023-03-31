/**
 * @name Explore
 * @function open and close (toggle expand) book in rack
 */

var $bookOpen1 = $('#cat1 .book'),
    $bookOpen2 = $('#cat2 .book'),
    $bookOpen3 = $('#cat3 .book');

$bookOpen1.click(function() {
  $bookOpen1.removeClass('expanded').addClass('collapsed');
  $(this).addClass('expanded').removeClass('collapsed');
});

$bookOpen2.click(function() {
  $bookOpen2.removeClass('expanded').addClass('collapsed');
  $(this).addClass('expanded').removeClass('collapsed');
});

$bookOpen3.click(function() {
  $bookOpen3.removeClass('expanded').addClass('collapsed');
  $(this).addClass('expanded').removeClass('collapsed');
});
