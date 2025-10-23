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
            const response = await ApiService.post('/auth/login', credentials);
            if (response.success && response.data?.token) {
                this.setToken(response.data.token);
                if (response.data.user) {
                    this.setUser(response.data.user);
                }
                return {
                    success: true,
                    token: response.data.token,
                    user: response.data.user,
                    message: 'Login successful',
                };
            }
            return {
                success: false,
                message: response.message || 'Login failed',
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
            const response = await ApiService.post('/auth/register', credentials);
            if (response.success && response.data?.token) {
                this.setToken(response.data.token);
                if (response.data.user) {
                    this.setUser(response.data.user);
                }
                return {
                    success: true,
                    token: response.data.token,
                    user: response.data.user,
                    message: 'Registration successful',
                };
            }
            return {
                success: false,
                message: response.message || 'Registration failed',
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
