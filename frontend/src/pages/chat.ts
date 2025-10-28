/**
 * Chat Page - Converted from chat.html
 */

import { Sidebar } from '../components/sidebar.js';
import { NotificationDropdown } from '../components/notifications.js';

export function ChatPage(): string {
  return `
    <title>Ping Pong Game - Chat</title>
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-white">
        ${Sidebar('chat')}
        <div class="flex flex-1 flex-col overflow-hidden">
            <header class="flex h-20 items-center justify-between border-b border-gray-200 dark:border-[#2c404a] bg-white dark:bg-card-dark px-6">
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl font-bold">Chat</h2>
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
            <main class="flex flex-1 overflow-hidden">
                <div class="flex w-full">
                    <div class="w-1/3 border-r border-gray-200 dark:border-[#2c404a] bg-white dark:bg-card-dark flex flex-col">
                        <div class="p-4 border-b border-gray-200 dark:border-[#2c404a]">
                            <h3 class="text-xl font-bold mb-4">Chats</h3>
                            <div class="relative">
                                <input class="w-full rounded-full bg-gray-100 dark:bg-[#101d22] border-transparent focus:border-primary focus:ring-primary pl-10 pr-4 py-2"
                                    placeholder="Search chats" type="text" id="chatSearch" />
                                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                            </div>
                        </div>
                        <div class="flex-1 overflow-y-auto">
                            <div class="p-2 space-y-1" id="chatList">
                                <div class="flex items-center gap-3 rounded-lg p-3 bg-primary/10 dark:bg-primary/20 cursor-pointer">
                                    <div class="relative">
                                        <img alt="Friend avatar" class="h-12 w-12 rounded-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk" />
                                        <span class="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-card-dark"></span>
                                    </div>
                                    <div class="flex-1">
                                        <p class="font-semibold">GamerX</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 truncate">Awesome game! Wanna play again?</p>
                                    </div>
                                    <span class="text-xs text-gray-400">10:30</span>
                                </div>
                                <div class="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-[#2c404a] cursor-pointer">
                                    <div class="relative">
                                        <span class="material-symbols-outlined text-3xl text-gray-400 bg-gray-200 dark:bg-[#101d22] rounded-full p-2">tag</span>
                                    </div>
                                    <div class="flex-1">
                                        <p class="font-semibold">#general-chat</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 truncate">PongMaster: Who's up for a tournament?</p>
                                    </div>
                                    <span class="text-xs text-gray-400">10:25</span>
                                </div>
                                <div class="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-[#2c404a] cursor-pointer">
                                    <div class="relative">
                                        <img alt="Friend avatar" class="h-12 w-12 rounded-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                                        <span class="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 border-2 border-white dark:border-card-dark"></span>
                                    </div>
                                    <div class="flex-1">
                                        <p class="font-semibold">PongMaster</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 truncate">Let's do it!</p>
                                    </div>
                                    <span class="text-xs text-gray-400">Yesterday</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-2/3 flex flex-col bg-background-light dark:bg-background-dark">
                        <div class="flex h-20 items-center justify-between border-b border-gray-200 dark:border-[#2c404a] bg-white dark:bg-card-dark px-6">
                            <div class="flex items-center gap-4">
                                <img alt="Friend avatar" class="h-12 w-12 rounded-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk" />
                                <div>
                                    <p class="text-lg font-bold">GamerX</p>
                                    <p class="text-sm text-green-500">Online</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <button class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#2c404a]" title="Invite to game">
                                    <span class="material-symbols-outlined text-primary">sports_tennis</span>
                                </button>
                                <button class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#2c404a]" title="Block User">
                                    <span class="material-symbols-outlined">block</span>
                                </button>
                                <button class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#2c404a]" title="More options">
                                    <span class="material-symbols-outlined">more_vert</span>
                                </button>
                            </div>
                        </div>
                        <div class="flex-1 overflow-y-auto p-6 space-y-6" id="messageContainer">
                            <div class="flex items-start gap-4">
                                <img alt="Friend avatar" class="h-10 w-10 rounded-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk" />
                                <div class="bg-white dark:bg-card-dark p-4 rounded-lg rounded-tl-none max-w-lg">
                                    <p class="text-sm">Awesome game! Wanna play again?</p>
                                    <p class="text-xs text-gray-400 dark:text-gray-500 text-right mt-1">10:30 AM</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4 justify-end">
                                <div class="bg-primary/90 text-white p-4 rounded-lg rounded-tr-none max-w-lg">
                                    <p class="text-sm">Totally! I'm free now. Let's go!</p>
                                    <p class="text-xs text-blue-200 text-right mt-1">10:31 AM</p>
                                </div>
                                <img alt="User avatar" class="h-10 w-10 rounded-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                            </div>
                            <div class="flex items-center justify-center my-4">
                                <div class="bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                                    <span class="material-symbols-outlined">sports_tennis</span>
                                    <span>You invited GamerX to a game of Pong.</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <img alt="Friend avatar" class="h-10 w-10 rounded-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk" />
                                <div class="bg-white dark:bg-card-dark p-4 rounded-lg rounded-tl-none max-w-lg">
                                    <p class="text-sm">Joining now!</p>
                                    <p class="text-xs text-gray-400 dark:text-gray-500 text-right mt-1">10:32 AM</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 bg-white dark:bg-card-dark border-t border-gray-200 dark:border-[#2c404a]">
                            <form class="relative" id="messageForm">
                                <input class="w-full rounded-full bg-gray-100 dark:bg-[#101d22] border-transparent focus:border-primary focus:ring-primary pl-4 pr-12 py-3"
                                    placeholder="Type a message..." type="text" id="messageInput" />
                                <button type="submit" class="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary text-white hover:bg-primary/90">
                                    <span class="material-symbols-outlined">send</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  `;
}
