// Time Variables
var minuteTensVar = 0;
var minuteOnesVar = 0;
var secondTensVar = 0;
var secondOnesVar = 0;
// Interval ID Variable
var intervalId;
// Variable storing true if the stopwatch has started, false if it has not
var isStarted = false;
/* 
    Function allows us to update the status of the stopwatch variables
    and update the time on the HTML Element(s) corresponding to which
    the change must occur.
*/
var stopwatchFunc = () => {
  secondOnesVar++;
  if (secondOnesVar == 10) {
    secondOnesVar = 0;
    secondTensVar++;
    if (secondTensVar == 6) {
      secondTensVar = 0;
      minuteOnesVar++;
      if (minuteOnesVar == 10) {
        minuteOnesVar = 0;
        minuteTensVar++;
        if (minuteTensVar == 6) {
          minuteTensVar = 0;
        }
        document.getElementById("minuteTens").innerText = String(minuteTensVar);
      }
      document.getElementById("minuteOnes").innerText = String(minuteOnesVar);
    }
    document.getElementById("secondTens").innerText = String(secondTensVar);
  }
  document.getElementById("secondOnes").innerText = String(secondOnesVar);
};

// On the click of Start button
var startFunc = () => {
  if (!isStarted) {
    intervalId = setInterval(stopwatchFunc, 1000);
    document.getElementById("startButton").classList.add("inactive");
    document.getElementById("stopButton").classList.remove("inactive");
    document.getElementById("resetButton").classList.remove("inactive");
    isStarted = true;
  }
};
// On the click of Stop button
var stopFunc = () => {
  if (isStarted) {
    clearInterval(intervalId);
    secondOnesVar = document.getElementById("secondOnes").innerText;
    secondTensVar = document.getElementById("secondTens").innerText;
    minuteOnesVar = document.getElementById("minuteOnes").innerText;
    minuteTensVar = document.getElementById("minuteTens").innerText;
    document.getElementById("startButton").classList.remove("inactive");
    document.getElementById("stopButton").classList.add("inactive");
    document.getElementById("resetButton").classList.remove("inactive");
    isStarted = false;
  }
};
// On the click of Reset button
var resetFunc = () => {
  if (isStarted) {
    clearInterval(intervalId);
    isStarted = false;
  }
  secondOnesVar = 0;
  secondTensVar = 0;
  minuteOnesVar = 0;
  minuteTensVar = 0;
  document.getElementById("secondOnes").innerText = "0";
  document.getElementById("secondTens").innerText = "0";
  document.getElementById("minuteOnes").innerText = "0";
  document.getElementById("minuteTens").innerText = "0";
  document.getElementById("startButton").classList.remove("inactive");
  document.getElementById("stopButton").classList.add("inactive");
  document.getElementById("resetButton").classList.add("inactive");
};
