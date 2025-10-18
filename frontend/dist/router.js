var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let DEFAULT_APP_HTML = null;
let DEFAULT_TITLE = document.title;
export function Router() {
    const app = document.getElementById("app-content");
    if (app && DEFAULT_APP_HTML === null) {
        DEFAULT_APP_HTML = app.innerHTML;
        DEFAULT_TITLE = document.title;
    }
    // Handle hash changes
    window.addEventListener("hashchange", () => {
        const raw = location.hash.startsWith("#/") ? location.hash.slice(2) : ""; // Remove "#/"
        const path = raw.trim();
        loadPage(path);
    });
    // Initial load
    const initialRaw = location.hash.startsWith("#/") ? location.hash.slice(2) : "";
    const initialPath = initialRaw.trim();
    loadPage(initialPath);
}
function loadPage(path) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const app = document.getElementById("app-content"); // Correct container ID
        if (!app)
            return;
        try {
            // If no route, render the default home content from index.html
            if (!path) {
                if (DEFAULT_APP_HTML !== null) {
                    app.innerHTML = DEFAULT_APP_HTML;
                    document.title = DEFAULT_TITLE;
                    return;
                }
                // Fallback to doing nothing if default not captured
                return;
            }
            // Fetch the HTML page (could be a full HTML document)
            const response = yield fetch(`./${path}.html`);
            if (!response.ok)
                throw new Error("Page not found");
            const text = yield response.text();
            // Parse the fetched HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, "text/html");
            // Update document title if present
            const title = (_a = doc.querySelector("title")) === null || _a === void 0 ? void 0 : _a.textContent;
            if (title)
                document.title = title;
            // Extract the main body content. Prefer an element with id 'app-content' in the fetched page,
            // otherwise use body.innerHTML
            const incomingApp = doc.getElementById("app-content");
            const content = incomingApp ? incomingApp.innerHTML : doc.body.innerHTML;
            // Replace existing app content
            app.innerHTML = content;
            // Execute scripts found in the fetched document (both inline and external)
            const scripts = Array.from(doc.querySelectorAll("script"));
            for (const s of scripts) {
                const newScript = document.createElement("script");
                // copy attributes
                for (const attr of Array.from(s.attributes || [])) {
                    newScript.setAttribute(attr.name, attr.value);
                }
                // inline script
                if (s.textContent)
                    newScript.textContent = s.textContent;
                document.body.appendChild(newScript);
                // remove the script tag after execution to keep DOM clean
                // note: external scripts will execute when appended; inline too.
            }
        }
        catch (err) {
            app.innerHTML = `
      <div class="text-white text-center mt-10">
        <h2 class="text-3xl font-bold text-red-500">404 - Page not found</h2>
        <p class="mt-4 text-gray-400">Could not load <strong>${path}</strong></p>
      </div>
    `;
        }
    });
}
// Initialize router on DOM ready
document.addEventListener("DOMContentLoaded", Router);
