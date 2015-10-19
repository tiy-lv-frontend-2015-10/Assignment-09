$(document).ready(function(){

myClock();
setInterval(myClock, 1000);


});
	var myClock = function() {
	var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

	var newMinutes = (minutes < 10 ? "0" : "" ) + minutes;
  	var newSeconds = (seconds < 10 ? "0" : "" ) + seconds;
  	var newHours = (hours > 12 ? hours - 12 : hours);
    var currentTime = (newHours + ":" + newMinutes + ":" + newSeconds);

	$("#clock").html(currentTime);


  }


///////

  // Pad the minutes and seconds with leading zeros, if required
   //  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
   //  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  //   var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
   //  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
    // currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
    // var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
   //  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  // }
