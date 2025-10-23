/**
 * Home Page - Landing Page
 */
export function HomePage() {
    return `
    <title>Ping Pong Game</title>
    <style type="text/tailwindcss">
      @keyframes grid-animation {
        0% {
          transform: translate(0, 0);
        }
        25% {
          transform: translate(40px, -40px);
        }
        50% {
          transform: translate(0, 0);
        }
        75% {
          transform: translate(-40px, 40px);
        }
        100% {
          transform: translate(0, 0);
        }
      }
      .animated-grid {
        background-image:
          linear-gradient(to right, rgba(34, 60, 73, 0.5) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(34, 60, 73, 0.5) 1px, transparent 1px);
        background-size: 80px 80px;
        animation: grid-animation 10s linear infinite;
      }
    </style>
    <div class="relative flex h-auto min-h-screen w-full flex-col bg-background-dark group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <main class="flex-1">
          <div id="app-content"
            class="relative flex min-h-screen flex-col items-center justify-center bg-background-dark">
            <div class="animated-grid absolute inset-0 z-0"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark z-0"></div>
            <div class="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20">
              <div class="flex items-center gap-4 mb-6">
                <div class="size-16 text-primary">
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_6_319)">
                      <path
                        d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z">
                      </path>
                    </g>
                    <defs>
                      <clipPath id="clip0_6_319">
                        <rect fill="white" height="48" width="48"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h1 class="text-white text-5xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl">Ping Pong
                  Game</h1>
              </div>
              <p class="text-white/80 text-xl font-medium tracking-wide sm:text-2xl md:text-3xl mb-12">Play. Compete.
                Transcend.</p>
              <div class="flex flex-col sm:flex-row items-center gap-4">
                <a href="/login" data-link
                   class="flex w-full sm:w-auto min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                  <span class="truncate">Play Now</span>
                </a>
                <div class="flex gap-4">
                  <a href="/login" data-link
                     class="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-white/10 text-white text-base font-medium leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors">
                    <span class="truncate">Sign In</span>
                  </a>
                  <a href="/sign" data-link
                     class="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-white/10 text-white text-base font-medium leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors">
                    <span class="truncate">Sign Up</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="border-t border-solid border-[#223c49] py-6 px-4 sm:px-6 md:px-10">
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div class="text-center sm:text-left">
              <p class="text-sm text-white/60">© 2024 Transcendence. All rights reserved.</p>
              <p class="text-sm text-white/60">Version 1.0.0</p>
            </div>
            <a class="flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
              href="https://github.com/your-repo/transcendence" rel="noopener noreferrer" target="_blank">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                  fill-rule="evenodd"></path>
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  `;
}
