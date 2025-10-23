/**
 * Router - Client-side routing with History API
 * Handles navigation without page reloads
 */
export class Router {
    constructor(rootElementId) {
        this.routes = new Map();
        const element = document.getElementById(rootElementId);
        if (!element) {
            throw new Error(`Root element with id "${rootElementId}" not found`);
        }
        this.rootElement = element;
        // Listen for browser back/forward buttons
        window.addEventListener('popstate', () => this.handleRoute());
        // Intercept all link clicks with data-link attribute
        document.addEventListener('click', (e) => this.handleLinkClick(e));
    }
    /**
     * Register a route with its handler
     */
    addRoute(path, handler, requiresAuth = false) {
        this.routes.set(path, { path, handler, requiresAuth });
    }
    /**
     * Navigate to a path programmatically
     */
    navigate(path) {
        window.history.pushState({}, '', path);
        this.handleRoute();
    }
    /**
     * Handle route changes
     */
    handleRoute() {
        const path = window.location.pathname;
        const route = this.routes.get(path) || this.routes.get('/404') || this.routes.get('/');
        if (!route) {
            console.error('No route found and no fallback defined');
            return;
        }
        // Render the page
        this.rootElement.innerHTML = route.handler();
        // Dispatch custom event for page-specific logic initialization
        window.dispatchEvent(new CustomEvent('routeChanged', {
            detail: { path, requiresAuth: route.requiresAuth }
        }));
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }
    /**
     * Intercept link clicks with data-link attribute
     */
    handleLinkClick(e) {
        const target = e.target;
        const link = target.closest('a[data-link]');
        if (link) {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href) {
                this.navigate(href);
            }
        }
    }
    /**
     * Start the router
     */
    start() {
        this.handleRoute();
    }
    /**
     * Get current path
     */
    getCurrentPath() {
        return window.location.pathname;
    }
}
