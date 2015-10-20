$(document).ready(function(){
	setInterval(displayTime, 1000);
});






function displayTime() {
	var rawTime = new Date;
	$('#hours').html(formatHour(rawTime));
	$('#minutes').html(formatMinute(rawTime));
	$('#seconds').html(formatSecond(rawTime));
}

function formatHour(t) {
	var h = t.getHours();
	 	if (h < 10) {
			var hd = "0" + h.toString();
		}else {
			var hd = h.toString();
		}
		console.log(hd);
		return hd;
}

function formatMinute(t) {
	var m = t.getMinutes();
	 	if (m < 10) {
			var md = ":0" + m.toString();
		}else {
			var md = ":" + m.toString();
		}
		return md;
}

function formatSecond(t) {
	var s = t.getSeconds();
	 	if (s < 10) {
			var sd = ":0" + s.toString();
		}else {
			var sd = ":" + s.toString();
		}
		return sd;

}
displayTime();

// window.setInterval()
