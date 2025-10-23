/**
 * Sign Up Page - Original HTML converted to TypeScript
 */

export function SignPage(): string {
  return `
    <title>Create Your Ping Pong Profile</title>
    <div class="relative flex min-h-screen w-full flex-col items-center justify-center p-4 bg-[#101d23]">
        <div class="w-full max-w-2xl">
            <header class="mb-8 flex items-center justify-between whitespace-nowrap px-4 py-3">
                <div class="flex items-center gap-3 text-2xl font-bold text-white">
                    <span class="material-symbols-outlined text-primary text-3xl">sports_tennis</span>
                    <h2 class="text-inherit">Ping Pong Game</h2>
                </div>
                <a href="/login" data-link>
                    <button
                        class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-wide">
                        Log In
                    </button>
                </a>
            </header>
            <main class="w-full rounded-lg bg-white dark:bg-[#182b34] p-8 shadow-lg">
                <div class="mb-8 text-center">
                    <h1 class="text-4xl font-black leading-tight tracking-tighter text-gray-900 dark:text-white">Create Your Ping Pong Profile</h1>
                    <p class="mt-2 text-base text-gray-600 dark:text-[#90b7cb]">Join the ultimate ping pong community and start playing today!</p>
                </div>
                <div class="flex flex-col items-center gap-6">
                    <div class="relative">
                        <img id="avatar-preview" alt="Default avatar" class="h-32 w-32 rounded-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                        <label class="absolute bottom-0 right-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-white transition-transform duration-200 hover:scale-110" for="avatar-upload">
                            <span class="material-symbols-outlined">add_a_photo</span>
                            <input class="hidden" id="avatar-upload" type="file" accept="image/*" />
                        </label>
                    </div>
                    <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Choose Your Avatar</p>
                </div>
                <form id="signupForm" class="mt-8 space-y-6">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <label class="flex flex-col">
                            <p class="pb-2 text-base font-medium text-gray-900 dark:text-white">Username</p>
                            <input
                                id="username"
                                name="username"
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-gray-300 bg-gray-50 p-[15px] text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary dark:border-[#315668] dark:bg-[#101d22] dark:text-white dark:placeholder:text-[#90b7cb] dark:focus:border-primary"
                                placeholder="Enter your username" value="" />
                        </label>
                        <label class="flex flex-col">
                            <p class="pb-2 text-base font-medium text-gray-900 dark:text-white">Email Address</p>
                            <input
                                id="email"
                                name="email"
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-gray-300 bg-gray-50 p-[15px] text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary dark:border-[#315668] dark:bg-[#101d22] dark:text-white dark:placeholder:text-[#90b7cb] dark:focus:border-primary"
                                placeholder="Enter your email address" type="email" value="" />
                        </label>
                    </div>
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <label class="flex flex-col">
                            <p class="pb-2 text-base font-medium text-gray-900 dark:text-white">Password</p>
                            <div class="relative">
                                <input
                                    id="password"
                                    name="password"
                                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-gray-300 bg-gray-50 p-[15px] text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary dark:border-[#315668] dark:bg-[#101d22] dark:text-white dark:placeholder:text-[#90b7cb] dark:focus:border-primary"
                                    placeholder="Enter your password" type="password" value="" />
                                <button id="togglePassword" class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:text-[#90b7cb] dark:hover:text-white" type="button">
                                    <span class="material-symbols-outlined">visibility_off</span>
                                </button>
                            </div>
                        </label>
                        <label class="flex flex-col">
                            <p class="pb-2 text-base font-medium text-gray-900 dark:text-white">Confirm Password</p>
                            <div class="relative">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-gray-300 bg-gray-50 p-[15px] text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary dark:border-[#315668] dark:bg-[#101d22] dark:text-white dark:placeholder:text-[#90b7cb] dark:focus:border-primary"
                                    placeholder="Confirm your password" type="password" value="" />
                                <button id="toggleConfirmPassword" class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:text-[#90b7cb] dark:hover:text-white" type="button">
                                    <span class="material-symbols-outlined">visibility_off</span>
                                </button>
                            </div>
                        </label>
                    </div>
                    <div class="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-[#101d22]">
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-primary">security</span>
                            <div>
                                <p class="font-medium text-gray-900 dark:text-white">Secure your account with 2FA</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security to your account.</p>
                            </div>
                        </div>
                        <label class="relative inline-flex cursor-pointer items-center" for="2fa-toggle">
                            <input class="peer sr-only" id="2fa-toggle" type="checkbox" />
                            <div class="h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 dark:bg-gray-700 dark:border-gray-600 dark:peer-focus:ring-primary/80"></div>
                        </label>
                    </div>
                    <div id="errorMessage" class="hidden bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                        <p class="text-red-400 text-base font-normal leading-normal"></p>
                    </div>
                    <div id="successMessage" class="hidden bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                        <p class="text-green-400 text-base font-normal leading-normal"></p>
                    </div>
                    <div>
                        <button
                            id="signupBtn"
                            type="submit"
                            class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-6 bg-primary text-white text-lg font-bold leading-normal tracking-wider transition-transform duration-200 hover:scale-105">
                            Create Account
                        </button>
                    </div>
                    <p class="text-center text-xs text-gray-500 dark:text-gray-400">
                        By registering, you agree to our
                        <a class="font-medium text-primary hover:underline" href="#">Terms of Service</a>
                        and
                        <a class="font-medium text-primary hover:underline" href="#">Privacy Policy</a>.
                    </p>
                </form>
            </main>
            <footer class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>© 2024 Ping Pong Game. All Rights Reserved.</p>
                <div class="mt-2 flex justify-center space-x-4">
                    <a class="hover:text-primary" href="#">Facebook</a>
                    <a class="hover:text-primary" href="#">Twitter</a>
                    <a class="hover:text-primary" href="#">Instagram</a>
                </div>
            </footer>
        </div>
    </div>
  `;
}
