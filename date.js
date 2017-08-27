function startTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var t = setTimeout(startTime, 500)

  if (hours >= 12) {
    hours = hours - 12
  }

  document.getElementById('timer').innerHTML = hours + ":" + minutes + ":" + seconds;
}


startTime()
