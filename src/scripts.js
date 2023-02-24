var hourTensVar = 0;
var hourOnesVar = 0;
var minuteTensVar = 0;
var minuteOnesVar = 0;

var intervalId;

var isStart = false;

var timerFunc = () => {
  minuteOnesVar++;
  if (minuteOnesVar == 10) {
    minuteOnesVar = 0;
    minuteTensVar++;
    if (minuteTensVar == 6) {
      minuteTensVar = 0;
      hourOnesVar++;
      if (hourOnesVar == 10) {
        hourOnesVar = 0;
        hourTensVar++;
        if (hourTensVar == 6) {
          hourTensVar = 0;
        }
        document.getElementById("hourTens").innerText = String(hourTensVar);
      }
      document.getElementById("hourOnes").innerText = String(hourOnesVar);
    }
    document.getElementById("minuteTens").innerText = String(minuteTensVar);
  }
  document.getElementById("minuteOnes").innerText = String(minuteOnesVar);
};

// On the click of Start button
var startFunc = () => {
  if (!isStart) {
    intervalId = setInterval(timerFunc, 1000);
    document.getElementById("startButton").classList.add("inactive")
    document.getElementById("stopButton").classList.remove("inactive")
    document.getElementById("resetButton").classList.remove("inactive")
    isStart = true;
  }
};
// On the click of Stop button
var stopFunc = () => {
  if (isStart) {
    clearInterval(intervalId);
    minuteOnesVar = document.getElementById("minuteOnes").innerText;
    minuteTensVar = document.getElementById("minuteTens").innerText;
    hourOnesVar = document.getElementById("hourOnes").innerText;
    hourTensVar = document.getElementById("hourTens").innerText;
    document.getElementById("startButton").classList.remove("inactive")
    document.getElementById("stopButton").classList.add("inactive")
    document.getElementById("resetButton").classList.remove("inactive")
    isStart = false;
  }
};
// On the click of Reset button
var resetFunc = () => {
  if (isStart) {
    clearInterval(intervalId);
    isStart = false;
  }
  minuteOnesVar = 0;
  minuteTensVar = 0;
  hourOnesVar = 0;
  hourTensVar = 0;
  document.getElementById("minuteOnes").innerText = "0";
  document.getElementById("minuteTens").innerText = "0";
  document.getElementById("hourOnes").innerText = "0";
  document.getElementById("hourTens").innerText = "0";
  document.getElementById("startButton").classList.remove("inactive")
  document.getElementById("stopButton").classList.add("inactive")
  document.getElementById("resetButton").classList.add("inactive")
};
