/**
 * Login Page Component
 */
export function LoginPage() {
    return `
    <title>Login - Ping Pong Game</title>
    <div class="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#101d23] dark group/design-root overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col">
            <div class="px-4 flex flex-1 justify-center py-5">
                <div class="layout-content-container flex flex-col max-w-[480px] flex-1">
                    <div class="flex flex-col gap-8 p-4">
                        <div class="flex flex-col gap-3 text-center">
                            <p class="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Welcome Back!</p>
                            <p class="text-[#90b7cb] text-base font-normal leading-normal">Don't have an account?
                                <a class="text-primary font-medium" href="/sign" data-link>Sign Up</a>
                            </p>
                        </div>
                        <div class="flex flex-col gap-4">
                            <label class="flex flex-col min-w-40 flex-1">
                                <p class="text-white text-base font-medium leading-normal pb-2">Email</p>
                                <input
                                    id="email"
                                    name="email"
                                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#223c49] focus:border-none h-14 placeholder:text-[#90b7cb] p-4 text-base font-normal leading-normal"
                                    placeholder="Enter your email" value="" />
                            </label>
                            <label class="flex flex-col min-w-40 flex-1">
                                <p class="text-white text-base font-medium leading-normal pb-2">Password</p>
                                <div class="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#223c49] focus:border-none h-14 placeholder:text-[#90b7cb] p-4 pr-12 text-base font-normal leading-normal"
                                        placeholder="Enter your password" type="password" value="" />
                                    <button id="togglePassword" class="absolute inset-y-0 right-0 flex items-center pr-4 text-[#90b7cb] hover:text-white" type="button">
                                        <span class="material-symbols-outlined">visibility_off</span>
                                    </button>
                                </div>
                            </label>
                            <div class="flex justify-end pt-1">
                                <button id="forgotPasswordBtn" type="button" class="text-primary text-sm font-medium hover:underline">Forgot Password?</button>
                            </div>
                        </div>
                        <div id="errorMessage" class="hidden bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                            <p class="text-red-400 text-base font-normal leading-normal"></p>
                        </div>
                        <div id="successMessage" class="hidden bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                            <p class="text-green-400 text-base font-normal leading-normal"></p>
                        </div>
                        <div class="flex flex-col gap-4">
                            <button
                                id="loginBtn"
                                class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                <span class="truncate">Login</span>
                            </button>
                            <div class="relative flex items-center justify-center">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-[#223c49]"></div>
                                </div>
                                <div class="relative px-2 bg-[#101d23] text-sm text-[#90b7cb]">OR</div>
                            </div>
                            <div class="flex flex-col sm:flex-row gap-4">
                                <button
                                    class="flex-1 flex items-center justify-center gap-2 min-w-[84px] cursor-pointer overflow-hidden rounded-full h-12 px-5 bg-white text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 transition-colors">
                                    <img class="h-5 w-5" alt="Google logo" src="images/google.png" />
                                    <span class="truncate">Login with Google</span>
                                </button>
                                <button
                                    class="flex-1 flex items-center justify-center gap-2 min-w-[84px] cursor-pointer overflow-hidden rounded-full h-12 px-5 bg-[#24292e] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#24292e]/90 transition-colors">
                                    <img class="h-5 w-5 invert" alt="GitHub logo" src="images/github.png" />
                                    <span class="truncate">Login with GitHub</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
}
