
function countdown() {
  var startTime = localStorage.getItem("timerStartTime");
  var currentTime = new Date().getTime();
  var timer;
  if (startTime) {
    timer = Math.floor((parseInt(startTime) + (2 * 60 * 60 * 1000) - currentTime) / 1000);
  } else {
    timer = 10; // set the countdown time in seconds
    localStorage.setItem("timerStartTime", currentTime.toString());
  }
  var x = setInterval(function() {
    var hours = Math.floor(timer / 3600);
    var minutes = Math.floor((timer % 3600) / 60);
    var seconds = Math.floor(timer % 60);
    var timerText = 'Time remaining ' + 
      (hours < 10 ? '0' : '') + hours + ' hours ' + 
      (minutes < 10 ? '0' : '') + minutes + ' minutes ' + 
      (seconds < 10 ? '0' : '') + seconds + ' seconds';
    document.getElementById("timer").innerHTML = timerText;
    if (timer <= 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Time is Over!";
      localStorage.removeItem("timerStartTime");
    }
    timer--;
  }, 1000);
}
