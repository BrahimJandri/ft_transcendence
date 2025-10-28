/**
 * Dashboard Page Logic
 */

import { AuthService } from '../services/authService.js';
import { ApiService } from '../services/apiService.js';
import type { GameStats, Match } from '../types/index.js';

export function initDashboardPage(): void {
  console.log('Dashboard initialized');

  // Load user stats
  loadUserStats();
  
  // Load recent matches
  loadRecentMatches();
  
  // Load leaderboard
  loadLeaderboard();
  
  // Load online friends
  loadOnlineFriends();
  
  // Load active games
  loadActiveGames();
}

async function loadActiveGames(): Promise<void> {
  // TODO: Implement API call to fetch active games
  console.log('Active games loaded');
}

async function loadLeaderboard(): Promise<void> {
  // TODO: Implement API call to fetch leaderboard
  console.log('Leaderboard loaded');
}

async function loadOnlineFriends(): Promise<void> {
  // TODO: Implement API call to fetch online friends
  console.log('Online friends loaded');
}

async function loadUserStats(): Promise<void> {
  try {
    const response = await ApiService.get<GameStats>('/stats/user');
    
    if (response.success && response.data) {
      const stats = response.data;
      
      // Update stats display
      const gamesPlayed = document.getElementById('gamesPlayed');
      const wins = document.getElementById('wins');
      const losses = document.getElementById('losses');
      const winRate = document.getElementById('winRate');
      
      if (gamesPlayed) gamesPlayed.textContent = stats.gamesPlayed.toString();
      if (wins) wins.textContent = stats.wins.toString();
      if (losses) losses.textContent = stats.losses.toString();
      if (winRate) winRate.textContent = `${stats.winRate.toFixed(1)}%`;
    } else {
      // Show default values
      setDefaultStats();
    }
  } catch (error) {
    console.error('Error loading stats:', error);
    setDefaultStats();
  }
}

function setDefaultStats(): void {
  const gamesPlayed = document.getElementById('gamesPlayed');
  const wins = document.getElementById('wins');
  const losses = document.getElementById('losses');
  const winRate = document.getElementById('winRate');
  
  if (gamesPlayed) gamesPlayed.textContent = '0';
  if (wins) wins.textContent = '0';
  if (losses) losses.textContent = '0';
  if (winRate) winRate.textContent = '0%';
}

async function loadRecentMatches(): Promise<void> {
  const matchesContainer = document.getElementById('recentMatches');
  if (!matchesContainer) return;

  try {
    const response = await ApiService.get<Match[]>('/matches/recent');
    
    if (response.success && response.data && response.data.length > 0) {
      const matches = response.data.slice(0, 5); // Show only 5 recent matches
      
      matchesContainer.innerHTML = matches.map(match => `
        <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div class="flex items-center space-x-4">
            <div class="${match.winner === match.player1 ? 'text-green-600' : 'text-red-600'} font-semibold">
              ${match.player1}
            </div>
            <div class="text-gray-500">vs</div>
            <div class="${match.winner === match.player2 ? 'text-green-600' : 'text-red-600'} font-semibold">
              ${match.player2}
            </div>
          </div>
          <div class="text-right">
            <div class="font-bold text-gray-900 dark:text-white">${match.score1} - ${match.score2}</div>
            <div class="text-sm text-gray-500">${new Date(match.date).toLocaleDateString()}</div>
          </div>
        </div>
      `).join('');
    } else {
      matchesContainer.innerHTML = `
        <div class="text-center py-8">
          <p class="text-gray-500 dark:text-gray-400">No matches yet. Start playing!</p>
          <a href="/play" data-link class="mt-4 inline-block px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
            Play Your First Game
          </a>
        </div>
      `;
    }
  } catch (error) {
    console.error('Error loading matches:', error);
    matchesContainer.innerHTML = '<p class="text-gray-500 dark:text-gray-400">Unable to load matches.</p>';
  }
}
