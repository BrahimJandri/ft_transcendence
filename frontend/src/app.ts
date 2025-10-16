// ------------------------------
// 1️⃣ Page navigation (SPA)
// ------------------------------

// Tell TypeScript what kind of elements we expect
const sections = document.querySelectorAll<HTMLElement>('.page-section');
const navLinks = document.querySelectorAll<HTMLButtonElement>('.nav-link');

// ✅ Define that pageId is always a string
function showPage(pageId: string): void {
  // Hide all sections except the one we want
  sections.forEach((section) => {
    section.classList.toggle('hidden', section.id !== pageId);
  });

  // Highlight the active link in the navbar
  navLinks.forEach((link) => {
    const isActive = link.dataset.page === pageId;
    link.classList.toggle('text-sky-400', isActive);
  });
}

// Attach click events to each navbar button
navLinks.forEach((link) => {
  link.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    const pageId = link.dataset.page;
    if (!pageId) return;

    const targetPage = pageId === 'login' || pageId === 'signup' ? 'auth' : pageId;
    showPage(targetPage);
    history.pushState({ page: pageId }, '', `#${pageId}`);
  });
});

// Handle browser back/forward navigation
window.addEventListener('popstate', (e: PopStateEvent) => {
  const page = (e.state as { page?: string })?.page || 'home';
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

const loginTab = document.getElementById('loginTab') as HTMLButtonElement | null;
const signupTab = document.getElementById('signupTab') as HTMLButtonElement | null;
const loginForm = document.getElementById('loginForm') as HTMLFormElement | null;
const signupForm = document.getElementById('signupForm') as HTMLFormElement | null;

function showLoginForm(): void {
  if (!loginForm || !signupForm || !loginTab || !signupTab) return;

  loginForm.classList.remove('hidden');
  signupForm.classList.add('hidden');

  loginTab.classList.add('bg-blue-600', 'text-white');
  signupTab.classList.remove('bg-blue-600');
  signupTab.classList.add('text-gray-400');
}

function showSignupForm(): void {
  if (!loginForm || !signupForm || !loginTab || !signupTab) return;

  signupForm.classList.remove('hidden');
  loginForm.classList.add('hidden');

  signupTab.classList.add('bg-blue-600', 'text-white');
  loginTab.classList.remove('bg-blue-600');
  loginTab.classList.add('text-gray-400');
}

loginTab?.addEventListener('click', showLoginForm);
signupTab?.addEventListener('click', showSignupForm);

// Initialize login form by default
showLoginForm();

const switchToSignup = document.getElementById('switchToSignup');
switchToSignup?.addEventListener('click', (e: MouseEvent) => {
  e.preventDefault();
  showPage('auth');
  showSignupForm();
});

const switchToSignupFromHome = document.getElementById('homeSignUpBtn');
switchToSignupFromHome?.addEventListener('click', (e: MouseEvent) => {
  e.preventDefault();
  showPage('auth');
  showSignupForm();
});

const switchToLogInFromHome = document.getElementById('homeLogInBtn');
switchToLogInFromHome?.addEventListener('click', (e: MouseEvent) => {
  e.preventDefault();
  showPage('auth');
  showLoginForm();
});


// ------------------------------
// 3️⃣ Login / Signup Handlers
// ------------------------------

loginForm?.addEventListener("submit", async (e: SubmitEvent) => {
  e.preventDefault();

  const email = (document.getElementById("loginEmail") as HTMLInputElement).value;
  const password = (document.getElementById("loginPassword") as HTMLInputElement).value;

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
        userGreeting.textContent = `Hello, ${data.user.username}! 👋`;
      }

      showPage("dashboard");
      history.pushState({ page: "dashboard" }, "", "#dashboard");
    } else {
      alert(data.error);
    }
  } catch (err) {
    alert("Error connecting to server.");
  }
});

signupForm?.addEventListener("submit", async (e: SubmitEvent) => {
  e.preventDefault();

  const username = (document.getElementById("signupUsername") as HTMLInputElement).value;
  const email = (document.getElementById("signupEmail") as HTMLInputElement).value;
  const password = (document.getElementById("signupPassword") as HTMLInputElement).value;

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
    } else {
      alert(data.error);
    }
  } catch (err) {
    alert("Error connecting to server.");
  }
});


// ------------------------------
// 4️⃣ Logout + Session Persistence
// ------------------------------

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn?.addEventListener("click", () => {
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
