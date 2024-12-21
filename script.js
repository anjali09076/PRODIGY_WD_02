let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCounter = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("start-stop").textContent = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("start-stop").textContent = "Pause";
    }
    isRunning = !isRunning;
}

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById("time-display").textContent = formatTime(hours, minutes, seconds);
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCounter = 1;
    document.getElementById("time-display").textContent = formatTime(hours, minutes, seconds);
    document.getElementById("lap-list").innerHTML = '';
    document.getElementById("start-stop").textContent = "Start";
}

function recordLap() {
    if (isRunning) {
        const lapTime = formatTime(hours, minutes, seconds);
        const lapItem = document.createElement("li");
        lapItem.textContent = "Lap " + lapCounter + ": " + lapTime;
        document.getElementById("lap-list").appendChild(lapItem);
        lapCounter++;
    }
}

function formatTime(hours, minutes, seconds) {
    return (
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds
    );
}
