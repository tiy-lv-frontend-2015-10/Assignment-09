$(document).ready(function(){
	setInterval(displayTime, 1000);
});






function displayTime() {
	var rawTime = new Date;
	$('#hours').html(formatHour(rawTime));
	$('#minutes').html(formatMinute(rawTime));
	$('#seconds').html(formatSecond(rawTime));
	$('#amPm').html(formatAP(rawTime));
}

function formatHour(t) {
	var hap;
	var hd = "";
	var h = t.getHours();
	 	if (h < 13) {
			var hap = h;
		}else { var hap = h - 12;
		}
	if (hap < 10) {
		var hd = "0" + hap.toString();
	}else {
		var hd = hap.toString();
	}
	return hd;
}


function formatMinute(t) {
	var md = "";
	var m = t.getMinutes();
	 	if (m < 10) {
			md = ":0" + m.toString();
		}else {
			md = ":" + m.toString();
		}
		return md;
}

function formatSecond(t) {
	var sd = "";
	var s = t.getSeconds();
	 	if (s < 10) {
			sd = ":0" + s.toString();
		}else {
			sd = ":" + s.toString();
		}
		return sd;

}
function formatAP(t) {
	var ap = "";
	var h = t.getHours();
	if (h < 12) {
		ap = "AM";
	}else {
		ap = "PM"
	}
	console.log(ap);
	return ap;
}

displayTime();
