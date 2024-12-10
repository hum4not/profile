$(document).ready(function() {
    let video = $('<video muted></video>');
    video.attr('id', 'background-video');
    video.append('<source src="source.mp4" type="video/mp4">');
    $('body').append(video);
  
    let titleText = "humanot";
    let titleElement = $("#title");
    let originalText = titleText;
    let digitIndex = -1;
  
    setInterval(function() {
      if (digitIndex === -1) {
        digitIndex = Math.floor(Math.random() * titleText.length);
      }
  
      let char = titleText[digitIndex];
      let newChar = isNaN(char) ? Math.floor(Math.random() * 10) : originalText[digitIndex];
      titleText = titleText.substring(0, digitIndex) + newChar + titleText.substring(digitIndex + 1);
      titleElement.text(titleText);
  
      if (isNaN(newChar)) {
        digitIndex = -1;
      }
  
    }, 100);

    $('.button').click(function(event) {
        event.preventDefault();
        window.open($(this).attr('href'), '_blank');
      });

    function resetVideo() {
    let videoElement = document.getElementById('background-video');
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0; // Возвращаем к началу
        videoElement.play();
    }
    }

    $('body').click(function() {
        resetVideo();
      });
    
    resetVideo(); 

  });