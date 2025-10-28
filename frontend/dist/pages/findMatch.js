/**
 * Find Match Page - Converted from findMatch.html
 */
import { Sidebar } from '../components/sidebar.js';
import { NotificationDropdown } from '../components/notifications.js';
export function FindMatchPage() {
    return `
    <title>Ping Pong Game - Finding Match</title>
    <style>
        @keyframes bounce {
            0%, 100% {
                transform: translateY(-25%);
                animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
                transform: translateY(0);
                animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
        }
        .animate-ping-pong {
            animation: bounce 1s infinite;
        }
    </style>
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-white">
        ${Sidebar('play')}
        <div class="flex flex-1 flex-col overflow-hidden">
            <header class="flex h-20 items-center justify-between border-b border-gray-200 dark:border-[#2c404a] bg-white dark:bg-card-dark px-6">
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl font-bold">Find Match</h2>
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
            <main class="flex flex-1 flex-col items-center justify-center p-6 lg:p-8">
                <div class="flex flex-col items-center text-center">
                    <div class="relative mb-8 h-24 w-24">
                        <span class="material-symbols-outlined absolute text-8xl text-primary animate-ping-pong"
                            style="font-variation-settings: 'FILL' 1;">sports_tennis</span>
                    </div>
                    <h2 class="text-3xl font-bold mb-2" id="status-text">Searching for opponent...</h2>
                    <p class="text-gray-500 dark:text-[#90b7cb] mb-12 max-w-sm">Please wait while we find a suitable opponent for you. This shouldn't take long.</p>
                    <button class="flex items-center justify-center gap-2 rounded-full bg-gray-200 dark:bg-card-dark px-6 py-3 text-lg font-semibold text-gray-700 dark:text-white transition-colors hover:bg-gray-300 dark:hover:bg-[#2c404a]">
                        <span class="material-symbols-outlined">close</span>
                        <span>Cancel</span>
                    </button>
                </div>
            </main>
        </div>
    </div>
  `;
}
