/**
 * Handle css class by using Media query for news card
 * @description It will switch class landscape to potrait
 * @in xsDown resolution
 */

var mqNews = {
  xsDown: "screen and (max-width: 599px)",
}

function matchMobile() {
  $('#news-event .news-card').addClass("portrait").removeClass("landscape");
}

function unmatchMobile() {
  $('#news-event .news-card').addClass("landscape").removeClass("portrait");
}

// Define handler action
var handler_xsDown = {
  match : function() { matchMobile() },
  unmatch : function() { unmatchMobile() }
};

// Register to enquire.js
enquire.register(mqNews.xsDown, handler_xsDown)
