/**
 * Friends Page - Converted from friends.html
 */
import { Sidebar } from '../components/sidebar.js';
import { NotificationDropdown } from '../components/notifications.js';
export function FriendsPage() {
    return `
    <title>Ping Pong Game - Friends</title>
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-white">
        ${Sidebar('friends')}
        <div class="flex flex-1 flex-col overflow-hidden">
            <header
                class="flex h-20 items-center justify-between border-b border-gray-200 dark:border-[#2c404a] bg-white dark:bg-card-dark px-6">
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl font-bold">Friends</h2>
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
                            <h3 class="text-xl font-bold mb-4">Friend List</h3>
                            <div class="space-y-4" id="friendList">
                                <div class="flex items-center justify-between rounded-lg p-3 bg-gray-50 dark:bg-[#101d22]">
                                    <div class="flex items-center gap-4">
                                        <div class="relative">
                                            <img alt="Friend avatar" class="h-12 w-12 rounded-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk" />
                                            <span class="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-gray-50 dark:border-[#101d22]"></span>
                                        </div>
                                        <div>
                                            <p class="font-semibold">GamerX</p>
                                            <p class="text-sm text-green-500">Online</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-[#2c404a]" title="Invite to game">
                                            <span class="material-symbols-outlined text-primary">sports_esports</span>
                                        </button>
                                        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-[#2c404a]" title="View Profile">
                                            <span class="material-symbols-outlined">visibility</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between rounded-lg p-3 bg-gray-50 dark:bg-[#101d22]">
                                    <div class="flex items-center gap-4">
                                        <div class="relative">
                                            <img alt="Friend avatar" class="h-12 w-12 rounded-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                                            <span class="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 border-2 border-gray-50 dark:border-[#101d22]"></span>
                                        </div>
                                        <div>
                                            <p class="font-semibold">PongMaster</p>
                                            <p class="text-sm text-yellow-500">In Game</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-[#2c404a]" title="Invite to game">
                                            <span class="material-symbols-outlined text-primary">sports_esports</span>
                                        </button>
                                        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-[#2c404a]" title="View Profile">
                                            <span class="material-symbols-outlined">visibility</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between rounded-lg p-3 bg-gray-50 dark:bg-[#101d22]">
                                    <div class="flex items-center gap-4">
                                        <div class="relative">
                                            <img alt="Friend avatar" class="h-12 w-12 rounded-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACTe2G82J9gcgeNG6GqYRb4EPMN30MEHZz0ujtW3qcPvXTKWCt3TEQcIWzsB1zkW5LjvHGdxnP2Zo_R7Vo7KiOcdSgRT85XtM2uN0u6ylOHLzOUxiU01KLICdDXLvKlaNSFVZ0oE671zMv31bvbMfR2KBgC6ugJBnfarKrW7NyiIrqJzSPSbRiCHbrFYvBkdCfGIPkkrAB3fTpF7Kwfbd0V9Lmty8oB4IjFX87oSY46HAeCaYssWSpXGTvB14U9MEySRGt_UqfzIk" />
                                            <span class="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-gray-400 border-2 border-gray-50 dark:border-[#101d22]"></span>
                                        </div>
                                        <div>
                                            <p class="font-semibold">AcePlayer</p>
                                            <p class="text-sm text-gray-400">Offline</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-[#2c404a]" title="Invite to game">
                                            <span class="material-symbols-outlined text-primary">sports_esports</span>
                                        </button>
                                        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-[#2c404a]" title="View Profile">
                                            <span class="material-symbols-outlined">visibility</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">Add Friends</h3>
                            <div class="relative">
                                <input class="w-full rounded-full bg-gray-100 dark:bg-[#101d22] border-transparent focus:border-primary focus:ring-primary pl-10 pr-4 py-2"
                                    placeholder="Search by username" type="text" id="friendSearch" />
                                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                            </div>
                            <button id="addFriendBtn"
                                class="mt-4 w-full flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-lg font-bold text-white transition-transform duration-200 hover:scale-105">
                                <span>Add Friend</span>
                            </button>
                        </div>
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">Friend Requests</h3>
                            <div class="space-y-4" id="friendRequests">
                                <div class="flex items-center justify-between rounded-lg p-3 bg-gray-50 dark:bg-[#101d22]">
                                    <div class="flex items-center gap-3">
                                        <img alt="User avatar" class="h-10 w-10 rounded-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ8pNwNu6KpM1TgsqQdpIxZY3lAlU2EBBBXW_XkRkhzK-toR3csiHvRGsBewUl3DSWmYYTLUY5E9arX1APdb-2ryGssVRfD76nhsLHuTJp_CjexJD7n-qRfzYVkpHCQYLu6M1IuKvb9QN83ggDTxNeK86uQv96riDTZKe7xZb_Qc3BtWe0zARMFOSJaWMF6Jrb9CPMmwL-GlkCblOUMZyE2tuVWNeRNXpEXr9nsX1hFVRwhdfU6LaEjk2s9_Z0qll1IKW71yWo8Hs" />
                                        <p class="font-semibold">NewChallenger</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <button class="p-2 rounded-full bg-green-500/20 text-green-500 hover:bg-green-500/30">
                                            <span class="material-symbols-outlined">check</span>
                                        </button>
                                        <button class="p-2 rounded-full bg-red-500/20 text-red-500 hover:bg-red-500/30">
                                            <span class="material-symbols-outlined">close</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between rounded-lg p-3 bg-gray-50 dark:bg-[#101d22]">
                                    <div class="flex items-center gap-3">
                                        <img alt="User avatar" class="h-10 w-10 rounded-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4Lwj1Kr4OAl-UUq5t1DOvuW2ZptgrrA6uJfB0jXsII5_J82wsZYCb4MKAwbP8n6bBA1G6NYxgtxtEo87l9If4I5ZwYtRjXiUmE6tEcvTywH1y9Gmm5H-uxs6FeNDPmHHyqLRoFPdx7f8R8UHyUiE0DH-vCDpVg_PHveNqFyZoGNb__NkIxxRX4y6KU_YczU82dAgMwg0baiel92ZyfmI47r02RTimywCaacaMH_o4DWnEM1HLfVBF_nZ4WSugnreJ8nxIGPfG6XU" />
                                        <p class="font-semibold">PingFanatic</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <button class="p-2 rounded-full bg-green-500/20 text-green-500 hover:bg-green-500/30">
                                            <span class="material-symbols-outlined">check</span>
                                        </button>
                                        <button class="p-2 rounded-full bg-red-500/20 text-red-500 hover:bg-red-500/30">
                                            <span class="material-symbols-outlined">close</span>
                                        </button>
                                    </div>
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
