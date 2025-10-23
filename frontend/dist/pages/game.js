/**
 * Game Page - Converted from game.html
 * Active game interface with canvas and chat
 */
export function GamePage() {
    return `
    <title>Ping Pong Game - In-Game</title>
    <div class="relative flex h-screen w-full flex-col items-center justify-center p-4">
        <!-- Game Canvas Background -->
        <div class="absolute inset-0 bg-black">
            <div class="relative h-full w-full">
                <!-- Center Line -->
                <div class="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2">
                    <div class="h-full w-full"
                        style="background-image: repeating-linear-gradient(to bottom, #444, #444 10px, transparent 10px, transparent 20px);">
                    </div>
                </div>
                <!-- Center Circle -->
                <div
                    class="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-dashed border-gray-600">
                </div>
                <!-- Left Paddle -->
                <div class="absolute left-4 top-1/2 h-28 w-4 -translate-y-1/2 rounded bg-[#00f0f0]" 
                     style="box-shadow: 0 0 5px #00f0f0, 0 0 10px #00f0f0, 0 0 20px #00f0f0, 0 0 40px #00f0f0;">
                </div>
                <!-- Right Paddle -->
                <div class="absolute right-4 top-1/2 h-28 w-4 -translate-y-1/2 rounded bg-[#f000b8]"
                     style="box-shadow: 0 0 5px #f000b8, 0 0 10px #f000b8, 0 0 20px #f000b8, 0 0 40px #f000b8;">
                </div>
                <!-- Ball -->
                <div
                    class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white animate-pulse"
                    style="box-shadow: 0 0 5px #0da6f2, 0 0 10px #0da6f2, 0 0 15px #0da6f2;">
                </div>
            </div>
        </div>
        
        <!-- Game UI Overlay -->
        <div class="relative z-10 flex w-full flex-col h-full">
            <!-- Header with Players and Score -->
            <header class="flex items-center justify-between p-4 md:p-6 lg:p-8 w-full">
                <div class="flex items-center gap-4">
                    <img alt="PlayerOne avatar"
                        class="h-12 w-12 rounded-full object-cover border-2 border-[#00f0f0]"
                        style="box-shadow: 0 0 5px #00f0f0, 0 0 10px #00f0f0, 0 0 20px #00f0f0, 0 0 40px #00f0f0;"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                    <div>
                        <p class="font-bold text-xl text-[#00f0f0]" style="text-shadow: 0 0 5px #0da6f2, 0 0 10px #0da6f2;">PlayerOne</p>
                        <p class="text-3xl font-bold" style="text-shadow: 0 0 5px #0da6f2, 0 0 10px #0da6f2;" id="player1Score">0</p>
                    </div>
                </div>
                <div class="text-center">
                    <p class="text-lg font-semibold uppercase tracking-widest text-gray-400">Match Time</p>
                    <p class="text-5xl font-bold" style="text-shadow: 0 0 5px #0da6f2, 0 0 10px #0da6f2; animation: flicker 1.5s infinite;" id="matchTime">02:45</p>
                </div>
                <div class="flex items-center gap-4 text-right">
                    <div class="text-right">
                        <p class="font-bold text-xl text-[#f000b8]" style="text-shadow: 0 0 5px #0da6f2, 0 0 10px #0da6f2;">PlayerTwo</p>
                        <p class="text-3xl font-bold" style="text-shadow: 0 0 5px #0da6f2, 0 0 10px #0da6f2;" id="player2Score">0</p>
                    </div>
                    <img alt="PlayerTwo avatar"
                        class="h-12 w-12 rounded-full object-cover border-2 border-[#f000b8]"
                        style="box-shadow: 0 0 5px #f000b8, 0 0 10px #f000b8, 0 0 20px #f000b8, 0 0 40px #f000b8;"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfwUgHOcVD_UVPKC1A2Qu1MQjDAnSM1Qaz39jte6KJU7petQRxXoKzMBBHAuhgznPYLxV52V6cWVQaQ_2eujrNHHyc_kl8CU72Uk10lCiELWQf9XuHCmPzp-G5hWkooMTGPuM0BrVSnS8on8asqsGXZxmGU8eybI5ZuIIPFndTD_wuRptjz8Yg_FfwyCDtDRjOuFk1mUFGsUsdqTKPxP0rB9kdyL7x3K5h4EdMcUFvdPbMWJ7mt0-gAmHLrf0ZQ4SBAjmCqc8iC0g" />
                </div>
            </header>
            
            <!-- Chat Panel (Toggle) -->
            <div class="absolute bottom-20 left-4 w-80 h-96 bg-card-dark/80 backdrop-blur-md rounded-lg shadow-lg flex flex-col hidden" id="chatPanel">
                <div class="flex items-center justify-between p-3 border-b border-white/10">
                    <h3 class="font-bold text-lg text-white">Game Chat</h3>
                    <button id="closeChatBtn" class="text-white/70 hover:text-white">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div class="flex-1 p-3 space-y-4 overflow-y-auto" id="chatMessages">
                    <div class="flex items-start gap-2.5">
                        <img alt="PlayerOne avatar" class="w-8 h-8 rounded-full border-2 border-[#00f0f0]"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                        <div class="flex flex-col gap-1 w-full max-w-[320px]">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                <span class="text-sm font-semibold text-[#00f0f0]">PlayerOne</span>
                                <span class="text-xs font-normal text-gray-400">11:46</span>
                            </div>
                            <div class="leading-1.5 p-3 bg-black/30 rounded-r-xl rounded-es-xl">
                                <p class="text-sm font-normal text-white">Good luck! Have fun!</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-start gap-2.5 justify-end">
                        <div class="flex flex-col gap-1 w-full max-w-[320px]">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse justify-end">
                                <span class="text-xs font-normal text-gray-400">11:47</span>
                                <span class="text-sm font-semibold text-[#f000b8]">PlayerTwo</span>
                            </div>
                            <div class="leading-1.5 p-3 bg-primary/20 rounded-l-xl rounded-es-xl">
                                <p class="text-sm font-normal text-white">You too! Let's have a great game.</p>
                            </div>
                        </div>
                        <img alt="PlayerTwo avatar" class="w-8 h-8 rounded-full border-2 border-[#f000b8]"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfwUgHOcVD_UVPKC1A2Qu1MQjDAnSM1Qaz39jte6KJU7petQRxXoKzMBBHAuhgznPYLxV52V6cWVQaQ_2eujrNHHyc_kl8CU72Uk10lCiELWQf9XuHCmPzp-G5hWkooMTGPuM0BrVSnS8on8asqsGXZxmGU8eybI5ZuIIPFndTD_wuRptjz8Yg_FfwyCDtDRjOuFk1mUFGsUsdqTKPxP0rB9kdyL7x3K5h4EdMcUFvdPbMWJ7mt0-gAmHLrf0ZQ4SBAjmCqc8iC0g" />
                    </div>
                    <div class="flex items-start gap-2.5">
                        <img alt="PlayerOne avatar" class="w-8 h-8 rounded-full border-2 border-[#00f0f0]"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                        <div class="flex flex-col gap-1 w-full max-w-[320px]">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                <span class="text-sm font-semibold text-[#00f0f0]">PlayerOne</span>
                                <span class="text-xs font-normal text-gray-400">11:48</span>
                            </div>
                            <div class="leading-1.5 p-3 bg-black/30 rounded-r-xl rounded-es-xl">
                                <p class="text-sm font-normal text-white">Nice shot!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-3 border-t border-white/10">
                    <form class="flex items-center" id="chatForm">
                        <input
                            class="flex-1 bg-black/30 border-none text-white placeholder-gray-400 rounded-l-md focus:ring-0 focus:border-primary"
                            placeholder="Type a message..." type="text" id="chatInput" />
                        <button class="bg-primary px-4 py-2 rounded-r-md text-white hover:bg-primary/80" type="submit">
                            <span class="material-symbols-outlined">send</span>
                        </button>
                    </form>
                </div>
            </div>
            
            <!-- Footer Controls -->
            <footer class="mt-auto flex items-center justify-between p-4 md:p-6 w-full">
                <div class="w-64">
                    <button id="toggleChatBtn"
                        class="flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-white/80 backdrop-blur-sm hover:bg-white/20">
                        <span class="material-symbols-outlined">chat_bubble</span>
                        <span>Game Chat</span>
                    </button>
                </div>
                <div class="flex items-center gap-4">
                    <button id="pauseBtn"
                        class="flex items-center gap-2 rounded-full bg-primary/80 px-6 py-3 text-lg font-bold text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-primary"
                        style="box-shadow: 0 0 5px #0da6f2, 0 0 10px #0da6f2, 0 0 15px #0da6f2;">
                        <span class="material-symbols-outlined">pause_circle</span>
                        <span>Pause</span>
                    </button>
                    <button id="quitBtn"
                        class="flex items-center gap-2 rounded-full bg-red-500/80 px-6 py-3 text-lg font-bold text-white shadow-lg shadow-red-500/30 backdrop-blur-sm transition-transform hover:scale-105 hover:bg-red-500">
                        <span class="material-symbols-outlined">flag</span>
                        <span>Quit</span>
                    </button>
                </div>
                <div class="w-64 flex justify-end">
                    <button id="rematchBtn"
                        class="flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-white/80 backdrop-blur-sm hover:bg-white/20">
                        <span class="material-symbols-outlined">replay</span>
                        <span>Rematch</span>
                    </button>
                </div>
            </footer>
        </div>
    </div>
    <style>
        @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
    </style>
  `;
}
