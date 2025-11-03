/**
 * Tournaments Page - Converted from tournaments.html
 */

import { Sidebar } from '../components/sidebar.js';
import { NotificationDropdown } from '../components/notifications.js';
import { UserDropdown } from '../components/userDropdown.js';

export function TournamentsPage(): string {
  return `
    <title>Ping Pong Game - Tournaments</title>
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-white">
        ${Sidebar('tournaments')}
        <div class="flex flex-1 flex-col overflow-hidden">
            <header class="flex h-20 items-center justify-between border-b border-gray-200 dark:border-[#2c404a] bg-white dark:bg-card-dark px-6">
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl font-bold">Tournaments</h2>
                </div>
                <div class="flex items-center gap-4">
                    ${NotificationDropdown()}
                    ${UserDropdown()}
                </div>
            </header>
            <main class="flex-1 overflow-y-auto p-6 lg:p-8">
                <div class="max-w-7xl mx-auto">
                    <div class="flex flex-col gap-6 lg:flex-row lg:items-start">
                        <div class="flex-1 lg:mr-6 space-y-6">
                            <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 class="text-xl font-bold">Tournaments</h3>
                                        <p class="text-sm text-gray-600 dark:text-[#90b7cb]">Browse active and upcoming tournaments.</p>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <input id="tournamentSearch" type="search" placeholder="Search tournaments or players"
                                            class="w-64 rounded-lg border border-gray-200 dark:border-[#24323a] bg-gray-50 dark:bg-[#071018] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                                        <select id="tournamentFilter" class="rounded-lg border border-gray-200 dark:border-[#24323a] bg-white dark:bg-card-dark px-3 py-2 text-sm">
                                            <option value="all">All</option>
                                            <option value="active">Active</option>
                                            <option value="upcoming">Upcoming</option>
                                            <option value="mine">My tournaments</option>
                                        </select>
                                    </div>
                                </div>

                                <div id="tournamentsList" class="grid grid-cols-1 gap-4 sm:grid-cols-2"></div>
                                <div id="tournamentsEmpty" class="hidden text-center text-gray-500 dark:text-gray-400 mt-6">No tournaments found.</div>
                            </div>

                            <div id="nextMatchCard" class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                                <h3 class="text-xl font-bold mb-4">Next Match</h3>
                                <div id="nextMatchContent" class="text-center">
                                    <p class="text-gray-600 dark:text-[#90b7cb]">No upcoming matches.</p>
                                </div>
                            </div>
                        </div>

                        <aside class="w-full lg:w-96 space-y-6">
                            <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                                <h4 class="text-lg font-bold mb-3">Join or Create</h4>
                                <p class="text-sm text-gray-600 dark:text-[#90b7cb] mb-4">Ready to compete? Find or create a tournament.</p>
                                <button id="findTournamentBtn" class="w-full flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-lg font-bold text-white transition-transform duration-200 hover:scale-105">
                                    <span>Find Tournament</span>
                                </button>
                                <p class="text-center my-4 text-gray-500 dark:text-gray-400">or</p>
                                <button id="createTournamentBtn" class="w-full flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary px-6 py-3 text-lg font-bold transition-colors duration-200 hover:bg-primary/10">
                                    <span>Create Tournament</span>
                                </button>
                            </div>

                            <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                                <h4 class="text-lg font-bold mb-3">Upcoming Matches</h4>
                                <div id="upcomingMatches" class="space-y-3"></div>
                            </div>
                        </aside>
                    </div>
                </div>

                <script>
                (function(){
                    // Mock data for tournaments (replace with API calls later)
                    const tournaments = [
                        { id: 't1', name: 'Grand Pong Open', description: 'Open bracket, everyone welcome', type: 'active', players: 128, startTime: Date.now() - 3600*1000, isLive: true },
                        { id: 't2', name: 'Weekend Challenger', description: 'Casual weekend cup', type: 'upcoming', players: 32, startTime: Date.now() + 3600*1000*24, isLive: false },
                        { id: 't3', name: 'Ranked Masters', description: 'Top ranked players only', type: 'active', players: 16, startTime: Date.now() - 60*60*1000*2, isLive: true },
                        { id: 't4', name: 'Community Cup', description: 'Local community tournament', type: 'upcoming', players: 64, startTime: Date.now() + 3600*1000*5, isLive: false }
                    ];

                    const upcoming = [
                        { id: 'm1', title: 'PlayerA vs PlayerB', round: 'Quarterfinal', time: 'Live', isLive: true },
                        { id: 'm2', title: 'PlayerC vs PlayerD', round: 'Round 2', time: '15:00' },
                        { id: 'm3', title: 'PlayerE vs PlayerF', round: 'Round 1', time: '18:30' }
                    ];

                    const $ = (id) => document.getElementById(id);

                    function renderTournaments(list){
                        const container = $('tournamentsList');
                        container.innerHTML = '';
                        if(!list.length){
                            $('tournamentsEmpty').classList.remove('hidden');
                            return;
                        }
                        $('tournamentsEmpty').classList.add('hidden');

                        list.forEach(t => {
                            const card = document.createElement('div');
                            card.className = 'rounded-lg p-4 bg-gray-50 dark:bg-[#071018] border border-gray-100 dark:border-[#122328]';
                            var html = '';
                            html += '<div class="flex items-start justify-between gap-4">';
                            html += '  <div>';
                            html += '    <h5 class="font-bold">' + t.name + '</h5>';
                            html += '    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">' + t.description + '</p>';
                            html += '    <p class="text-xs text-gray-400 mt-2">Players: <span class="font-semibold">' + t.players + '</span></p>';
                            html += '  </div>';
                            html += '  <div class="text-right">';
                            html += t.isLive ? '<span class="inline-flex items-center gap-2 text-green-500 font-semibold"><span class="material-symbols-outlined text-base">sensors</span> Live</span>' : '<span class="text-sm text-gray-500">' + new Date(t.startTime).toLocaleString() + '</span>';
                            html += '    <div class="mt-3">';
                            html += '      <a href="/tournaments/' + t.id + '" data-link class="inline-flex items-center gap-2 rounded-full border border-primary px-3 py-1 text-primary text-sm">View</a>';
                            html += '    </div>';
                            html += '  </div>';
                            html += '</div>';
                            card.innerHTML = html;
                            container.appendChild(card);
                        });
                    }

                    function renderUpcoming(){
                        const container = $('upcomingMatches');
                        container.innerHTML = '';
                        upcoming.forEach(m => {
                            const el = document.createElement('div');
                            el.className = 'flex items-center justify-between rounded-lg p-3 bg-gray-50 dark:bg-[#101d22]';
                            var html = '';
                            html += '<div>';
                            html += '  <p class="font-semibold">' + m.title + '</p>';
                            html += '  <p class="text-sm text-gray-500 dark:text-gray-400">' + m.round + '</p>';
                            html += '</div>';
                            html += '<div class="text-sm font-semibold ' + (m.isLive ? 'text-green-500' : 'text-gray-400') + '">' + m.time + '</div>';
                            el.innerHTML = html;
                            container.appendChild(el);
                        });
                    }

                    function renderNextMatch(){
                        const el = $('nextMatchContent');
                        const next = upcoming[0];
                        if(!next){
                            el.innerHTML = '<p class="text-gray-600 dark:text-[#90b7cb]">No upcoming matches.</p>';
                            return;
                        }
                        var html = '';
                        html += '<div class="flex items-center justify-between p-4 bg-primary/10 dark:bg-primary/20 rounded-lg">';
                        html += '  <div class="flex items-center gap-4">';
                        html += '    <div class="h-12 w-12 rounded-full bg-gray-200 dark:bg-[#0b2a33] flex items-center justify-center">🎾</div>';
                        html += '    <div class="text-left">';
                        html += '      <div class="font-bold">' + next.title + '</div>';
                        html += '      <div class="text-sm text-gray-500 dark:text-gray-400">' + next.round + '</div>';
                        html += '    </div>';
                        html += '  </div>';
                        html += '  <div class="text-2xl font-bold text-primary">' + next.time + '</div>';
                        html += '</div>';
                        html += '<div class="mt-4 text-center">';
                        html += '  <button class="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gray-200 dark:bg-[#2c404a] px-4 py-2 font-semibold">';
                        html += '    <span class="material-symbols-outlined">videocam</span> Spectate';
                        html += '  </button>'; 
                        html += '</div>';
                        el.innerHTML = html;
                    }

                    // initial render
                    renderTournaments(tournaments);
                    renderUpcoming();
                    renderNextMatch();

                    // search/filter handlers
                    $('tournamentSearch').addEventListener('input', function(e){
                        const q = e.target.value.toLowerCase().trim();
                        const filter = $('tournamentFilter').value;
                        const filtered = tournaments.filter(t => {
                            const matchQ = t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q);
                            const matchFilter = filter === 'all' || (filter === 'active' && t.type === 'active') || (filter === 'upcoming' && t.type === 'upcoming');
                            return matchQ && matchFilter;
                        });
                        renderTournaments(filtered);
                    });

                    $('tournamentFilter').addEventListener('change', function(){
                        const q = $('tournamentSearch').value.toLowerCase().trim();
                        const filter = this.value;
                        const filtered = tournaments.filter(t => {
                            const matchQ = t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q);
                            const matchFilter = filter === 'all' || (filter === 'active' && t.type === 'active') || (filter === 'upcoming' && t.type === 'upcoming') || (filter === 'mine' && t.type === 'mine');
                            return matchQ && matchFilter;
                        });
                        renderTournaments(filtered);
                    });

                    // buttons
                    $('findTournamentBtn').addEventListener('click', function(){
                        alert('Finding best tournaments for you (demo)');
                    });
                    $('createTournamentBtn').addEventListener('click', function(){
                        alert('Create tournament flow not implemented in demo');
                    });

                    // delegate clicks on data-link to SPA router (if available)
                    document.addEventListener('click', function(e){
                        const a = e.target.closest && e.target.closest('[data-link]');
                        if(a){
                            e.preventDefault();
                            const href = a.getAttribute('href');
                            if(window.history && href){
                                window.history.pushState({}, '', href);
                                document.dispatchEvent(new PopStateEvent('popstate'));
                            }
                        }
                    });
                })();
                </script>
            </main>
        </div>
    </div>
  `;
}
