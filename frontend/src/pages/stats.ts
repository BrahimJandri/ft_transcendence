/**
 * Stats Page - Converted from stats.html
 */

import { Sidebar } from '../components/sidebar.js';
import { NotificationDropdown } from '../components/notifications.js';

export function StatsPage(): string {
  return `
    <title>Ping Pong Game - Stats</title>
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-white">
        ${Sidebar('stats')}
        <div class="flex flex-1 flex-col overflow-hidden">
            <header class="flex h-20 items-center justify-between border-b border-gray-200 dark:border-[#2c404a] bg-white dark:bg-card-dark px-6">
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl font-bold">Stats</h2>
                </div>
                <div class="flex items-center gap-4">
                    ${NotificationDropdown()}
                    <div class="relative">
                        <button class="flex items-center gap-2">
                            <img alt="User avatar" id="userAvatar" class="h-10 w-10 rounded-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                            <span class="font-medium" id="userName">PlayerOne</span>
                            <span class="material-symbols-outlined">expand_more</span>
                        </button>
                    </div>
                </div>
            </header>
            <main class="flex-1 overflow-y-auto p-6">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-2">
                        <div class="bg-white dark:bg-card-dark p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-4">Win Rate Over Time</h3>
                            <div class="h-80">
                                <canvas id="winRateChart"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white dark:bg-card-dark p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-4">Performance Snapshot</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-gray-500 dark:text-gray-400">Total Matches</p>
                                    <p class="text-2xl font-bold" id="totalMatches">128</p>
                                </div>
                                <span class="material-symbols-outlined text-primary text-3xl">sports_esports</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-gray-500 dark:text-gray-400">Win Rate</p>
                                    <p class="text-2xl font-bold text-green-500" id="winRate">62.5%</p>
                                </div>
                                <span class="material-symbols-outlined text-green-500 text-3xl">trending_up</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-gray-500 dark:text-gray-400">Tournaments Won</p>
                                    <p class="text-2xl font-bold" id="tournamentsWon">5</p>
                                </div>
                                <span class="material-symbols-outlined text-yellow-500 text-3xl">emoji_events</span>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-3 bg-white dark:bg-card-dark p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-4">Match History</h3>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left">
                                <thead>
                                    <tr class="text-gray-500 dark:text-gray-400 border-b dark:border-[#2c404a]">
                                        <th class="py-2 px-4">Opponent</th>
                                        <th class="py-2 px-4">Result</th>
                                        <th class="py-2 px-4">Score</th>
                                        <th class="py-2 px-4">Date</th>
                                        <th class="py-2 px-4">Game Type</th>
                                    </tr>
                                </thead>
                                <tbody id="matchHistoryStats">
                                    <tr class="border-b dark:border-[#2c404a]">
                                        <td class="py-3 px-4 flex items-center gap-3">
                                            <img alt="PongMaster avatar" class="h-8 w-8 rounded-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                                            <span>PongMaster</span>
                                        </td>
                                        <td class="py-3 px-4"><span class="text-green-500 font-semibold">Win</span></td>
                                        <td class="py-3 px-4">11 - 5</td>
                                        <td class="py-3 px-4">2024-07-20</td>
                                        <td class="py-3 px-4">Ranked</td>
                                    </tr>
                                    <tr class="border-b dark:border-[#2c404a]">
                                        <td class="py-3 px-4 flex items-center gap-3">
                                            <img alt="GamerX avatar" class="h-8 w-8 rounded-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk" />
                                            <span>GamerX</span>
                                        </td>
                                        <td class="py-3 px-4"><span class="text-red-500 font-semibold">Loss</span></td>
                                        <td class="py-3 px-4">8 - 11</td>
                                        <td class="py-3 px-4">2024-07-19</td>
                                        <td class="py-3 px-4">Tournament</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-4 flex items-center gap-3">
                                            <img alt="NewbieNoob avatar" class="h-8 w-8 rounded-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk" />
                                            <span>NewbieNoob</span>
                                        </td>
                                        <td class="py-3 px-4"><span class="text-green-500 font-semibold">Win</span></td>
                                        <td class="py-3 px-4">11 - 2</td>
                                        <td class="py-3 px-4">2024-07-18</td>
                                        <td class="py-3 px-4">Casual</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="lg:col-span-3 bg-white dark:bg-card-dark p-6 rounded-lg">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-xl font-bold">Leaderboards</h3>
                            <div class="flex items-center gap-2 rounded-full bg-gray-100 dark:bg-[#101d22] p-1">
                                <button class="px-4 py-1.5 text-sm font-semibold rounded-full bg-primary text-white" id="globalLeaderboard">Global</button>
                                <button class="px-4 py-1.5 text-sm font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-[#2c404a]" id="friendsLeaderboard">Friends</button>
                                <button class="px-4 py-1.5 text-sm font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-[#2c404a]" id="rankedLeaderboard">Ranked</button>
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left">
                                <thead>
                                    <tr class="text-gray-500 dark:text-gray-400 border-b dark:border-[#2c404a]">
                                        <th class="py-2 px-4">Rank</th>
                                        <th class="py-2 px-4">Player</th>
                                        <th class="py-2 px-4">Win Rate</th>
                                        <th class="py-2 px-4">Matches Played</th>
                                        <th class="py-2 px-4">Points</th>
                                    </tr>
                                </thead>
                                <tbody id="leaderboardTable">
                                    <tr class="border-b dark:border-[#2c404a] bg-primary/10 dark:bg-primary/20">
                                        <td class="py-3 px-4 font-bold">#1</td>
                                        <td class="py-3 px-4 flex items-center gap-3">
                                            <img alt="PlayerOne avatar" class="h-8 w-8 rounded-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                                            <span class="font-bold text-primary">PlayerOne (You)</span>
                                        </td>
                                        <td class="py-3 px-4">62.5%</td>
                                        <td class="py-3 px-4">128</td>
                                        <td class="py-3 px-4 font-bold">2450</td>
                                    </tr>
                                    <tr class="border-b dark:border-[#2c404a]">
                                        <td class="py-3 px-4 font-bold">#2</td>
                                        <td class="py-3 px-4 flex items-center gap-3">
                                            <img alt="PongMaster avatar" class="h-8 w-8 rounded-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                                            <span>PongMaster</span>
                                        </td>
                                        <td class="py-3 px-4">71.2%</td>
                                        <td class="py-3 px-4">201</td>
                                        <td class="py-3 px-4 font-bold">2430</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-4 font-bold">#3</td>
                                        <td class="py-3 px-4 flex items-center gap-3">
                                            <img alt="GamerX avatar" class="h-8 w-8 rounded-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk" />
                                            <span>GamerX</span>
                                        </td>
                                        <td class="py-3 px-4">58.0%</td>
                                        <td class="py-3 px-4">150</td>
                                        <td class="py-3 px-4 font-bold">2100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  `;
}
