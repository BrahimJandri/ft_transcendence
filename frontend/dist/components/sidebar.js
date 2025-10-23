/**
 * Sidebar Component - Shared navigation for authenticated pages
 */
export function Sidebar(activePage = '') {
    const isActive = (page) => activePage === page
        ? 'bg-primary/10 dark:bg-primary/20 text-primary'
        : 'hover:bg-gray-100 dark:hover:bg-[#2c404a]';
    return `
    <aside class="flex w-64 flex-col bg-white dark:bg-card-dark p-4">
        <div class="flex items-center gap-3 text-2xl font-bold p-4">
            <span class="material-symbols-outlined text-primary text-3xl">sports_tennis</span>
            <h1 class="text-inherit">Ping Pong</h1>
        </div>
        <nav class="mt-8 flex flex-col space-y-2">
            <a class="flex items-center gap-3 rounded-lg ${isActive('dashboard')} px-4 py-3 font-semibold"
                href="/dashboard" data-link>
                <span class="material-symbols-outlined">home</span>
                <span>Home</span>
            </a>
            <a class="flex items-center gap-3 rounded-lg ${isActive('play')} px-4 py-3"
                href="/play" data-link>
                <span class="material-symbols-outlined">sports_esports</span>
                <span>Play</span>
            </a>
            <a class="flex items-center gap-3 rounded-lg ${isActive('tournaments')} px-4 py-3"
                href="/tournaments" data-link>
                <span class="material-symbols-outlined">emoji_events</span>
                <span>Tournaments</span>
            </a>
            <a class="flex items-center gap-3 rounded-lg ${isActive('friends')} px-4 py-3"
                href="/friends" data-link>
                <span class="material-symbols-outlined">group</span>
                <span>Friends</span>
            </a>
            <a class="flex items-center gap-3 rounded-lg ${isActive('chat')} px-4 py-3"
                href="/chat" data-link>
                <span class="material-symbols-outlined">chat</span>
                <span>Chat</span>
            </a>
            <a class="flex items-center gap-3 rounded-lg ${isActive('stats')} px-4 py-3"
                href="/stats" data-link>
                <span class="material-symbols-outlined">query_stats</span>
                <span>Stats</span>
            </a>
        </nav>
        <div class="mt-auto">
            <a class="flex items-center gap-3 rounded-lg ${isActive('settings')} px-4 py-3"
                href="/settings" data-link>
                <span class="material-symbols-outlined">settings</span>
                <span>Settings</span>
            </a>
            <a class="flex items-center gap-3 rounded-lg ${isActive('profile')} px-4 py-3"
                href="/profile" data-link>
                <span class="material-symbols-outlined">account_circle</span>
                <span>Profile</span>
            </a>
            <button id="logoutBtn" class="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-red-100 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400">
                <span class="material-symbols-outlined">logout</span>
                <span>Logout</span>
            </button>
        </div>
    </aside>
  `;
}
