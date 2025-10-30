/**
 * User Dropdown Component - Profile menu in header
 */

export function UserDropdown(): string {
  return `
    <div class="relative">
        <button id="userMenuBtn" class="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-[#2c404a] rounded-lg px-2 py-1 transition-colors">
            <img alt="User avatar" id="userAvatar" class="h-10 w-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
            <span class="font-medium" id="userName">PlayerOne</span>
            <span class="material-symbols-outlined transition-transform" id="userMenuIcon">expand_more</span>
        </button>
        <div id="userDropdown"
            class="absolute right-0 mt-2 w-64 bg-white dark:bg-card-dark rounded-lg shadow-lg border border-gray-200 dark:border-[#2c404a] hidden z-50">
            <div class="p-4 border-b border-gray-200 dark:border-[#2c404a]">
                <p class="font-bold text-lg" id="dropdownUserName">PlayerOne</p>
                <p class="text-sm text-gray-500 dark:text-gray-400" id="dropdownUserEmail">player@example.com</p>
            </div>
            <div class="py-2">
                <a href="/profile" data-link class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-[#2c404a] transition-colors">
                    <span class="material-symbols-outlined text-primary">account_circle</span>
                    <span>My Profile</span>
                </a>
                <a href="/settings" data-link class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-[#2c404a] transition-colors">
                    <span class="material-symbols-outlined text-primary">settings</span>
                    <span>Settings</span>
                </a>
                <a href="/stats" data-link class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-[#2c404a] transition-colors">
                    <span class="material-symbols-outlined text-primary">query_stats</span>
                    <span>My Stats</span>
                </a>
            </div>
            <div class="border-t border-gray-200 dark:border-[#2c404a] p-2">
                <button id="dropdownLogoutBtn" class="flex items-center gap-3 w-full px-4 py-3 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg transition-colors">
                    <span class="material-symbols-outlined">logout</span>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    </div>
  `;
}
