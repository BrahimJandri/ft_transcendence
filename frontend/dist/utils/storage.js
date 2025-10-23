/**
 * Storage Utility - LocalStorage wrapper with type safety
 */
export class Storage {
    static set(key, value) {
        try {
            const serialized = JSON.stringify(value);
            localStorage.setItem(key, serialized);
        }
        catch (error) {
            console.error('Storage set error:', error);
        }
    }
    static get(key) {
        try {
            const item = localStorage.getItem(key);
            if (!item)
                return null;
            return JSON.parse(item);
        }
        catch (error) {
            console.error('Storage get error:', error);
            return null;
        }
    }
    static remove(key) {
        localStorage.removeItem(key);
    }
    static clear() {
        localStorage.clear();
    }
    static has(key) {
        return localStorage.getItem(key) !== null;
    }
}
