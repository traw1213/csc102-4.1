let meme = document.getElementById('meme');
let movingInterval;
let maxX = window.innerWidth - 100;
let maxY = window.innerHeight - 100;

// Function to start moving the meme
function startMoving() {
    movingInterval = setInterval(moveMeme, 500);
    document.getElementById('TIGGER').textContent = 'Tee- EYE -Double guh-errh'; // Update header text
    toggleButtons();
}

// Function to stop moving the meme
function stopMoving() {
    clearInterval(movingInterval);
    document.getElementById('TIGGER').textContent = 'Tigger'; // Update header text
    toggleButtons();
}

// Function to move the meme randomly
function moveMeme() {
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;
    meme.style.left = randomX + 'px';
    meme.style.top = randomY + 'px';
}

// Function to toggle the enable/disable state of buttons
function toggleButtons() {
    let startButton = document.getElementById('startButton');
    let stopButton = document.getElementById('stopButton');
    startButton.disabled = !startButton.disabled;
    stopButton.disabled = !stopButton.disabled;
}
