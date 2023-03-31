/**
 * @name video-iframe
 * @function handle youtube video iframe
 */

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


$(function(){
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video_blog_iframe', {
      height: '360',
      width: '640',
      videoId: '6p0VM-yUpGk',
      playerVars : {
        autoplay: 1,
        rel: 0,
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    // event.target.playVideo();
  }

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      // setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function playVideo() {
    player.playVideo();
  }

  function stopVideo() {
    $('iframe#video_blog_iframe').remove();
    $('#video_modal .text-center').append("<div id='video_blog_iframe'></div>")
  }
  $('.modal').modal({
    onOpenEnd: function(e, btn) {
      onYouTubeIframeAPIReady();
    },
    onCloseEnd: function() {
      stopVideo()
    }
  });
  $('.modal .modal-close').click(function(){
    stopVideo();
  })
});

/******** END Video Iframe ********/
