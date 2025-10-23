/**
 * Game Setup Page - Converted from gameSetup.html
 * Configure game settings and find opponent
 */

import { Sidebar } from '../components/sidebar.js';

export function GameSetupPage(): string {
  return `
    <title>Ping Pong Game - Game Setup</title>
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-white">
        ${Sidebar('play')}
        <div class="flex flex-1 flex-col overflow-hidden">
            <header
                class="flex h-20 items-center justify-between border-b border-gray-200 dark:border-[#2c404a] bg-white dark:bg-card-dark px-6">
                <div class="flex items-center gap-4">
                    <a class="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        href="/play" data-link>
                        <span class="material-symbols-outlined">arrow_back</span>
                    </a>
                    <h2 class="text-2xl font-bold">Game Setup</h2>
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
                <div class="max-w-4xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-6">
                            <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                                <h3 class="text-xl font-bold mb-4">1. Choose Game Mode</h3>
                                <div class="space-y-3">
                                    <label
                                        class="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-[#2c404a] has-[:checked]:border-primary has-[:checked]:bg-primary/10 dark:has-[:checked]:bg-primary/20 cursor-pointer">
                                        <span class="material-symbols-outlined text-primary">bolt</span>
                                        <span class="font-semibold">Quick Match</span>
                                        <input checked="" class="ml-auto accent-primary" name="game-mode"
                                            type="radio" value="quick" />
                                    </label>
                                    <label
                                        class="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-[#2c404a] has-[:checked]:border-primary has-[:checked]:bg-primary/10 dark:has-[:checked]:bg-primary/20 cursor-pointer">
                                        <span class="material-symbols-outlined text-primary">military_tech</span>
                                        <span class="font-semibold">Ranked Match</span>
                                        <input class="ml-auto accent-primary" name="game-mode" type="radio" value="ranked" />
                                    </label>
                                    <label
                                        class="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-[#2c404a] has-[:checked]:border-primary has-[:checked]:bg-primary/10 dark:has-[:checked]:bg-primary/20 cursor-pointer">
                                        <span class="material-symbols-outlined text-primary">settings</span>
                                        <span class="font-semibold">Custom Game</span>
                                        <input class="ml-auto accent-primary" name="game-mode" type="radio" value="custom" />
                                    </label>
                                </div>
                            </div>
                            <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                                <h3 class="text-xl font-bold mb-4">2. Select Opponent</h3>
                                <div class="space-y-3">
                                    <label
                                        class="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-[#2c404a] has-[:checked]:border-primary has-[:checked]:bg-primary/10 dark:has-[:checked]:bg-primary/20 cursor-pointer">
                                        <span class="material-symbols-outlined text-primary">smart_toy</span>
                                        <span class="font-semibold">AI</span>
                                        <input class="ml-auto accent-primary" name="opponent" type="radio" value="ai" />
                                    </label>
                                    <label
                                        class="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-[#2c404a] has-[:checked]:border-primary has-[:checked]:bg-primary/10 dark:has-[:checked]:bg-primary/20 cursor-pointer">
                                        <span class="material-symbols-outlined text-primary">group_add</span>
                                        <span class="font-semibold">Invite a Friend</span>
                                        <input class="ml-auto accent-primary" name="opponent" type="radio" value="friend" />
                                    </label>
                                    <label
                                        class="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-[#2c404a] has-[:checked]:border-primary has-[:checked]:bg-primary/10 dark:has-[:checked]:bg-primary/20 cursor-pointer">
                                        <span class="material-symbols-outlined text-primary">public</span>
                                        <span class="font-semibold">Random Player</span>
                                        <input checked="" class="ml-auto accent-primary" name="opponent" type="radio" value="random" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-6">
                            <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                                <h3 class="text-xl font-bold mb-4">Your Opponent</h3>
                                <div class="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-[#101d22]" id="opponentInfo">
                                    <div class="relative">
                                        <img alt="Opponent avatar" class="h-16 w-16 rounded-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfwUgHOcVD_UVPKC1A2Qu1MQjDAnSM1Qaz39jte6KJU7petQRxXoKzMBBHAuhgznPYLxV52V6cWVQaQ_2eujrNHHyc_kl8CU72Uk10lCiELWQf9XuHCmPzp-G5hWkooMTGPuM0BrVSnS8on8asqsGXZxmGU8eybI5ZuIIPFndTD_wuRptjz8Yg_FfwyCDtDRjOuFk1mUFGsUsdqTKPxP0rB9kdyL7x3K5h4EdMcUFvdPbMWJ7mt0-gAmHLrf0ZQ4SBAjmCqc8iC0g" />
                                        <span
                                            class="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-500 border-2 border-gray-50 dark:border-[#101d22]"></span>
                                    </div>
                                    <div class="flex-1">
                                        <p class="font-bold text-lg">Searching...</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">Finding a worthy opponent
                                        </p>
                                    </div>
                                    <span
                                        class="material-symbols-outlined animate-spin text-primary">progress_activity</span>
                                </div>
                            </div>
                            <div
                                class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md flex flex-col items-center text-center">
                                <h3 class="text-2xl font-bold mb-2">Ready to Go?</h3>
                                <p class="text-gray-600 dark:text-[#90b7cb] mb-6">Confirm your choices and start the
                                    match!</p>
                                <a href="/game" data-link>
                                    <button id="startGameBtn"
                                        class="w-full flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-xl font-bold text-white transition-transform duration-200 hover:scale-105 shadow-lg">
                                        <span class="material-symbols-outlined text-2xl">rocket_launch</span>
                                        <span>Start Game</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  `;
}
