/**
 * Play Page - Converted from play.html
 * Game selection and matchmaking interface
 */
import { Sidebar } from '../components/sidebar.js';
import { NotificationDropdown } from '../components/notifications.js';
export function PlayPage() {
    return `
    <title>Ping Pong Game - Play</title>
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-white">
        ${Sidebar('play')}
        <div class="flex flex-1 flex-col overflow-hidden">
            <header
                class="flex h-20 items-center justify-between border-b border-gray-200 dark:border-[#2c404a] bg-white dark:bg-card-dark px-6">
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl font-bold">Play</h2>
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
                        <div
                            class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md flex flex-col items-center text-center">
                            <h3 class="text-2xl font-bold mb-2">Ready to Play?</h3>
                            <p class="text-gray-600 dark:text-[#90b7cb] mb-6">Jump into a game now or choose a specific
                                mode.</p>
                            <a href="/gameSetup" data-link>
                                <button
                                    class="w-full max-w-xs flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-xl font-bold text-white transition-transform duration-200 hover:scale-105 shadow-lg">
                                    <span class="material-symbols-outlined text-2xl">sports_tennis</span>
                                    <span>Play Now</span>
                                </button>
                            </a>
                            <div class="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                                <div
                                    class="rounded-lg border border-gray-200 dark:border-[#2c404a] p-4 text-center hover:bg-gray-50 dark:hover:bg-[#2c404a] cursor-pointer">
                                    <span class="material-symbols-outlined text-3xl text-primary">bolt</span>
                                    <p class="mt-2 font-semibold">Quick Match</p>
                                </div>
                                <div
                                    class="rounded-lg border border-gray-200 dark:border-[#2c404a] p-4 text-center hover:bg-gray-50 dark:hover:bg-[#2c404a] cursor-pointer">
                                    <span class="material-symbols-outlined text-3xl text-primary">group</span>
                                    <p class="mt-2 font-semibold">Custom Game</p>
                                </div>
                                <div
                                    class="rounded-lg border border-gray-200 dark:border-[#2c404a] p-4 text-center hover:bg-gray-50 dark:hover:bg-[#2c404a] cursor-pointer">
                                    <span class="material-symbols-outlined text-3xl text-primary">military_tech</span>
                                    <p class="mt-2 font-semibold">Ranked</p>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">Active Games</h3>
                            <div class="space-y-4">
                                <div
                                    class="flex items-center justify-between rounded-lg p-3 bg-gray-50 dark:bg-[#101d22]">
                                    <div class="flex items-center gap-4">
                                        <img alt="Opponent avatar" class="h-10 w-10 rounded-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmIZtJH3XWuwqtuSkZ3lCB_8p-HjN_ijM_0M42E73Gl3aK-z-QK5HR6xj8lHj6hV19nzO5FacQwYY8mJf-DhgomGyne5FIPmHGSquGAkc3Aqcq9Xr7Tq4wz6aOm7QL61uuB3bEekxowEPhPNs9Syc8HL-c9Z7OF6pDihlvftLVKS9s-bDfiIeYlhYbOF7yP-T4Ycp3WPaB-Mqs91ehqr3l1UEDQypA-TG7b3YNHZcsryAOjJiwuDAk1JaKkUTPp06nDCBDphC7Ln4" />
                                        <div>
                                            <p class="font-semibold">vs. GamerX</p>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">Score: 5 - 8</p>
                                        </div>
                                    </div>
                                    <a class="text-sm font-semibold text-primary hover:underline" href="/game" data-link>Rejoin</a>
                                </div>
                                <div
                                    class="flex items-center justify-between rounded-lg p-3 bg-gray-50 dark:bg-[#101d22]">
                                    <div class="flex items-center gap-4">
                                        <img alt="Opponent avatar" class="h-10 w-10 rounded-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzKtAOvNV--mSYsJJI39Y5s-uFbV93YKAzhqKCg_DtLl2onB83ph1Ykyj5ojBQEKdE8qyFx4Q8hKicA8jZqEkHSgqZcGxbWMYFmNW-XZMVUjYWzWT08WgTjj8TvVaDRWxlM7ThQ81Wjj6mFhOdmaEn8Gh24h8Cwn-Sc07j8q7cRqP4Ld1q-RLxHxt2oE4EK4-7cBSfb2cUpqMIsmwaijw6X50Ih_xEQYXsqbK8DlGpzfjc2W_veBeyqzdcQmBd2MwyvcRUt1Lez2w" />
                                        <div>
                                            <p class="font-semibold">vs. PongMaster</p>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">Score: 10 - 10</p>
                                        </div>
                                    </div>
                                    <a class="text-sm font-semibold text-primary hover:underline" href="/game" data-link>Rejoin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">Challenges</h3>
                            <div class="space-y-4">
                                <div
                                    class="flex items-center justify-between rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-[#101d22]">
                                    <div class="flex items-center gap-4">
                                        <img alt="Challenger avatar" class="h-10 w-10 rounded-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkgQ3gHag6FMVJSxNdvoKrQvSTmvlg6ZA9YvPhinTvkOp0NTYPsAHzzOVZ2bX7BHm4aX0qWLNv1sQFOcks_lIJTaEu-zXdmCoZ5e5Rs_YRl38RJavS8FZJtC4vvnzb3mlXDWEBFjMIOIrM4ooBgvTRv43NAu0cMweJx_NsHWduyhdobKcC2lZ_P7vMKsmYEbTYHy6KiNKTE1CpCyGNAsSmcFlyJN5ge74gzaC7SYKyrj4RbAI4KMZ-bIIkL6tLRgACHP0fwaCVmss" />
                                        <p class="font-semibold">Friend_A</p>
                                    </div>
                                    <div class="flex gap-2">
                                        <button
                                            class="rounded-full bg-green-500/20 p-2 text-green-500 hover:bg-green-500/30">
                                            <span class="material-symbols-outlined text-base">check</span>
                                        </button>
                                        <button class="rounded-full bg-red-500/20 p-2 text-red-500 hover:bg-red-500/30">
                                            <span class="material-symbols-outlined text-base">close</span>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    class="flex items-center justify-between rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-[#101d22]">
                                    <div class="flex items-center gap-4">
                                        <img alt="Challenger avatar" class="h-10 w-10 rounded-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Q9RfcgbLblKN-FpAknQgLjGNuaUiryxjfcVlmuggnYXx4O5-12R2jC2JYWrn9wVmWY5-RzcnG0Nsp8fhs-IIZz5k7TpUc1TOuFzORPUzhP8uL3o7f7IFk_CQN6UDHywSag1RO1ALrLRnau8CQoquxf_qPzJi6H660I8tX2c-JaqAqHyOKjKh7ouJlcUjh7Fz6SFUDwq8oUUCfvPvfJChXEv2XMxsfyWcMkTgq_yA-FEGQmQnz7g7UDztMLynuUZ6kbbfGgS0VIM" />
                                        <p class="font-semibold">Friend_B</p>
                                    </div>
                                    <div class="flex gap-2">
                                        <button
                                            class="rounded-full bg-green-500/20 p-2 text-green-500 hover:bg-green-500/30">
                                            <span class="material-symbols-outlined text-base">check</span>
                                        </button>
                                        <button class="rounded-full bg-red-500/20 p-2 text-red-500 hover:bg-red-500/30">
                                            <span class="material-symbols-outlined text-base">close</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <a class="mt-4 block text-center text-sm font-semibold text-primary hover:underline"
                                href="#" data-link>View All</a>
                        </div>
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">Game Invites</h3>
                            <p class="text-center text-sm text-gray-500 dark:text-gray-400">No pending invites.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  `;
}
