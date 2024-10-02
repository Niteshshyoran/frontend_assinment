const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let timer;
let seconds = 0;  
let isRunning = false;

function updateDisplay() {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');  
    timerDisplay.textContent = `${minutes}:${sec}`;  
}


startButton.addEventListener("click", () => {
    if (!isRunning) {  
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
        isRunning = true;
        startButton.disabled = true;
        stopButton.disabled = false;
    }
});

stopButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        startButton.disabled = false;
        stopButton.disabled = true;
    }
});


resetButton.addEventListener("click", () => {
    clearInterval(timer);
    seconds = 0; 
    updateDisplay(); 
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
});

stopButton.disabled = true;  
