/**
 * Tournaments Page - Converted from tournaments.html
 */

import { Sidebar } from '../components/sidebar.js';
import { NotificationDropdown } from '../components/notifications.js';

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
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div class="lg:col-span-2 space-y-6">
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">The Grand Pong Tournament</h3>
                            <p class="text-gray-600 dark:text-[#90b7cb] mb-6">Follow the action live and see who will be crowned champion.</p>
                            <div class="relative overflow-x-auto">
                                <div class="flex items-center space-x-8">
                                    <div class="flex flex-col space-y-8">
                                        <div class="flex flex-col">
                                            <div class="bg-gray-50 dark:bg-[#101d22] p-3 rounded-t-lg border-b dark:border-gray-600">PlayerA</div>
                                            <div class="bg-gray-50 dark:bg-[#101d22] p-3 rounded-b-lg">PlayerB</div>
                                        </div>
                                        <div class="flex flex-col">
                                            <div class="bg-gray-50 dark:bg-[#101d22] p-3 rounded-t-lg border-b dark:border-gray-600">PlayerC</div>
                                            <div class="bg-gray-50 dark:bg-[#101d22] p-3 rounded-b-lg">PlayerD</div>
                                        </div>
                                        <div class="flex flex-col">
                                            <div class="bg-gray-50 dark:bg-[#101d22] p-3 rounded-t-lg border-b dark:border-gray-600">PlayerE</div>
                                            <div class="bg-gray-50 dark:bg-[#101d22] p-3 rounded-b-lg">PlayerF</div>
                                        </div>
                                        <div class="flex flex-col">
                                            <div class="bg-gray-50 dark:bg-[#101d22] p-3 rounded-t-lg border-b dark:border-gray-600">PlayerG</div>
                                            <div class="bg-gray-50 dark:bg-[#101d22] p-3 rounded-b-lg">PlayerH</div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col justify-around h-full">
                                        <div class="flex flex-col space-y-36">
                                            <div class="bg-gray-50 dark:bg-[#101d22] p-3 rounded-lg">PlayerA</div>
                                            <div class="bg-gray-50 dark:bg-[#101d22] p-3 rounded-lg">PlayerF</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="bg-primary/20 text-primary p-3 rounded-lg">PlayerA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">Next Match</h3>
                            <div class="flex items-center justify-between p-4 bg-primary/10 dark:bg-primary/20 rounded-lg">
                                <div class="flex items-center gap-4">
                                    <img alt="Player avatar" class="h-12 w-12 rounded-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk" />
                                    <span class="font-bold text-lg">GamerX</span>
                                </div>
                                <span class="text-xl font-bold text-primary">vs</span>
                                <div class="flex items-center gap-4">
                                    <img alt="Player avatar" class="h-12 w-12 rounded-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                                    <span class="font-bold text-lg">PlayerOne</span>
                                </div>
                            </div>
                            <div class="mt-4 text-center">
                                <p class="text-lg">Starts in:</p>
                                <p class="text-4xl font-bold text-primary">10:35</p>
                            </div>
                            <button class="mt-4 w-full flex items-center justify-center gap-2 rounded-full bg-gray-200 dark:bg-[#2c404a] px-6 py-3 font-semibold">
                                <span class="material-symbols-outlined">videocam</span>
                                <span>Spectate</span>
                            </button>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">Join a Tournament</h3>
                            <p class="text-gray-600 dark:text-[#90b7cb] mb-4">Ready to compete? Find a tournament that fits your skill level.</p>
                            <button class="w-full flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-lg font-bold text-white transition-transform duration-200 hover:scale-105">
                                <span>Find Tournament</span>
                            </button>
                            <p class="text-center my-4 text-gray-500 dark:text-gray-400">or</p>
                            <button class="w-full flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary px-6 py-3 text-lg font-bold transition-colors duration-200 hover:bg-primary/10">
                                <span>Create Tournament</span>
                            </button>
                        </div>
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">Upcoming Matches</h3>
                            <div class="space-y-4">
                                <div class="flex items-center justify-between rounded-lg p-3 bg-gray-50 dark:bg-[#101d22]">
                                    <div class="flex items-center gap-3">
                                        <div>
                                            <p class="font-semibold">PlayerA vs. PlayerB</p>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">Round 2</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2 text-sm">
                                        <span class="material-symbols-outlined text-green-500 text-base">sensors</span>
                                        <span class="text-green-500 font-semibold">Live</span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between rounded-lg p-3 bg-gray-50 dark:bg-[#101d22]">
                                    <div class="flex items-center gap-3">
                                        <div>
                                            <p class="font-semibold">PlayerC vs. PlayerD</p>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">Round 2</p>
                                        </div>
                                    </div>
                                    <span class="text-sm font-semibold text-gray-500 dark:text-gray-400">15:00</span>
                                </div>
                                <div class="flex items-center justify-between rounded-lg p-3 bg-gray-50 dark:bg-[#101d22]">
                                    <div class="flex items-center gap-3">
                                        <div>
                                            <p class="font-semibold">PlayerE vs. PlayerF</p>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">Round 1</p>
                                        </div>
                                    </div>
                                    <span class="text-sm font-semibold text-gray-500 dark:text-gray-400">18:30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  `;
}
