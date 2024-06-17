let timer;
let secondsRemaining = 90 * 60; // tiempo en segundos

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsPart = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsPart).padStart(2, '0')}`;
}

function updateTimeDisplay() {
    const timeDisplay = document.getElementById('time-display');
    timeDisplay.textContent = formatTime(secondsRemaining);
}

function countdown() {
    if (secondsRemaining > 0) {
        secondsRemaining--;
        updateTimeDisplay();
    } else {
        clearInterval(timer);
        document.getElementById('start-button').disabled = false;
        document.getElementById('stop-button').disabled = true;
    }
}

function startTimer() {
    const startButton = document.getElementById('start-button');
    const stopButton = document.getElementById('stop-button');
    startButton.disabled = true;
    stopButton.disabled = false;

    timer = setInterval(countdown, 1000);
}

function stopTimer() {
    clearInterval(timer);
    document.getElementById('start-button').disabled = false;
    document.getElementById('stop-button').disabled = true;
}

document.getElementById('start-button').addEventListener('click', startTimer);
document.getElementById('stop-button').addEventListener('click', stopTimer);