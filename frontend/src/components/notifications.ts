/**
 * Notifications Component - Reusable notification dropdown
 */

export function NotificationDropdown(): string {
  return `
    <div class="relative group">
        <button id="notificationBtn" class="relative rounded-full p-2 hover:bg-gray-100 dark:hover:bg-[#2c404a]">
            <span class="material-symbols-outlined">notifications</span>
            <span id="notificationBadge" class="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
        </button>
        <div id="notificationDropdown"
            class="absolute right-0 mt-2 w-80 bg-white dark:bg-card-dark rounded-lg shadow-lg border border-gray-200 dark:border-[#2c404a] hidden z-50">
            <div class="p-4 border-b border-gray-200 dark:border-[#2c404a]">
                <h3 class="font-bold text-lg">Notifications</h3>
            </div>
            <div id="notificationList" class="divide-y divide-gray-200 dark:divide-[#2c404a] max-h-96 overflow-y-auto scrollbar-hide">
                <a class="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-[#2c404a]" href="#">
                    <span class="material-symbols-outlined text-primary mt-1">sports_tennis</span>
                    <div class="flex-1">
                        <p class="font-semibold">New Match Invitation</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">GamerX has challenged you to
                            a match.</p>
                        <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">5 minutes ago</p>
                    </div>
                    <button
                        class="notification-close p-1 rounded-full hover:bg-gray-200 dark:hover:bg-[#101d22] self-center">
                        <span class="material-symbols-outlined text-sm">close</span>
                    </button>
                </a>
                <a class="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-[#2c404a]" href="#">
                    <span class="material-symbols-outlined text-yellow-500 mt-1">emoji_events</span>
                    <div class="flex-1">
                        <p class="font-semibold">Tournament Reminder</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">The "Weekly Pong Masters"
                            tournament starts in 1 hour.</p>
                        <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">45 minutes ago</p>
                    </div>
                    <button
                        class="notification-close p-1 rounded-full hover:bg-gray-200 dark:hover:bg-[#101d22] self-center">
                        <span class="material-symbols-outlined text-sm">close</span>
                    </button>
                </a>
                <a class="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-[#2c404a]" href="#">
                    <span class="material-symbols-outlined text-green-500 mt-1">person_add</span>
                    <div class="flex-1">
                        <p class="font-semibold">New Friend Request</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">PaddlePro wants to be your
                            friend.</p>
                        <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">2 hours ago</p>
                    </div>
                    <button
                        class="notification-close p-1 rounded-full hover:bg-gray-200 dark:hover:bg-[#101d22] self-center">
                        <span class="material-symbols-outlined text-sm">close</span>
                    </button>
                </a>
                <a class="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-[#2c404a]" href="#">
                    <span class="material-symbols-outlined text-blue-500 mt-1">chat</span>
                    <div class="flex-1">
                        <p class="font-semibold">New Message</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Friend_A: "Ready for a
                            rematch?"</p>
                        <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">1 day ago</p>
                    </div>
                    <button
                        class="notification-close p-1 rounded-full hover:bg-gray-200 dark:hover:bg-[#101d22] self-center">
                        <span class="material-symbols-outlined text-sm">close</span>
                    </button>
                </a>
            </div>
            <div class="p-2 border-t border-gray-200 dark:border-[#2c404a]">
                <button id="markAllRead"
                    class="w-full text-center text-sm font-semibold text-primary hover:underline">Mark
                    all as read</button>
            </div>
        </div>
    </div>
  `;
}
