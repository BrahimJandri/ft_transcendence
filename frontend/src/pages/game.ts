/**
 * Game Page - Converted from game.html
 * Active game interface with canvas and chat
 */

export function GamePage(): string {
  return `
    <title>Ping Pong Game - In-Game</title>
    <style>
        @keyframes neon-pulse {
            0%, 100% {
                box-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor;
            }
            50% {
                box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor;
            }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        @keyframes slide-in {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .neon-text {
            text-shadow: 
                0 0 7px #fff,
                0 0 10px #fff,
                0 0 21px #fff,
                0 0 42px #0fa,
                0 0 82px #0fa,
                0 0 92px #0fa,
                0 0 102px #0fa,
                0 0 151px #0fa;
        }
        
        .retro-grid {
            background-image: 
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: grid-move 20s linear infinite;
        }
        
        @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
        }
        
        .game-container {
            background: linear-gradient(135deg, #1a0033 0%, #0a0015 50%, #001a33 100%);
        }
        
        .score-glow {
            animation: neon-pulse 2s ease-in-out infinite;
        }
    </style>
    <div class="game-container relative flex h-screen w-full flex-col items-center justify-center p-4 overflow-hidden">
        <!-- Animated Background -->
        <div class="retro-grid absolute inset-0 opacity-20"></div>
        
        <!-- Floating Particles -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-50" style="top: 10%; left: 20%; animation: float 3s ease-in-out infinite;"></div>
            <div class="absolute w-3 h-3 bg-purple-400 rounded-full opacity-50" style="top: 30%; right: 15%; animation: float 4s ease-in-out infinite 1s;"></div>
            <div class="absolute w-2 h-2 bg-pink-400 rounded-full opacity-50" style="bottom: 20%; left: 30%; animation: float 3.5s ease-in-out infinite 0.5s;"></div>
            <div class="absolute w-2 h-2 bg-blue-400 rounded-full opacity-50" style="bottom: 40%; right: 25%; animation: float 4.5s ease-in-out infinite 2s;"></div>
        </div>
        
        <!-- Game Canvas with Glow Effect -->
        <div class="relative z-10 mb-6" style="animation: slide-in 0.5s ease-out;">
            <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur opacity-75"></div>
            <canvas id="gameCanvas" width="800" height="600" 
                class="relative border-4 border-cyan-500/50 rounded-lg shadow-2xl bg-black"
                style="box-shadow: 0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(168, 85, 247, 0.3);"></canvas>
        </div>
        
        <!-- Game UI Overlay -->
        <div class="absolute top-0 left-0 right-0 z-20">
            <!-- Header with Players and Score -->
            <header class="flex items-center justify-between p-4 md:p-6 lg:p-8 w-full bg-gradient-to-b from-black/90 via-black/50 to-transparent">
                <div class="flex items-center gap-4" style="animation: slide-in 0.6s ease-out;">
                    <div class="relative">
                        <div class="absolute inset-0 bg-cyan-500 rounded-full blur-lg opacity-50"></div>
                        <img alt="PlayerOne avatar"
                            class="relative h-16 w-16 rounded-full object-cover border-3 border-cyan-400"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU" />
                    </div>
                    <div class="flex flex-col items-start">
                        <p class="font-black text-xl text-cyan-400 tracking-wider uppercase" style="text-shadow: 0 0 10px #22d3ee;">Player 1</p>
                        <div class="flex items-center gap-2">
                            <div class="px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-lg score-glow">
                                <p class="text-4xl font-black text-white" id="player1Score">0</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center" style="animation: slide-in 0.7s ease-out;">
                    <div class="bg-black/60 backdrop-blur-md rounded-2xl px-8 py-4 border-2 border-purple-500/50">
                        <p class="text-sm font-bold uppercase tracking-widest text-purple-300 mb-2">First to Win</p>
                        <p class="text-6xl font-black neon-text mb-2">10</p>
                        <div class="flex items-center justify-center gap-4 text-sm font-semibold text-gray-300">
                            <div class="flex items-center gap-2 bg-cyan-500/20 px-3 py-1 rounded-full">
                                <span class="text-cyan-400">◄</span>
                                <span>W / S</span>
                            </div>
                            <span class="text-purple-400">VS</span>
                            <div class="flex items-center gap-2 bg-pink-500/20 px-3 py-1 rounded-full">
                                <span>↑ / ↓</span>
                                <span class="text-pink-400">►</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="flex items-center gap-4 text-right" style="animation: slide-in 0.8s ease-out;">
                    <div class="flex flex-col items-end">
                        <p class="font-black text-xl text-pink-400 tracking-wider uppercase" style="text-shadow: 0 0 10px #ec4899;">Player 2</p>
                        <div class="flex items-center gap-2">
                            <div class="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg score-glow">
                                <p class="text-4xl font-black text-white" id="player2Score">0</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="absolute inset-0 bg-pink-500 rounded-full blur-lg opacity-50"></div>
                        <img alt="PlayerTwo avatar"
                            class="relative h-16 w-16 rounded-full object-cover border-3 border-pink-400"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfwUgHOcVD_UVPKC1A2Qu1MQjDAnSM1Qaz39jte6KJU7petQRxXoKzMBBHAuhgznPYLxV52V6cWVQaQ_2eujrNHHyc_kl8CU72Uk10lCiELWQf9XuHCmPzp-G5hWkooMTGPuM0BrVSnS8on8asqsGXZxmGU8eybI5ZuIIPFndTD_wuRptjz8Yg_FfwyCDtDRjOuFk1mUFGsUsdqTKPxP0rB9kdyL7x3K5h4EdMcUFvdPbMWJ7mt0-gAmHLrf0ZQ4SBAjmCqc8iC0g" />
                    </div>
                </div>
            </header>
        </div>
            
            <!-- Footer Controls -->
            <footer class="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-6 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
                <button id="startBtn"
                    class="group relative overflow-hidden flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 text-xl font-black text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:from-green-400 hover:to-emerald-500 shadow-lg"
                    style="box-shadow: 0 0 20px rgba(34, 197, 94, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3);">
                    <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span class="material-symbols-outlined text-3xl relative z-10">play_arrow</span>
                    <span class="relative z-10">START</span>
                </button>
                
                <button id="pauseBtn" disabled
                    class="group relative overflow-hidden flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 text-xl font-black text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:from-blue-400 hover:to-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
                    style="box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3);">
                    <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span class="material-symbols-outlined text-3xl relative z-10">pause_circle</span>
                    <span class="relative z-10">PAUSE</span>
                </button>
                
                <button id="resetBtn"
                    class="group relative overflow-hidden flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 px-8 py-4 text-xl font-black text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:from-yellow-400 hover:to-orange-500 shadow-lg"
                    style="box-shadow: 0 0 20px rgba(234, 179, 8, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3);">
                    <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span class="material-symbols-outlined text-3xl relative z-10">replay</span>
                    <span class="relative z-10">RESET</span>
                </button>
                
                <a href="/dashboard" data-link
                    class="group relative overflow-hidden flex items-center gap-3 rounded-full bg-gradient-to-r from-red-500 to-rose-600 px-8 py-4 text-xl font-black text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:from-red-400 hover:to-rose-500"
                    style="box-shadow: 0 0 20px rgba(239, 68, 68, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3);">
                    <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span class="material-symbols-outlined text-3xl relative z-10">home</span>
                    <span class="relative z-10">EXIT</span>
                </a>
            </footer>
        </div>
    </div>
  `;
}
