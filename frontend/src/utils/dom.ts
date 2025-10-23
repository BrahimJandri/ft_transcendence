/**
 * DOM Utilities - Helper functions for DOM manipulation
 */

export class DomUtils {
  /**
   * Get element by ID with type assertion
   */
  static getById<T extends HTMLElement>(id: string): T | null {
    return document.getElementById(id) as T | null;
  }

  /**
   * Query selector with type assertion
   */
  static query<T extends HTMLElement>(selector: string): T | null {
    return document.querySelector(selector) as T | null;
  }

  /**
   * Query all with type assertion
   */
  static queryAll<T extends HTMLElement>(selector: string): NodeListOf<T> {
    return document.querySelectorAll(selector) as NodeListOf<T>;
  }

  /**
   * Add event listener with type safety
   */
  static on<K extends keyof HTMLElementEventMap>(
    element: HTMLElement | null,
    event: K,
    handler: (event: HTMLElementEventMap[K]) => void
  ): void {
    if (element) {
      element.addEventListener(event, handler);
    }
  }

  /**
   * Show element
   */
  static show(element: HTMLElement | null): void {
    if (element) {
      element.style.display = 'block';
    }
  }

  /**
   * Hide element
   */
  static hide(element: HTMLElement | null): void {
    if (element) {
      element.style.display = 'none';
    }
  }

  /**
   * Toggle element visibility
   */
  static toggle(element: HTMLElement | null): void {
    if (element) {
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
  }

  /**
   * Add class to element
   */
  static addClass(element: HTMLElement | null, className: string): void {
    if (element) {
      element.classList.add(className);
    }
  }

  /**
   * Remove class from element
   */
  static removeClass(element: HTMLElement | null, className: string): void {
    if (element) {
      element.classList.remove(className);
    }
  }

  /**
   * Toggle class on element
   */
  static toggleClass(element: HTMLElement | null, className: string): void {
    if (element) {
      element.classList.toggle(className);
    }
  }

  /**
   * Set inner HTML safely
   */
  static setHTML(element: HTMLElement | null, html: string): void {
    if (element) {
      element.innerHTML = html;
    }
  }

  /**
   * Create element with attributes
   */
  static create<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    attributes?: Record<string, string>,
    content?: string
  ): HTMLElementTagNameMap[K] {
    const element = document.createElement(tag);
    
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }
    
    if (content) {
      element.textContent = content;
    }
    
    return element;
  }
}
