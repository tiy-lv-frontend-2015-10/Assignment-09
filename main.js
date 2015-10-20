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

// adding in the needed stuff to make the colors change with your help.
//this doesnt count - just took what you did in class to help better my understanding of the whole hex thing.
function updateColor() {
	var $hard = $("#hard");
	var currentVal = $hard.html();
	var body = $(document.body);
	currentVal = currentVal.substr(1);

	var hexRed = currentVal.substring(0,2);
	var hexGreen = currentVal.substring(2,4);
	var hexBlue = currentVal.substring(4,6);

	var decRed = parseInt(hexRed, 16);
	var decBlue = parseInt(hexBlue, 16);
	var decGreen = parseInt(hexGreen, 16);
	var incValue = 25;

	decBlue += incValue;

	if(decBlue > 255) {
		decBlue = 0;
		decGreen += incValue;
		if(decGreen > 255) {
			decGreen = 0;
			decRed = incValue;
			if(decRed > 255) {
				decBlue = 0;
				decGreen = 0;
				decRed = 0;
			}
		}
	}

	hexBlue = decBlue.toString(16);
	if(hexBlue.length < 2){
		hexBlue = "0" + hexBlue;
	}

	hexGreen = decGreen.toString(16);
	if(hexGreen.length < 2){
		hexGreen = "0" + hexGreen;
	}

	hexRed = decRed.toString(16);
	if(hexRed.length < 2){
		hexRed = "0" + hexRed;
	}

	var newColor = '#' + hexBlue + hexGreen + hexRed)
	$hard.html(newColor);
	body.css('background-color', '#' + newColor);

}


	setInterval(updateColor, 500);
}