/**
 * Validation Utility - Form validation helpers
 */
export class Validator {
    /**
     * Validate email format
     */
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    /**
     * Validate password strength
     */
    static isValidPassword(password) {
        if (password.length < 8) {
            return { valid: false, message: 'Password must be at least 8 characters long' };
        }
        if (!/[A-Z]/.test(password)) {
            return { valid: false, message: 'Password must contain at least one uppercase letter' };
        }
        if (!/[a-z]/.test(password)) {
            return { valid: false, message: 'Password must contain at least one lowercase letter' };
        }
        if (!/[0-9]/.test(password)) {
            return { valid: false, message: 'Password must contain at least one number' };
        }
        return { valid: true };
    }
    /**
     * Validate username
     */
    static isValidUsername(username) {
        if (username.length < 3) {
            return { valid: false, message: 'Username must be at least 3 characters long' };
        }
        if (username.length > 20) {
            return { valid: false, message: 'Username must be less than 20 characters' };
        }
        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            return { valid: false, message: 'Username can only contain letters, numbers, and underscores' };
        }
        return { valid: true };
    }
    /**
     * Check if passwords match
     */
    static passwordsMatch(password, confirmPassword) {
        return password === confirmPassword;
    }
    /**
     * Validate required field
     */
    static isRequired(value) {
        return value.trim().length > 0;
    }
}
