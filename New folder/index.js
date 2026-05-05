let scoreHistory = [];

function addOne() {
    scoreHistory.push({ team: 'home', points: 1 });
    let num1 = parseInt(document.getElementById("homeScore").textContent)
    num1 += 1
    document.getElementById("homeScore").textContent = num1
}

function addOneG() {
    scoreHistory.push({ team: 'guest', points: 1 });
    let num2 = parseInt(document.getElementById("guestScore").textContent)
    num2 += 1
    document.getElementById("guestScore").textContent = num2
}

function addTwo() {
    scoreHistory.push({ team: 'home', points: 2 });
    let num1 = parseInt(document.getElementById("homeScore").textContent)
    num1 += 2
    document.getElementById("homeScore").textContent = num1
}

function addTwoG() {
    scoreHistory.push({ team: 'guest', points: 2 });
    let num2 = parseInt(document.getElementById("guestScore").textContent)
    num2 += 2
    document.getElementById("guestScore").textContent = num2
}

function addThree() {
    scoreHistory.push({ team: 'home', points: 3 });
    let num1 = parseInt(document.getElementById("homeScore").textContent)
    num1 += 3
    document.getElementById("homeScore").textContent = num1
}

function addThreeG() {
    scoreHistory.push({ team: 'guest', points: 3 });
    let num2 = parseInt(document.getElementById("guestScore").textContent)
    num2 += 3
    document.getElementById("guestScore").textContent = num2
}

function nextPeriod() {
  document.getElementById("homeScore").textContent = '00'
    document.getElementById("guestScore").textContent = '00'
    scoreHistory = [];
}

function switchPositions() {
    let switchT = document.getElementById("guestCard").innerHTML
    document.getElementById("guestCard").innerHTML = document.getElementById('homeCard').innerHTML
    document.getElementById('homeCard').innerHTML = switchT
}
let timerInterval = null;
let totalSeconds = 12 * 60; // 720 seconds
let display = document.getElementById('timer');

// Updates what's shown on screen
function updateDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    display.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Play/Pause toggle
function playPause() {
    if (timerInterval) {
        // Timer is running — pause it
        clearInterval(timerInterval);
        timerInterval = null;
    } else {
        // Timer is stopped — start it
        timerInterval = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateDisplay();
            } else {
                clearInterval(timerInterval); // Auto-stop at 0
                timerInterval = null;
            }
        }, 1000);
    }
}

// Reset timer back to 12:00
function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    totalSeconds = 12 * 60;
    updateDisplay();
}

// Call this once on page load so timer shows 12:00 immediately
updateDisplay();

function undo() {
    if (scoreHistory.length > 0) {
        // 1. Get the last action
        let lastAction = scoreHistory.pop();
        
        // 2. Determine which score to reduce
        let scoreId = lastAction.team === 'home' ? "homeScore" : "guestScore";
        let currentScore = parseInt(document.getElementById(scoreId).textContent);
        
        // 3. Subtract the points
        let newScore = currentScore - lastAction.points;
        
        // 4. Update display (and keep the 00 formatting)
        document.getElementById(scoreId).textContent = newScore < 10 ? `0${newScore}` : newScore;
    }
}

