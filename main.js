$(document).ready(function() {
updateTime();
setInterval(updateTime, 1000);

});

var updateTime = function() {

  var time = new Date();

  var hours = time.getHours();

  var minutes = time.getMinutes();

  var seconds = time.getSeconds();

  var currentMinutes = (minutes < 10 ? "0" : "") + minutes;

  var currentSeconds = (seconds < 10 ? "0" : "") + seconds;

  var currentHours = (hours > 12 ? hours - 12 : hours);

  var currentTime = (currentHours + ":" + currentMinutes + ":" + currentSeconds);

  $("#clock").html(currentTime);
}

