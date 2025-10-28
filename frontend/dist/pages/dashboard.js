/**
 * Dashboard Page - Converted from dashboard.html
 */
import { Sidebar } from '../components/sidebar.js';
import { NotificationDropdown } from '../components/notifications.js';
export function DashboardPage() {
    return `
    <title>Ping Pong Game - Dashboard</title>
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-white">
        ${Sidebar('dashboard')}
        <div class="flex flex-1 flex-col overflow-hidden">
            <header
                class="flex h-20 items-center justify-between border-b border-gray-200 dark:border-[#2c404a] bg-white dark:bg-card-dark px-6">
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl font-bold">Dashboard</h2>
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
                            <h3 class="text-xl font-bold mb-4">Quick Match</h3>
                            <p class="text-gray-600 dark:text-[#90b7cb] mb-6">Find an opponent and start a game right
                                away.</p>
                            <button
                                id="findMatchBtn"
                                class="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white transition-transform duration-200 hover:scale-105">
                                <span class="material-symbols-outlined">bolt</span>
                                <span>Find Match</span>
                            </button>
                        </div>
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">Active Games</h3>
                            <div class="space-y-4" id="activeGames">
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
                                    <a class="text-sm font-semibold text-primary hover:underline" href="/game" data-link>Continue</a>
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
                                    <a class="text-sm font-semibold text-primary hover:underline" href="/game" data-link>Continue</a>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">Recent Matches</h3>
                            <div class="space-y-2" id="recentMatches">
                                <div
                                    class="flex items-center justify-between rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-[#101d22]">
                                    <div class="flex items-center gap-3">
                                        <span class="text-green-500 font-bold">W</span>
                                        <p>vs. <span class="font-semibold">Rookie_Rocket</span> (11-7)</p>
                                    </div>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                                </div>
                                <div
                                    class="flex items-center justify-between rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-[#101d22]">
                                    <div class="flex items-center gap-3">
                                        <span class="text-red-500 font-bold">L</span>
                                        <p>vs. <span class="font-semibold">PaddlePro</span> (5-11)</p>
                                    </div>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">1 day ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">Leaderboard</h3>
                            <div class="space-y-4" id="leaderboard">
                                <div class="flex items-center gap-4">
                                    <span class="font-bold text-lg w-6">1.</span>
                                    <img alt="Leaderboard user avatar" class="h-10 w-10 rounded-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBQzjA924CBxamq6qsn0gg_BPjpiaZt8MxyUrOSQAUnpq8B9ghvsevifkEYQPl5BcAVnaAOa90TaStTDnJMfQ-ClxRJnUNJHVxOWRRkzYGY0H_djKpt6JszDoSGNnLmkdRqdMbkDADpzl8WqEYJIHocmWLTEjjHB4YYRDdKyn1YvFHVxscrvcEda_VEVS-xn5GLPd5JgbNZf--dE8Cud89g9I6fkDKgcbEKZHjDLvfV64IVRk_iL6No6EBom1Ci7EeTCPOls683qQ" />
                                    <p class="font-semibold">TopPlayer</p>
                                </div>
                                <div class="flex items-center gap-4">
                                    <span class="font-bold text-lg w-6">2.</span>
                                    <img alt="Leaderboard user avatar" class="h-10 w-10 rounded-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                                    <p class="font-semibold">PlayerOne</p>
                                </div>
                                <div class="flex items-center gap-4">
                                    <span class="font-bold text-lg w-6">3.</span>
                                    <img alt="Leaderboard user avatar" class="h-10 w-10 rounded-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk" />
                                    <p class="font-semibold">GamerX</p>
                                </div>
                            </div>
                            <a class="mt-4 block text-center text-sm font-semibold text-primary hover:underline"
                                href="/stats" data-link>View All</a>
                        </div>
                        <div class="rounded-lg bg-white dark:bg-card-dark p-6 shadow-md">
                            <h3 class="text-xl font-bold mb-4">Online Friends</h3>
                            <div class="space-y-4" id="onlineFriends">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-4">
                                        <div class="relative">
                                            <img alt="Friend avatar" class="h-10 w-10 rounded-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkgQ3gHag6FMVJSxNdvoKrQvSTmvlg6ZA9YvPhinTvkOp0NTYPsAHzzOVZ2bX7BHm4aX0qWLNv1sQFOcks_lIJTaEu-zXdmCoZ5e5Rs_YRl38RJavS8FZJtC4vvnzb3mlXDWEBFjMIOIrM4ooBgvTRv43NAu0cMweJx_NsHWduyhdobKcC2lZ_P7vMKsmYEbTYHy6KiNKTE1CpCyGNAsSmcFlyJN5ge74gzaC7SYKyrj4RbAI4KMZ-bIIkL6tLRgACHP0fwaCVmss" />
                                            <span
                                                class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-card-dark"></span>
                                        </div>
                                        <p class="font-semibold">Friend_A</p>
                                    </div>
                                    <button class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-[#101d22]">
                                        <span class="material-symbols-outlined text-primary">sports_tennis</span>
                                    </button>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-4">
                                        <div class="relative">
                                            <img alt="Friend avatar" class="h-10 w-10 rounded-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Q9RfcgbLblKN-FpAknQgLjGNuaUiryxjfcVlmuggnYXx4O5-12R2jC2JYWrn9wVmWY5-RzcnG0Nsp8fhs-IIZz5k7TpUc1TOuFzORPUzhP8uL3o7f7IFk_CQN6UDHywSag1RO1ALrLRnau8CQoquxf_qPzJi6H660I8tX2c-JaqAqHyOKjKh7ouJlcUjh7Fz6SFUDwq8oUUCfvPvfJChXEv2XMxsfyWcMkTgq_yA-FEGQmQnz7g7UDztMLynuUZ6kbbfGgS0VIM" />
                                            <span
                                                class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-card-dark"></span>
                                        </div>
                                        <p class="font-semibold">Friend_B</p>
                                    </div>
                                    <button class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-[#101d22]">
                                        <span class="material-symbols-outlined text-primary">sports_tennis</span>
                                    </button>
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
