/**
 * Settings Page - Converted from settings.html
 */

import { Sidebar } from '../components/sidebar.js';

export function SettingsPage(): string {
  return `
    <title>Ping Pong Game - Settings</title>
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-white">
        ${Sidebar('settings')}
        <div class="flex flex-1 flex-col overflow-hidden">
            <header
                class="flex h-20 items-center justify-between border-b border-gray-200 dark:border-[#2c404a] bg-white dark:bg-card-dark px-6">
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl font-bold">Settings</h2>
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
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div class="space-y-8">
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-6">Account</h3>
                            <div class="space-y-4">
                                <div class="flex flex-col">
                                    <label class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1"
                                        for="email">Email Address</label>
                                    <input
                                        class="w-full rounded-lg bg-gray-100 dark:bg-[#101d22] border-transparent focus:border-primary focus:ring-primary px-4 py-2"
                                        id="email" type="email" value="player.one@email.com" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1"
                                        for="password">Password</label>
                                    <button class="w-fit text-primary hover:underline" id="changePasswordBtn">Change Password</button>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <label class="text-sm font-medium text-gray-500 dark:text-gray-400"
                                            for="2fa">Two-Factor Authentication</label>
                                        <p class="text-xs text-gray-400 dark:text-gray-500">Keep your account secure.
                                        </p>
                                    </div>
                                    <div
                                        class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input
                                            class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-4 appearance-none cursor-pointer"
                                            id="2fa" name="2fa" type="checkbox" />
                                        <label
                                            class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer"
                                            for="2fa"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-6">Privacy</h3>
                            <div class="space-y-4">
                                <p class="text-sm text-gray-600 dark:text-gray-300">We respect your privacy. In
                                    accordance with GDPR, you can request your data or have it deleted.</p>
                                <div class="flex items-center gap-4">
                                    <button id="requestDataBtn"
                                        class="flex-1 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 font-semibold hover:bg-primary/20 dark:hover:bg-primary/30">Request
                                        My Data</button>
                                    <button id="deleteAccountBtn"
                                        class="flex-1 rounded-lg bg-red-500/10 dark:bg-red-500/20 text-red-500 px-4 py-2 font-semibold hover:bg-red-500/20 dark:hover:bg-red-500/30">Delete
                                        My Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-8">
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-6">Display &amp; Language</h3>
                            <div class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <label class="font-medium" for="theme">Theme</label>
                                    <div class="flex items-center gap-2 rounded-full p-1 bg-gray-100 dark:bg-[#101d22]">
                                        <button id="lightModeBtn" class="p-2 rounded-full">
                                            <span class="material-symbols-outlined">light_mode</span>
                                        </button>
                                        <button id="darkModeBtn" class="p-2 rounded-full bg-primary text-white">
                                            <span class="material-symbols-outlined">dark_mode</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <label class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1"
                                        for="language">Language</label>
                                    <select
                                        class="w-full rounded-lg bg-gray-100 dark:bg-[#101d22] border-transparent focus:border-primary focus:ring-primary px-4 py-2"
                                        id="language">
                                        <option>English</option>
                                        <option>Français</option>
                                        <option>Español</option>
                                        <option>Deutsch</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-6">Notifications</h3>
                            <div class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <label class="font-medium" for="game-invites">Game Invites</label>
                                    <div
                                        class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input checked=""
                                            class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-4 appearance-none cursor-pointer"
                                            id="game-invites" name="game-invites" type="checkbox" />
                                        <label
                                            class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer"
                                            for="game-invites"></label>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <label class="font-medium" for="friend-requests">Friend Requests</label>
                                    <div
                                        class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input checked=""
                                            class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-4 appearance-none cursor-pointer"
                                            id="friend-requests" name="friend-requests" type="checkbox" />
                                        <label
                                            class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer"
                                            for="friend-requests"></label>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <label class="font-medium" for="chat-messages">Chat Messages</label>
                                    <div
                                        class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input
                                            class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-4 appearance-none cursor-pointer"
                                            id="chat-messages" name="chat-messages" type="checkbox" />
                                        <label
                                            class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer"
                                            for="chat-messages"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <style>
        .toggle-checkbox:checked {
            right: 0;
            border-color: #0da6f2;
        }

        .toggle-checkbox:checked+.toggle-label {
            background-color: #0da6f2;
        }
    </style>
  `;
}
