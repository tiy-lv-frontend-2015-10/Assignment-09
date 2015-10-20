$(document).ready(function() {
    
function countDown() {  
    
    var today = new Date().getTime();
    var graduate = new Date("January 8, 2016").getTime();


    var countingDown = graduate - today;
    var days = countingDown / (60 * 60 * 24 * 1000);
    var hours = Math.floor(days / 24);
    var minutes = Math.floor(hours / 60);
    var seconds = Math.floor(minutes / 60);
    days = Math.floor(days);
    
    hours = (hours < 10 ? "0" : " ") + hours;
    minutes = (minutes < 10 ? "0" : " ") + minutes;
    seconds = (seconds < 10 ? "0" : " ") + seconds;
    
    
$("#theTimer").html(days + " days: " + hours + " hours: " + minutes + " minutes: " + seconds + " seconds until we graduate!");

 } //countDown function  

countDown();
setInterval(countdown, 1000);

}); //document ready


