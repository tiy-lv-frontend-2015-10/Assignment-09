$(document).ready(function() {
	function displayTime() {
		var currentTime = new Date();
		var hours = (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
		var minutes = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
		var seconds = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
		var clock = document.getElementById("clock");

		clock.innerHTML = hours + ":" + minutes + ":" + seconds;
	}

	displayTime()
	setInterval(displayTime,1000)
});
