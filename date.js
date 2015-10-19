$ (document).ready(function(){
  function timedisplay(){
  	var displaytime = new Date();
  	var hours = displaytime.getHours();
  	var minutes = displaytime.getMinutes();
  	var seconds = displaytime.getSeconds();
  	
  	if(seconds < 10 ){
  		seconds = "0" + seconds;
  	}

	if(minutes < 10 ){
  		minutes = "0" + minutes;
  	}


  	if(hours > 12 ){
  		hours = hours - 12;
  		

  	}

  	if (hours === 0){
  		hours = 12;
  	}


  	var Timer = document.getElementById("Timer");
Timer.innerHTML = hours + ":" + minutes + ":" + seconds + " ";

  }


timedisplay();
setInterval(timedisplay,1000)
});


































