$(document).ready(function(){

	function displayTime ( ){

		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

			
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;

		$('#numbers').html(hours + ":" + minutes + ":" + seconds);
	}

	displayTime();
	setInterval(displayTime, 1000);

});


	