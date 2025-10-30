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
let particles = [];
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
    // Clear particles
    particles = [];
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
        createParticles(ball.x, ball.y, '#a855f7');
    }
    // Ball collision with paddles
    if (ball.x - ball.radius < paddle1.x + paddle1.width &&
        ball.y > paddle1.y &&
        ball.y < paddle1.y + paddle1.height) {
        ball.speedX = -ball.speedX;
        ball.x = paddle1.x + paddle1.width + ball.radius;
        // Increase speed slightly with each hit
        ball.speedX *= 1.05;
        ball.speedY *= 1.05;
        // Create particles on hit
        createParticles(ball.x, ball.y, '#06b6d4');
    }
    if (ball.x + ball.radius > paddle2.x &&
        ball.y > paddle2.y &&
        ball.y < paddle2.y + paddle2.height) {
        ball.speedX = -ball.speedX;
        ball.x = paddle2.x - ball.radius;
        // Increase speed slightly with each hit
        ball.speedX *= 1.05;
        ball.speedY *= 1.05;
        // Create particles on hit
        createParticles(ball.x, ball.y, '#ec4899');
    }
    // Scoring
    if (ball.x - ball.radius < 0) {
        player2Score++;
        resetBall();
        createParticles(50, canvas.height / 2, '#ec4899');
    }
    else if (ball.x + ball.radius > canvas.width) {
        player1Score++;
        resetBall();
        createParticles(canvas.width - 50, canvas.height / 2, '#06b6d4');
    }
    updateScore();
    updateParticles();
    // Check for winner
    if (player1Score >= winningScore || player2Score >= winningScore) {
        endGame();
    }
}
function drawGame() {
    // Clear canvas with gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0a0015');
    gradient.addColorStop(0.5, '#1a0033');
    gradient.addColorStop(1, '#001a33');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Draw retro grid
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    // Draw center line with glow
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 3;
    ctx.setLineDash([15, 15]);
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#a855f7';
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.shadowBlur = 0;
    // Draw center circle
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#a855f7';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0;
    // Draw paddles with glow effect
    // Player 1 paddle (cyan)
    ctx.fillStyle = '#06b6d4';
    ctx.shadowBlur = 25;
    ctx.shadowColor = '#06b6d4';
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    // Add gradient to paddle
    const paddle1Gradient = ctx.createLinearGradient(paddle1.x, 0, paddle1.x + paddle1.width, 0);
    paddle1Gradient.addColorStop(0, '#06b6d4');
    paddle1Gradient.addColorStop(1, '#22d3ee');
    ctx.fillStyle = paddle1Gradient;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    // Player 2 paddle (pink)
    ctx.shadowBlur = 25;
    ctx.shadowColor = '#ec4899';
    const paddle2Gradient = ctx.createLinearGradient(paddle2.x, 0, paddle2.x + paddle2.width, 0);
    paddle2Gradient.addColorStop(0, '#f472b6');
    paddle2Gradient.addColorStop(1, '#ec4899');
    ctx.fillStyle = paddle2Gradient;
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    ctx.shadowBlur = 0;
    // Draw ball with intense glow
    const ballGradient = ctx.createRadialGradient(ball.x, ball.y, 0, ball.x, ball.y, ball.radius * 3);
    ballGradient.addColorStop(0, '#ffffff');
    ballGradient.addColorStop(0.3, '#22d3ee');
    ballGradient.addColorStop(0.6, '#a855f7');
    ballGradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
    ctx.fillStyle = ballGradient;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius * 3, 0, Math.PI * 2);
    ctx.fill();
    // Draw ball core
    ctx.fillStyle = '#fff';
    ctx.shadowBlur = 30;
    ctx.shadowColor = '#22d3ee';
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    // Add ball trail effect
    ctx.fillStyle = 'rgba(34, 211, 238, 0.2)';
    for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(ball.x - ball.speedX * i * 2, ball.y - ball.speedY * i * 2, ball.radius * (1 - i * 0.2), 0, Math.PI * 2);
        ctx.fill();
    }
    // Draw particles
    drawParticles();
}
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speedX = -ball.speedX;
    ball.speedY = Math.random() * 6 - 3;
    // Reset speed to initial values
    const direction = ball.speedX > 0 ? 1 : -1;
    ball.speedX = 5 * direction;
}
function createParticles(x, y, color) {
    for (let i = 0; i < 15; i++) {
        particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10,
            life: 1,
            color: color
        });
    }
}
function updateParticles() {
    particles = particles.filter(p => p.life > 0);
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.life -= 0.02;
    });
}
function drawParticles() {
    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.globalAlpha = 1;
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
    const winnerColor = player1Score >= winningScore ? '#06b6d4' : '#ec4899';
    // Draw semi-transparent overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Draw winner text with massive glow
    ctx.fillStyle = winnerColor;
    ctx.shadowBlur = 40;
    ctx.shadowColor = winnerColor;
    ctx.font = 'bold 72px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${winner} WINS!`, canvas.width / 2, canvas.height / 2 - 40);
    // Draw trophy emoji
    ctx.font = '80px Arial';
    ctx.shadowBlur = 30;
    ctx.fillText('🏆', canvas.width / 2, canvas.height / 2 - 120);
    // Draw subtitle
    ctx.fillStyle = '#fff';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#fff';
    ctx.font = 'bold 28px Arial';
    ctx.fillText('Click RESET to play again', canvas.width / 2, canvas.height / 2 + 60);
    // Draw final score
    ctx.font = 'bold 36px Arial';
    ctx.fillStyle = '#a855f7';
    ctx.shadowBlur = 25;
    ctx.shadowColor = '#a855f7';
    ctx.fillText(`${player1Score} - ${player2Score}`, canvas.width / 2, canvas.height / 2 + 120);
    ctx.shadowBlur = 0;
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    if (startBtn)
        startBtn.disabled = false;
    if (pauseBtn)
        pauseBtn.disabled = true;
}
