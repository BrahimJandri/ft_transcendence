/**
 * Profile Page - Converted from profile.html
 */
import { Sidebar } from '../components/sidebar.js';
export function ProfilePage() {
    return `
    <title>Ping Pong Game - Profile</title>
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-white">
        ${Sidebar('profile')}
        <div class="flex flex-1 flex-col overflow-hidden">
            <header
                class="flex h-20 items-center justify-between border-b border-gray-200 dark:border-[#2c404a] bg-white dark:bg-card-dark px-6">
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl font-bold">Profile</h2>
                </div>
                <div class="flex items-center gap-4">
                    <button class="relative rounded-full p-2 hover:bg-gray-100 dark:hover:bg-[#2c404a]">
                        <span class="material-symbols-outlined">notifications</span>
                        <span class="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
                    </button>
                    
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
            <main class="flex-1 overflow-y-auto p-6 lg:p-8">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-1 flex flex-col items-center space-y-6">
                        <div class="relative">
                            <img alt="User Avatar" id="profileAvatar" class="w-40 h-40 rounded-full object-cover border-4 border-primary"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                            <span
                                class="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-green-500 border-4 border-white dark:border-card-dark"></span>
                        </div>
                        <div class="text-center">
                            <h3 class="text-2xl font-bold" id="profileUserName">PlayerOne</h3>
                            <p class="text-green-500">Online</p>
                        </div>
                        <button
                            class="flex items-center gap-2 rounded-full bg-gray-200 dark:bg-[#2c404a] px-4 py-2 text-sm font-semibold hover:bg-gray-300 dark:hover:bg-[#3e5663]">
                            <span class="material-symbols-outlined text-base">edit</span>
                            Edit Profile
                        </button>
                        <div class="flex gap-4">
                            <button
                                class="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-lg font-bold text-white transition-transform duration-200 hover:scale-105">
                                <span class="material-symbols-outlined">person_add</span>
                                <span>Add Friend</span>
                            </button>
                            <button
                                class="flex items-center gap-2 rounded-full bg-red-500/80 px-6 py-3 text-lg font-bold text-white transition-transform duration-200 hover:scale-105">
                                <span class="material-symbols-outlined">block</span>
                                <span>Block User</span>
                            </button>
                        </div>
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md w-full">
                            <h3 class="text-xl font-bold mb-4">Stats</h3>
                            <div class="space-y-3">
                                <div class="flex justify-between"><span>Wins</span><span
                                        class="font-bold text-green-500" id="profileWins">125</span></div>
                                <div class="flex justify-between"><span>Losses</span><span
                                        class="font-bold text-red-500" id="profileLosses">42</span></div>
                                <div class="flex justify-between"><span>Matches Played</span><span
                                        class="font-bold" id="profileMatches">167</span></div>
                            </div>
                        </div>
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md w-full">
                            <h3 class="text-xl font-bold mb-4">Achievements</h3>
                            <div class="grid grid-cols-3 gap-4">
                                <div class="flex flex-col items-center" title="First Win">
                                    <span
                                        class="material-symbols-outlined text-yellow-500 text-4xl">military_tech</span>
                                    <span class="text-xs mt-1 text-center">First Win</span>
                                </div>
                                <div class="flex flex-col items-center" title="100 Wins">
                                    <span class="material-symbols-outlined text-yellow-500 text-4xl">emoji_events</span>
                                    <span class="text-xs mt-1 text-center">100 Wins</span>
                                </div>
                                <div class="flex flex-col items-center" title="Tournament Winner">
                                    <span class="material-symbols-outlined text-yellow-500 text-4xl">sports_score</span>
                                    <span class="text-xs mt-1 text-center">Tourney Champ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-2">
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">Match History</h3>
                            <div class="overflow-x-auto">
                                <table class="w-full text-left">
                                    <thead class="border-b-2 border-gray-200 dark:border-[#2c404a]">
                                        <tr>
                                            <th class="p-3">Opponent</th>
                                            <th class="p-3">Result</th>
                                            <th class="p-3">Score</th>
                                            <th class="p-3">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody id="matchHistoryTable">
                                        <tr class="border-b border-gray-200 dark:border-[#2c404a]">
                                            <td class="p-3 flex items-center gap-3">
                                                <img alt="Opponent Avatar" class="w-10 h-10 rounded-full object-cover"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                                                <span>PongMaster</span>
                                            </td>
                                            <td class="p-3"><span class="font-semibold text-green-500">Win</span></td>
                                            <td class="p-3">11 - 5</td>
                                            <td class="p-3">2 hours ago</td>
                                        </tr>
                                        <tr class="border-b border-gray-200 dark:border-[#2c404a]">
                                            <td class="p-3 flex items-center gap-3">
                                                <img alt="Opponent Avatar" class="w-10 h-10 rounded-full object-cover"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk" />
                                                <span>GamerX</span>
                                            </td>
                                            <td class="p-3"><span class="font-semibold text-red-500">Loss</span></td>
                                            <td class="p-3">8 - 11</td>
                                            <td class="p-3">1 day ago</td>
                                        </tr>
                                        <tr class="border-b border-gray-200 dark:border-[#2c404a]">
                                            <td class="p-3 flex items-center gap-3">
                                                <img alt="Opponent Avatar" class="w-10 h-10 rounded-full object-cover"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACTe2G82J9gcgeNG6GqYRb4EPMN30MEHZz0ujtW3qcPvXTKWCt3TEQcIWzsB1zkW5LjvHGdxnP2Zo_R7Vo7KiOcdSgRT85XtM2uN0u6ylOHLzOUxiU01KLICdDXLvKlaNSFVZ0oE671zMv31bvbMfR2KBgC6ugJBnfarKrW7NyiIrqJzSPSbRiCHbrFYvBkdCfGIPkkrAB3fTpF7Kwfbd0V9Lmty8oB4IjFX87oSY46HAeCaYssWSpXGTvB14U9MEySRGt_UqfzIk" />
                                                <span>AcePlayer</span>
                                            </td>
                                            <td class="p-3"><span class="font-semibold text-green-500">Win</span></td>
                                            <td class="p-3">11 - 9</td>
                                            <td class="p-3">3 days ago</td>
                                        </tr>
                                        <tr class="border-b border-gray-200 dark:border-[#2c404a]">
                                            <td class="p-3 flex items-center gap-3">
                                                <img alt="Opponent Avatar" class="w-10 h-10 rounded-full object-cover"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ8pNwNu6KpM1TgsqQdpIxZY3lAlU2EBBBXW_XkRkhzK-toR3csiHvRGsBewUl3DSWmYYTLUY5E9arX1APdb-2ryGssVRfD76nhsLHuTJp_CjexJD7n-qRfzYVkpHCQYLu6M1IuKvb9QN83ggDTxNeK86uQv96riDTZKe7xZb_Qc3BtWe0zARMFOSJaWMF6Jrb9CPMmwL-GlkCblOUMZyE2tuVWNeRNXpEXr9nsX1hFVRwhdfU6LaEjk2s9_Z0qll1IKW71yWo8Hs" />
                                                <span>NewChallenger</span>
                                            </td>
                                            <td class="p-3"><span class="font-semibold text-green-500">Win</span></td>
                                            <td class="p-3">11 - 2</td>
                                            <td class="p-3">1 week ago</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 flex items-center gap-3">
                                                <img alt="Opponent Avatar" class="w-10 h-10 rounded-full object-cover"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4Lwj1Kr4OAl-UUq5t1DOvuW2ZptgrrA6uJfB0jXsII5_J82wsZYCb4MKAwbP8n6bBA1G6NYxgtxtEo87l9If4I5ZwYtRjXiUmE6tEcvTywH1y9Gmm5H-uxs6FeNDPmHHyqLRoFPdx7f8R8UHyUiE0DH-vCDpVg_PHveNqFyZoGNb__NkIxxRX4y6KU_YczU82dAgMwg0baiel92ZyfmI47r02RTimywCaacaMH_o4DWnEM1HLfVBF_nZ4WSugnreJ8nxIGPfG6XU" />
                                                <span>PingFanatic</span>
                                            </td>
                                            <td class="p-3"><span class="font-semibold text-red-500">Loss</span></td>
                                            <td class="p-3">7 - 11</td>
                                            <td class="p-3">2 weeks ago</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  `;
}
