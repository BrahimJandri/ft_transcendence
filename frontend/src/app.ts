async function loadPage(path: string) {
  const app = document.getElementById("app-content");
  if (!app) return;

  if (!path) path = "website/login"; // default page

  try {
    const response = await fetch(`./${path}.html`);
    if (!response.ok) throw new Error("Page not found");

    const html = await response.text();
    app.innerHTML = html;
  } catch (err) {
    app.innerHTML = `<div class="text-center text-red-600 mt-10">
        <h2 class="text-3xl font-bold">404 - Page Not Found</h2>
        <p class="mt-4">Could not load page: <strong>${path}</strong></p>
      </div>`;
  }
}

function setupRouter() {
  window.addEventListener("hashchange", () => {
    const path = location.hash.slice(2);
    loadPage(path);
  });

  const initialPath = location.hash.slice(2) || "website/login";
  loadPage(initialPath);
}

document.addEventListener("DOMContentLoaded", setupRouter);
