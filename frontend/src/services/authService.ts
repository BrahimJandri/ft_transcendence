/**
 * Authentication Service - Token management and auth operations
 */

import { ApiService } from './apiService.js';
import type { AuthResponse, LoginCredentials, RegisterCredentials, User } from '../types/index.js';

export class AuthService {
  private static readonly TOKEN_KEY = 'authToken';
  private static readonly USER_KEY = 'currentUser';

  /**
   * Login user
   */
  static async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await ApiService.post<AuthResponse>('/auth/login', credentials);
      
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
    } catch (error) {
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
  static async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    try {
      const response = await ApiService.post<AuthResponse>('/auth/register', credentials);
      
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
    } catch (error) {
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
  static logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    window.location.href = '/login';
  }

  /**
   * Check if user is authenticated
   */
  static isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  /**
   * Get auth token
   */
  static getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Set auth token
   */
  static setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  /**
   * Get current user
   */
  static getUser(): User | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (!userJson) return null;
    
    try {
      return JSON.parse(userJson);
    } catch {
      return null;
    }
  }

  /**
   * Set current user
   */
  static setUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  /**
   * Verify token validity
   */
  static async verifyToken(): Promise<boolean> {
    try {
      const response = await ApiService.get<{ valid: boolean }>('/auth/verify');
      return response.success && response.data?.valid === true;
    } catch {
      return false;
    }
  }

  /**
   * Get user profile
   */
  static async getProfile(): Promise<User | null> {
    try {
      const response = await ApiService.get<User>('/auth/profile');
      if (response.success && response.data) {
        this.setUser(response.data);
        return response.data;
      }
      return null;
    } catch {
      return null;
    }
  }
}
