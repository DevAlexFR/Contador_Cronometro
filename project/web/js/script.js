document.addEventListener("DOMContentLoaded", () => {

  const countDisplay = document.getElementById("count");
  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");
  const resetButton = document.getElementById("reset");

  const updateDisplay = () => (countDisplay.textContent = count);
  const saveToLocalStorage = () => localStorage.setItem("counter", count);

  let count = parseInt(localStorage.getItem("counter")) || 0; 
 
  incrementButton.addEventListener("click", () => {
    count++;
    updateDisplay();
    saveToLocalStorage();
  });

  decrementButton.addEventListener("click", () => {
    count--;
    updateDisplay();
    saveToLocalStorage();
  });

  resetButton.addEventListener("click", () => {
    count = 0;
    updateDisplay();
    saveToLocalStorage();
  });

  updateDisplay();



  const timerDisplay = document.getElementById("timer");
  const startTimerButton = document.getElementById("start-timer");
  const stopTimerButton = document.getElementById("stop-timer");
  const resetTimerButton = document.getElementById("reset-timer");

  const updateTimerDisplay = () => (timerDisplay.textContent = formatTime(seconds));
  const saveTimerToLocalStorage = () => localStorage.setItem("timerSeconds", seconds);

  let seconds = parseInt(localStorage.getItem("timerSeconds")) || 0;
  let timer = null;

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };


  startTimerButton.addEventListener("click", () => {
    if (timer === null) {
      timer = setInterval(() => {
        seconds++;
        updateTimerDisplay();
        saveTimerToLocalStorage();
      }, 1000);
    }
  });

  stopTimerButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
  });

  resetTimerButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateTimerDisplay();
    saveTimerToLocalStorage();
  });

  updateTimerDisplay();
});
