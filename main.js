$(document).ready(function(){

function getTime(){
	var displayTime = new Date();
	var hrs = displayTime.getHours();
	var mins = displayTime.getMinutes();
	var secs = displayTime.getSeconds();
		mins = (mins < 10 ? "0" : "") + mins;
		secs = (secs < 10 ? "0" : "") + secs;
		hrs = (hrs < 10 ? "0" : "") + hrs;
	var time = document.getElementById("clock");
	time.innerHTML = hrs + ":" + mins + ":" + secs;

}
	getTime();
	setInterval(getTime, 1000);
});

