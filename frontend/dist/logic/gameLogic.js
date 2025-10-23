/**
 * Game Page Logic
 */
import { Theme } from '../utils/theme.js';
import { AuthService } from '../services/authService.js';
let canvas;
let ctx;
let animationId;
let gameRunning = false;
let gamePaused = false;
const paddle1 = { x: 20, y: 250, width: 10, height: 100, speed: 8 };
const paddle2 = { x: 770, y: 250, width: 10, height: 100, speed: 8 };
const ball = { x: 400, y: 300, radius: 8, speedX: 5, speedY: 5 };
let player1Score = 0;
let player2Score = 0;
const winningScore = 10;
const keys = {};
export function initGamePage() {
    canvas = document.getElementById('gameCanvas');
    if (!canvas)
        return;
    const context = canvas.getContext('2d');
    if (!context)
        return;
    ctx = context;
    // Initialize theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            Theme.toggle();
        });
    }
    // Initialize logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            AuthService.logout();
        });
    }
    // Game controls
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    if (startBtn) {
        startBtn.addEventListener('click', startGame);
    }
    if (pauseBtn) {
        pauseBtn.addEventListener('click', togglePause);
    }
    if (resetBtn) {
        resetBtn.addEventListener('click', resetGame);
    }
    // Keyboard controls
    window.addEventListener('keydown', (e) => {
        keys[e.key] = true;
    });
    window.addEventListener('keyup', (e) => {
        keys[e.key] = false;
    });
    // Draw initial state
    drawGame();
}
function startGame() {
    if (!gameRunning) {
        gameRunning = true;
        gamePaused = false;
        const startBtn = document.getElementById('startBtn');
        const pauseBtn = document.getElementById('pauseBtn');
        if (startBtn)
            startBtn.disabled = true;
        if (pauseBtn)
            pauseBtn.disabled = false;
        gameLoop();
    }
}
function togglePause() {
    gamePaused = !gamePaused;
    const pauseBtn = document.getElementById('pauseBtn');
    if (pauseBtn) {
        pauseBtn.textContent = gamePaused ? 'Resume' : 'Pause';
    }
    if (!gamePaused && gameRunning) {
        gameLoop();
    }
}
function resetGame() {
    gameRunning = false;
    gamePaused = false;
    cancelAnimationFrame(animationId);
    // Reset positions
    paddle1.y = 250;
    paddle2.y = 250;
    ball.x = 400;
    ball.y = 300;
    ball.speedX = 5;
    ball.speedY = 5;
    // Reset scores
    player1Score = 0;
    player2Score = 0;
    updateScore();
    // Reset buttons
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    if (startBtn)
        startBtn.disabled = false;
    if (pauseBtn) {
        pauseBtn.disabled = true;
        pauseBtn.textContent = 'Pause';
    }
    drawGame();
}
function gameLoop() {
    if (!gameRunning || gamePaused)
        return;
    update();
    drawGame();
    animationId = requestAnimationFrame(gameLoop);
}
function update() {
    // Move paddles
    if (keys['w'] && paddle1.y > 0) {
        paddle1.y -= paddle1.speed;
    }
    if (keys['s'] && paddle1.y < canvas.height - paddle1.height) {
        paddle1.y += paddle1.speed;
    }
    if (keys['ArrowUp'] && paddle2.y > 0) {
        paddle2.y -= paddle2.speed;
    }
    if (keys['ArrowDown'] && paddle2.y < canvas.height - paddle2.height) {
        paddle2.y += paddle2.speed;
    }
    // Move ball
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    // Ball collision with top and bottom
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.speedY = -ball.speedY;
    }
    // Ball collision with paddles
    if (ball.x - ball.radius < paddle1.x + paddle1.width &&
        ball.y > paddle1.y &&
        ball.y < paddle1.y + paddle1.height) {
        ball.speedX = -ball.speedX;
        ball.x = paddle1.x + paddle1.width + ball.radius;
    }
    if (ball.x + ball.radius > paddle2.x &&
        ball.y > paddle2.y &&
        ball.y < paddle2.y + paddle2.height) {
        ball.speedX = -ball.speedX;
        ball.x = paddle2.x - ball.radius;
    }
    // Scoring
    if (ball.x - ball.radius < 0) {
        player2Score++;
        resetBall();
    }
    else if (ball.x + ball.radius > canvas.width) {
        player1Score++;
        resetBall();
    }
    updateScore();
    // Check for winner
    if (player1Score >= winningScore || player2Score >= winningScore) {
        endGame();
    }
}
function drawGame() {
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Draw center line
    ctx.strokeStyle = '#444';
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);
    // Draw paddles
    ctx.fillStyle = '#fff';
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    // Draw ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
}
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speedX = -ball.speedX;
    ball.speedY = Math.random() * 6 - 3;
}
function updateScore() {
    const player1ScoreEl = document.getElementById('player1Score');
    const player2ScoreEl = document.getElementById('player2Score');
    if (player1ScoreEl)
        player1ScoreEl.textContent = player1Score.toString();
    if (player2ScoreEl)
        player2ScoreEl.textContent = player2Score.toString();
}
function endGame() {
    gameRunning = false;
    cancelAnimationFrame(animationId);
    const winner = player1Score >= winningScore ? 'Player 1' : 'Player 2';
    // Draw winner message
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${winner} Wins!`, canvas.width / 2, canvas.height / 2);
    ctx.font = '24px Arial';
    ctx.fillText('Click Reset to play again', canvas.width / 2, canvas.height / 2 + 50);
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    if (startBtn)
        startBtn.disabled = false;
    if (pauseBtn)
        pauseBtn.disabled = true;
}
