
function startTime (){
var today = new Date();
var hour = today.getHours();
	(24 > 0) ? true : false;
var min = today.getMinutes();
	(60 > 0) ? true : false;
var sec = today.getSeconds();
	(60 > 0) ? true : false;
var milli = today.getMilliseconds();
	

document.getElementById("clock").innerHTML =
	hour + ':' + min + ':' + sec;

var time = setTimeout(startTime, 1000);


console.log(startTime);

console.log(hour);
console.log(min);
console.log(sec);
console.log(milli); 

}

startTime()
  
