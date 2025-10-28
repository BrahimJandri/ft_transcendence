/**
 * Authentication Service - Token management and auth operations
 */
import { ApiService } from './apiService.js';
export class AuthService {
    /**
     * Login user
     */
    static async login(credentials) {
        try {
            const response = await ApiService.post('/login', credentials);
            // The API returns { token, user, message } directly in response.data
            const token = response.data?.token;
            const user = response.data?.user;
            const message = response.data?.message;
            console.log('Login response:', response);
            console.log('Extracted token:', token);
            console.log('Extracted user:', user);
            if (response.success && token) {
                this.setToken(token);
                if (user) {
                    this.setUser(user);
                }
                return {
                    success: true,
                    token: token,
                    user: user,
                    message: message || 'Login successful',
                };
            }
            return {
                success: false,
                message: message || response.message || response.error || 'Login failed',
            };
        }
        catch (error) {
            console.error('Login error:', error);
            return {
                success: false,
                message: error instanceof Error ? error.message : 'Login failed',
            };
        }
    }
    /**
     * Register new user
     */
    static async register(credentials) {
        try {
            const response = await ApiService.post('/signup', credentials);
            // The API returns { token, user, message } directly in response.data
            const token = response.data?.token;
            const user = response.data?.user;
            const message = response.data?.message;
            console.log('Register response:', response);
            console.log('Extracted token:', token);
            console.log('Extracted user:', user);
            if (response.success) {
                // Do NOT save token/user on registration - user must login first
                return {
                    success: true,
                    token: token,
                    user: user,
                    message: message || 'Registration successful',
                };
            }
            return {
                success: false,
                message: message || response.message || response.error || 'Registration failed',
            };
        }
        catch (error) {
            console.error('Registration error:', error);
            return {
                success: false,
                message: error instanceof Error ? error.message : 'Registration failed',
            };
        }
    }
    /**
     * Logout user
     */
    static logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_KEY);
        window.location.href = '/login';
    }
    /**
     * Check if user is authenticated
     */
    static isAuthenticated() {
        const token = this.getToken();
        return !!token;
    }
    /**
     * Get auth token
     */
    static getToken() {
        return localStorage.getItem(this.TOKEN_KEY);
    }
    /**
     * Set auth token
     */
    static setToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }
    /**
     * Get current user
     */
    static getUser() {
        const userJson = localStorage.getItem(this.USER_KEY);
        if (!userJson)
            return null;
        try {
            return JSON.parse(userJson);
        }
        catch {
            return null;
        }
    }
    /**
     * Set current user
     */
    static setUser(user) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
    /**
     * Verify token validity
     */
    static async verifyToken() {
        try {
            const response = await ApiService.get('/auth/verify');
            return response.success && response.data?.valid === true;
        }
        catch {
            return false;
        }
    }
    /**
     * Get user profile
     */
    static async getProfile() {
        try {
            const response = await ApiService.get('/auth/profile');
            if (response.success && response.data) {
                this.setUser(response.data);
                return response.data;
            }
            return null;
        }
        catch {
            return null;
        }
    }
}
AuthService.TOKEN_KEY = 'authToken';
AuthService.USER_KEY = 'currentUser';
