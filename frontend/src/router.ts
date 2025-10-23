/**
 * Router - Client-side routing with History API
 * Handles navigation without page reloads
 */

interface Route {
  path: string;
  handler: () => string;
  requiresAuth?: boolean;
}

export class Router {
  private routes: Map<string, Route> = new Map();
  private rootElement: HTMLElement;

  constructor(rootElementId: string) {
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
  addRoute(path: string, handler: () => string, requiresAuth: boolean = false): void {
    this.routes.set(path, { path, handler, requiresAuth });
  }

  /**
   * Navigate to a path programmatically
   */
  navigate(path: string): void {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  /**
   * Handle route changes
   */
  private handleRoute(): void {
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
  private handleLinkClick(e: Event): void {
    const target = e.target as HTMLElement;
    const link = target.closest('a[data-link]') as HTMLAnchorElement;
    
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
  start(): void {
    this.handleRoute();
  }

  /**
   * Get current path
   */
  getCurrentPath(): string {
    return window.location.pathname;
  }
}
