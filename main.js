$(document).ready(function() {
setInterval(myClock ,1000);
});

var myClock = function (){
var time = new Date();
var hours = time.getHours();
var newHours = (hours > 12 ? hours - 12 : hours);
var mins = time.getMinutes();
var newMins= (mins < 10?"0":"")+ mins;
var secs  = time.getSeconds();
var newSecs = (secs < 10?"0":"")+ secs;
var currentTime = (newHours +":"+ newMins +":"+ newSecs)


$("#clock").html(currentTime);
};

