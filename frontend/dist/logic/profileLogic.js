/**
 * Profile Page Logic
 */
import { AuthService } from '../services/authService.js';
import { ApiService } from '../services/apiService.js';
export function initProfilePage() {
    console.log('Profile page initialized');
    // Load user profile information
    loadUserProfile();
    // Load user stats
    loadProfileStats();
    // Load match history
    loadMatchHistory();
}
function loadUserProfile() {
    const user = AuthService.getUser();
    if (user) {
        // Update profile username (large display)
        const profileUserNameElement = document.getElementById('profileUserName');
        if (profileUserNameElement) {
            profileUserNameElement.textContent = user.username;
        }
        // Update profile avatar (large display)
        const profileAvatarElement = document.getElementById('profileAvatar');
        if (profileAvatarElement) {
            if (user.avatar) {
                profileAvatarElement.src = user.avatar;
            }
            profileAvatarElement.alt = `${user.username}'s avatar`;
        }
        // Update profile email if element exists
        const profileEmailElement = document.getElementById('profileEmail');
        if (profileEmailElement && user.email) {
            profileEmailElement.textContent = user.email;
        }
        // Update member since date if available
        const memberSinceElement = document.getElementById('memberSince');
        if (memberSinceElement && user.createdAt) {
            const joinDate = new Date(user.createdAt);
            memberSinceElement.textContent = joinDate.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
            });
        }
    }
}
async function loadProfileStats() {
    try {
        const response = await ApiService.get('/stats/user');
        if (response.success && response.data) {
            const stats = response.data;
            // Update stats display in profile
            const winsElement = document.getElementById('profileWins');
            const lossesElement = document.getElementById('profileLosses');
            const matchesElement = document.getElementById('profileMatches');
            if (winsElement)
                winsElement.textContent = stats.wins.toString();
            if (lossesElement)
                lossesElement.textContent = stats.losses.toString();
            if (matchesElement)
                matchesElement.textContent = stats.gamesPlayed.toString();
        }
        else {
            // Show default values
            setDefaultProfileStats();
        }
    }
    catch (error) {
        console.error('Error loading profile stats:', error);
        setDefaultProfileStats();
    }
}
function setDefaultProfileStats() {
    const winsElement = document.getElementById('profileWins');
    const lossesElement = document.getElementById('profileLosses');
    const matchesElement = document.getElementById('profileMatches');
    if (winsElement)
        winsElement.textContent = '0';
    if (lossesElement)
        lossesElement.textContent = '0';
    if (matchesElement)
        matchesElement.textContent = '0';
}
async function loadMatchHistory() {
    const matchHistoryTable = document.getElementById('matchHistoryTable');
    if (!matchHistoryTable)
        return;
    try {
        const response = await ApiService.get('/matches/recent');
        if (response.success && response.data && response.data.length > 0) {
            const matches = response.data.slice(0, 10); // Show 10 recent matches
            matchHistoryTable.innerHTML = matches.map(match => {
                const currentUser = AuthService.getUser();
                const isPlayer1 = currentUser && match.player1 === currentUser.username;
                const opponent = isPlayer1 ? match.player2 : match.player1;
                const userScore = isPlayer1 ? match.score1 : match.score2;
                const opponentScore = isPlayer1 ? match.score2 : match.score1;
                const isWin = match.winner === currentUser?.username;
                return `
          <tr class="border-b border-gray-200 dark:border-[#2c404a]">
            <td class="p-3 flex items-center gap-3">
              <img alt="Opponent Avatar" class="w-10 h-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
              <span>${opponent}</span>
            </td>
            <td class="p-3">
              <span class="font-semibold ${isWin ? 'text-green-500' : 'text-red-500'}">
                ${isWin ? 'Win' : 'Loss'}
              </span>
            </td>
            <td class="p-3">${userScore} - ${opponentScore}</td>
            <td class="p-3">${new Date(match.date).toLocaleDateString()}</td>
          </tr>
        `;
            }).join('');
        }
        else {
            // Show empty state
            matchHistoryTable.innerHTML = `
        <tr>
          <td colspan="4" class="p-8 text-center text-gray-500 dark:text-gray-400">
            No match history available. Start playing to build your history!
          </td>
        </tr>
      `;
        }
    }
    catch (error) {
        console.error('Error loading match history:', error);
        matchHistoryTable.innerHTML = `
      <tr>
        <td colspan="4" class="p-8 text-center text-gray-500 dark:text-gray-400">
          Unable to load match history.
        </td>
      </tr>
    `;
    }
}
