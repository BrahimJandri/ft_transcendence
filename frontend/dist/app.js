"use strict";
// ------------------------------
// 1️⃣ Page navigation (SPA)
// ------------------------------
// Tell TypeScript what kind of elements we expect
const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-link');
// Get navbar and all sections
const navbar = document.getElementById("navbar");
// ✅ Define that pageId is always a string
function showPage(pageId) {
    // Hide all sections except the one we want
    sections.forEach((section) => {
        section.classList.toggle('hidden', section.id !== pageId);
    });
    // Highlight the active link in the navbar
    navLinks.forEach((link) => {
        const isActive = link.dataset.page === pageId;
        link.classList.toggle('text-sky-400', isActive);
    });
    // Hide navbar on dashboard, show otherwise
    if (navbar) {
        if (pageId === 'dashboard') {
            navbar.classList.add('hidden');
        }
        else {
            navbar.classList.remove('hidden');
        }
    }
}
// Attach click events to each navbar button
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.dataset.page;
        if (!pageId)
            return;
        const targetPage = pageId === 'login' || pageId === 'signup' ? 'auth' : pageId;
        showPage(targetPage);
        history.pushState({ page: pageId }, '', `#${pageId}`);
    });
});
// Handle browser back/forward navigation
window.addEventListener('popstate', (e) => {
    var _a;
    const page = ((_a = e.state) === null || _a === void 0 ? void 0 : _a.page) || 'home';
    const targetPage = page === 'login' || page === 'signup' ? 'auth' : page;
    showPage(targetPage);
});
// When the site first loads
const initialPage = window.location.hash.replace('#', '') || 'home';
const targetPage = initialPage === 'login' || initialPage === 'signup' ? 'auth' : initialPage;
showPage(targetPage);
// ------------------------------
// 2️⃣ Login / Signup Tab Switching
// ------------------------------
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
function showLoginForm() {
    if (!loginForm || !signupForm || !loginTab || !signupTab)
        return;
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    loginTab.classList.add('bg-blue-600', 'text-white');
    signupTab.classList.remove('bg-blue-600');
    signupTab.classList.add('text-gray-400');
}
function showSignupForm() {
    if (!loginForm || !signupForm || !loginTab || !signupTab)
        return;
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    signupTab.classList.add('bg-blue-600', 'text-white');
    loginTab.classList.remove('bg-blue-600');
    loginTab.classList.add('text-gray-400');
}
loginTab === null || loginTab === void 0 ? void 0 : loginTab.addEventListener('click', showLoginForm);
signupTab === null || signupTab === void 0 ? void 0 : signupTab.addEventListener('click', showSignupForm);
// Initialize login form by default
showLoginForm();
const switchToSignup = document.getElementById('switchToSignup');
switchToSignup === null || switchToSignup === void 0 ? void 0 : switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('auth');
    showSignupForm();
});
const switchToSignupFromHome = document.getElementById('homeSignUpBtn');
switchToSignupFromHome === null || switchToSignupFromHome === void 0 ? void 0 : switchToSignupFromHome.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('auth');
    showSignupForm();
});
const switchToLogInFromHome = document.getElementById('homeLogInBtn');
switchToLogInFromHome === null || switchToLogInFromHome === void 0 ? void 0 : switchToLogInFromHome.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('auth');
    showLoginForm();
});
// ------------------------------
// 3️⃣ Login / Signup Handlers
// ------------------------------
loginForm === null || loginForm === void 0 ? void 0 : loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    try {
        const res = await fetch("http://localhost:4000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (res.ok) {
            localStorage.setItem("user", JSON.stringify(data.user));
            const userGreeting = document.getElementById("userGreeting");
            if (userGreeting && data.user.username) {
                userGreeting.textContent = `Welcome to your Dashboard, ${data.user.username}! 👋`;
            }
            showPage("dashboard");
            history.pushState({ page: "dashboard" }, "", "#dashboard");
        }
        else {
            alert(data.error);
        }
    }
    catch (err) {
        alert("Error connecting to server.");
    }
});
signupForm === null || signupForm === void 0 ? void 0 : signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    try {
        const res = await fetch("http://localhost:4000/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
        });
        const data = await res.json();
        if (res.ok) {
            alert("Signup successful! Please log in.");
            showLoginForm();
        }
        else {
            alert(data.error);
        }
    }
    catch (err) {
        alert("Error connecting to server.");
    }
});
// ------------------------------
// 4️⃣ Logout + Session Persistence
// ------------------------------
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn === null || logoutBtn === void 0 ? void 0 : logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    showPage("home");
    history.pushState({ page: "home" }, "", "#home");
});
// If user already logged in → auto redirect to dashboard
const savedUser = localStorage.getItem("user");
if (savedUser) {
    const user = JSON.parse(savedUser);
    const userGreeting = document.getElementById("userGreeting");
    if (userGreeting && user.username) {
        userGreeting.textContent = `Hello, ${user.username}! 👋`;
    }
    showPage("dashboard");
}
//# sourceMappingURL=app.js.map