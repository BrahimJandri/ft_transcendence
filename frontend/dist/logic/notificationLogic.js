/**
 * Notification Logic - Handle notification dropdown interactions
 */
let notificationInitialized = false;
export function initNotifications() {
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationDropdown = document.getElementById('notificationDropdown');
    const markAllRead = document.getElementById('markAllRead');
    const notificationBadge = document.getElementById('notificationBadge');
    if (!notificationBtn || !notificationDropdown) {
        console.log('Notification elements not found');
        return;
    }
    console.log('Initializing notifications...');
    // Remove old event listeners by cloning the button
    const newNotificationBtn = notificationBtn.cloneNode(true);
    notificationBtn.parentNode?.replaceChild(newNotificationBtn, notificationBtn);
    // Toggle dropdown on button click
    newNotificationBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = document.getElementById('notificationDropdown');
        if (dropdown) {
            dropdown.classList.toggle('hidden');
            console.log('Notification dropdown toggled');
        }
    });
    // Close dropdown when clicking outside (remove old listener first)
    const closeDropdown = (e) => {
        const target = e.target;
        const btn = document.getElementById('notificationBtn');
        const dropdown = document.getElementById('notificationDropdown');
        if (btn && dropdown && !btn.contains(target) && !dropdown.contains(target)) {
            dropdown.classList.add('hidden');
        }
    };
    // Remove previous listener if exists
    document.removeEventListener('click', closeDropdown);
    document.addEventListener('click', closeDropdown);
    // Handle individual notification close buttons
    const closeButtons = document.querySelectorAll('.notification-close');
    closeButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const notificationItem = btn.closest('a');
            if (notificationItem) {
                notificationItem.remove();
                updateNotificationBadge();
            }
        });
    });
    // Mark all as read
    if (markAllRead) {
        const newMarkAllRead = markAllRead.cloneNode(true);
        markAllRead.parentNode?.replaceChild(newMarkAllRead, markAllRead);
        newMarkAllRead.addEventListener('click', () => {
            const notificationList = document.getElementById('notificationList');
            const dropdown = document.getElementById('notificationDropdown');
            const badge = document.getElementById('notificationBadge');
            if (notificationList) {
                notificationList.innerHTML = `
          <div class="p-8 text-center text-gray-500 dark:text-gray-400">
            <span class="material-symbols-outlined text-4xl mb-2">notifications_off</span>
            <p>No new notifications</p>
          </div>
        `;
                if (badge) {
                    badge.classList.add('hidden');
                }
            }
            if (dropdown) {
                dropdown.classList.add('hidden');
            }
        });
    }
    // Update notification badge count
    function updateNotificationBadge() {
        const notificationList = document.getElementById('notificationList');
        const badge = document.getElementById('notificationBadge');
        if (notificationList) {
            const notifications = notificationList.querySelectorAll('a');
            if (notifications.length === 0 && badge) {
                badge.classList.add('hidden');
            }
        }
    }
    notificationInitialized = true;
    console.log('Notifications initialized successfully');
}
