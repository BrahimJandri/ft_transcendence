/**
 * Chat Logic - Handle message sending and display
 */

import { AuthService } from '../services/authService.js';

// In-memory message storage
interface Message {
  id: number;
  sender: 'user' | 'friend';
  text: string;
  time: string;
  avatar: string;
}

interface Chat {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
  lastMessage: string;
  time: string;
  messages: Message[];
}

let messageIdCounter = 1;

// Get current user avatar dynamically
function getCurrentUserAvatar(): string {
  const user = AuthService.getUser();
  return user?.avatar || 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU';
}

// Multiple chat conversations
const chats: Chat[] = [
  {
    id: 'gamerx',
    name: 'GamerX',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk',
    status: 'online',
    lastMessage: 'Awesome game! Wanna play again?',
    time: '10:30',
    messages: [
      {
        id: 1,
        sender: 'friend',
        text: 'Awesome game! Wanna play again?',
        time: '10:30 AM',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk'
      },
      {
        id: 2,
        sender: 'user',
        text: "Totally! I'm free now. Let's go!",
        time: '10:31 AM',
        avatar: getCurrentUserAvatar()
      },
      {
        id: 3,
        sender: 'friend',
        text: 'Joining now!',
        time: '10:32 AM',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk'
      }
    ]
  },
  {
    id: 'general',
    name: '#general-chat',
    avatar: '',
    status: 'online',
    lastMessage: "PongMaster: Who's up for a tournament?",
    time: '10:25',
    messages: [
      {
        id: 1,
        sender: 'friend',
        text: "Hey everyone! Who's up for a tournament this weekend?",
        time: '10:20 AM',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU'
      },
      {
        id: 2,
        sender: 'friend',
        text: "I'm in! Count me in! 🎮",
        time: '10:22 AM',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4jmMW0UDKMKbzEc67FZzRSbn-Fb8keFImtITkZyVGqjNZPGHyT5DW-0lC5q_SnSFA1KmnkpEp344LSDsGSkhS3q9ju17RpXHrTSHut0HFd_BseBMbWH3jTHSxR-YhN5InHURoKD1BfqGJHjeOCuNtJnx5zqqNkwLIqrSsZJwr0R-Y-5IrpKR8vFlZCTDQlS3-1hxyZnZ314P0QK4E8gcDoFmXgGjHoo-QloH1kGOl1lBZnWGWZRoJ7CTkLL3Hxc5lY6ih5agodLk'
      },
      {
        id: 3,
        sender: 'friend',
        text: 'Sounds fun! What time?',
        time: '10:25 AM',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU'
      }
    ]
  },
  {
    id: 'pongmaster',
    name: 'PongMaster',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU',
    status: 'away',
    lastMessage: "Let's do it!",
    time: 'Yesterday',
    messages: [
      {
        id: 1,
        sender: 'friend',
        text: 'Hey! Want to practice some moves?',
        time: 'Yesterday',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-N19gLklmEeuPwc97l42RS9N3PjTe8uVnT_HAhZyFttl1ztdnkc_pxuLkGtZuH-kR1DZrLWrG1ltixhC0hasi4nEjc-ZQFEJh6QuUYwWH2nxQtocaFCWI3t9OXTDq79Q4gbSISy1ZjGE5gCLPnxU8mnSM85KU9QitPgyNKVDJcUFwP_4jQ0R1IVzXq3kKrN2UJ2lCgnGjRIwJ623jdNx_W10ykwt6kZZnqzvL_YZhtofeV6DpW4asuEUb5aSe2ErIsPGJCACSCiU'
      },
      {
        id: 2,
        sender: 'user',
        text: "Let's do it!",
        time: 'Yesterday',
        avatar: getCurrentUserAvatar()
      }
    ]
  }
];

let currentChatId = 'gamerx';

/**
 * Get current time in HH:MM AM/PM format
 */
function getCurrentTime(): string {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutesStr} ${ampm}`;
}

/**
 * Render a message in the chat
 */
function renderMessage(message: Message): string {
  if (message.sender === 'user') {
    return `
      <div class="flex items-start gap-4 justify-end">
        <div class="bg-primary/90 text-white p-4 rounded-lg rounded-tr-none max-w-lg">
          <p class="text-sm">${message.text}</p>
          <p class="text-xs text-blue-200 text-right mt-1">${message.time}</p>
        </div>
        <img alt="User avatar" class="h-10 w-10 rounded-full object-cover" src="${message.avatar}" />
      </div>
    `;
  } else {
    return `
      <div class="flex items-start gap-4">
        <img alt="Friend avatar" class="h-10 w-10 rounded-full object-cover" src="${message.avatar}" />
        <div class="bg-white dark:bg-card-dark p-4 rounded-lg rounded-tl-none max-w-lg">
          <p class="text-sm">${message.text}</p>
          <p class="text-xs text-gray-400 dark:text-gray-500 text-right mt-1">${message.time}</p>
        </div>
      </div>
    `;
  }
}

/**
 * Display all messages in the chat container
 */
function displayMessages(): void {
  const messageContainer = document.getElementById('messageContainer');
  if (!messageContainer) return;

  const currentChat = chats.find(chat => chat.id === currentChatId);
  if (!currentChat) return;

  const messagesHTML = currentChat.messages.map(renderMessage).join('');
  messageContainer.innerHTML = messagesHTML;

  // Scroll to bottom
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

/**
 * Update chat header with current chat info
 */
function updateChatHeader(): void {
  const currentChat = chats.find(chat => chat.id === currentChatId);
  if (!currentChat) return;

  const chatHeaderName = document.querySelector('.chat-header-name');
  const chatHeaderStatus = document.querySelector('.chat-header-status');
  const chatHeaderAvatar = document.querySelector('.chat-header-avatar') as HTMLImageElement;

  if (chatHeaderName) chatHeaderName.textContent = currentChat.name;
  
  if (chatHeaderStatus) {
    const statusText = currentChat.status.charAt(0).toUpperCase() + currentChat.status.slice(1);
    chatHeaderStatus.textContent = statusText;
    chatHeaderStatus.className = `chat-header-status text-sm ${
      currentChat.status === 'online' ? 'text-green-500' : 
      currentChat.status === 'away' ? 'text-yellow-500' : 
      'text-gray-500'
    }`;
  }

  if (chatHeaderAvatar && currentChat.avatar) {
    chatHeaderAvatar.src = currentChat.avatar;
  }
}

/**
 * Switch to a different chat
 */
function switchChat(chatId: string): void {
  currentChatId = chatId;
  
  // Update active state in chat list
  const chatItems = document.querySelectorAll('.chat-item');
  chatItems.forEach((item, index) => {
    if (chats[index]?.id === chatId) {
      item.classList.add('bg-primary/10', 'dark:bg-primary/20');
      item.classList.remove('hover:bg-gray-100', 'dark:hover:bg-[#2c404a]');
    } else {
      item.classList.remove('bg-primary/10', 'dark:bg-primary/20');
      item.classList.add('hover:bg-gray-100', 'dark:hover:bg-[#2c404a]');
    }
  });

  updateChatHeader();
  displayMessages();
}

/**
 * Send a message
 */
function sendMessage(text: string): void {
  if (!text.trim()) return;

  const currentChat = chats.find(chat => chat.id === currentChatId);
  if (!currentChat) return;

  // Add user message
  const userMessage: Message = {
    id: messageIdCounter++,
    sender: 'user',
    text: text.trim(),
    time: getCurrentTime(),
    avatar: getCurrentUserAvatar()
  };
  currentChat.messages.push(userMessage);
  currentChat.lastMessage = text.trim();
  currentChat.time = getCurrentTime();
  displayMessages();

  // Simulate friend reply after 1-2 seconds (only for direct chats, not channels)
  if (!currentChat.name.startsWith('#')) {
    setTimeout(() => {
      const replies = [
        "Haha, Nadi Nadi 😄",
        "Ah Ah, Frassi!",
        "Mzyana!",
        "SAfi Mchat!",
        "Blan W9tma Bghiti Nta!",
        "Kayna!",
        "Ana M3ak!",
        "Ohoya Oho!",
        "Mchina! 🎮",
        "Safi Sir 3nd Inak!"
      ];
      
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      
      const friendMessage: Message = {
        id: messageIdCounter++,
        sender: 'friend',
        text: randomReply,
        time: getCurrentTime(),
        avatar: currentChat.avatar
      };
      currentChat.messages.push(friendMessage);
      currentChat.lastMessage = randomReply;
      currentChat.time = getCurrentTime();
      displayMessages();
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  }
}

/**
 * Initialize chat functionality
 */
export function initChatPage(): void {
  const messageForm = document.getElementById('messageForm') as HTMLFormElement;
  const messageInput = document.getElementById('messageInput') as HTMLInputElement;

  if (!messageForm || !messageInput) return;

  // Handle form submission
  messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = messageInput.value;
    
    if (text.trim()) {
      sendMessage(text);
      messageInput.value = ''; // Clear input
    }
  });

  // Add click handlers to chat items
  const chatItems = document.querySelectorAll('.chat-item');
  chatItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (chats[index]) {
        switchChat(chats[index].id);
      }
    });
  });

  // Listen for avatar updates and refresh messages
  window.addEventListener('userAvatarUpdated', ((e: CustomEvent) => {
    const { avatarUrl } = e.detail;
    
    // Update all user messages in all chats with new avatar
    chats.forEach(chat => {
      chat.messages.forEach(message => {
        if (message.sender === 'user') {
          message.avatar = avatarUrl;
        }
      });
    });
    
    // Refresh the displayed messages
    displayMessages();
  }) as EventListener);

  // Display initial chat
  updateChatHeader();
  displayMessages();
}
