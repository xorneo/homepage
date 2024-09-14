let rallyCount = 0;
let gameActive = false;
let playerScore = 0;
let computerScore = 0;

const rallyDisplay = document.getElementById('rally-count');
const feedback = document.getElementById('feedback');
const startButton = document.getElementById('start-game');
const winPercentageDisplay = document.getElementById('win-percentage');
const ball = document.getElementById('ball');

startButton.addEventListener('click', startGame);

function startGame() {
    rallyCount = 0;
    playerScore = 0;
    computerScore = 0;
    rallyDisplay.textContent = rallyCount;
    feedback.textContent = "Game started! Click a section to return the ball.";
    winPercentageDisplay.textContent = "";
    ball.style.display = 'block';  // Show the ball when the game starts
    ball.style.top = '50%';  // Reset ball to middle at the start
    ball.style.left = '50%';
    gameActive = true;
    startButton.disabled = true;
    computerShot();
}

function computerShot() {
    if (!gameActive) return;
    
    const randomSection = Math.floor(Math.random() * 6) + 1;
    feedback.textContent = `Ball is in your court: Section ${randomSection}`;
    moveBallToPlayer(randomSection);
    
    // Wait for player to choose a section to return the shot
}

function playerShot(section) {
    if (!gameActive) return;

    feedback.textContent = `You returned the ball to Section ${section}.`;
    moveBallToOpponent(section);

    rallyCount++;
    rallyDisplay.textContent = rallyCount;

    // Randomly decide if computer wins the rally or not
    const computerWin = Math.random() < 0.5;
    if (computerWin) {
        computerScore++;
    } else {
        playerScore++;
    }

    if (rallyCount >= 10) {
        endGame();
    } else {
        setTimeout(computerShot, 1000); // Next computer shot after 1 second
    }
}

function moveBallToPlayer(section) {
    // Move the ball visually to the chosen section in the player's court
    const sectionTop = section <= 3 ? "70%" : "85%";
    const sectionLeft = `${(section - 1) % 3 * 33}%`;
    ball.style.top = sectionTop; 
    ball.style.left = sectionLeft;
}

function moveBallToOpponent(section) {
    // Move the ball visually to the chosen section in the opponent's court
    const sectionTop = section <= 3 ? "15%" : "30%";
    const sectionLeft = `${(section - 1) % 3 * 33}%`;
    ball.style.top = sectionTop;  
    ball.style.left = sectionLeft;
}

function endGame() {
    gameActive = false;
    startButton.disabled = false;

    const winPercentage = Math.round((playerScore / 10) * 100);
    feedback.textContent = "Game Over! Your win percentage is displayed below.";
    winPercentageDisplay.textContent = `Your Win Percentage: ${winPercentage}%`;
}
