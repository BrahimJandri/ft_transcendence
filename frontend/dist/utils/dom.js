/**
 * DOM Utilities - Helper functions for DOM manipulation
 */
export class DomUtils {
    /**
     * Get element by ID with type assertion
     */
    static getById(id) {
        return document.getElementById(id);
    }
    /**
     * Query selector with type assertion
     */
    static query(selector) {
        return document.querySelector(selector);
    }
    /**
     * Query all with type assertion
     */
    static queryAll(selector) {
        return document.querySelectorAll(selector);
    }
    /**
     * Add event listener with type safety
     */
    static on(element, event, handler) {
        if (element) {
            element.addEventListener(event, handler);
        }
    }
    /**
     * Show element
     */
    static show(element) {
        if (element) {
            element.style.display = 'block';
        }
    }
    /**
     * Hide element
     */
    static hide(element) {
        if (element) {
            element.style.display = 'none';
        }
    }
    /**
     * Toggle element visibility
     */
    static toggle(element) {
        if (element) {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
        }
    }
    /**
     * Add class to element
     */
    static addClass(element, className) {
        if (element) {
            element.classList.add(className);
        }
    }
    /**
     * Remove class from element
     */
    static removeClass(element, className) {
        if (element) {
            element.classList.remove(className);
        }
    }
    /**
     * Toggle class on element
     */
    static toggleClass(element, className) {
        if (element) {
            element.classList.toggle(className);
        }
    }
    /**
     * Set inner HTML safely
     */
    static setHTML(element, html) {
        if (element) {
            element.innerHTML = html;
        }
    }
    /**
     * Create element with attributes
     */
    static create(tag, attributes, content) {
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
