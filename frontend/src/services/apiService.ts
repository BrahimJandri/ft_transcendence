/**
 * API Service - Centralized API communication
 */

import type { ApiResponse } from '../types/index.js';

const API_BASE_URL = 'http://localhost:4000/api';

export class ApiService {
  /**
   * Make a GET request
   */
  static async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const token = localStorage.getItem('authToken');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers,
      });

      const data = await response.json();
      return {
        success: response.ok,
        data: data,
        message: data.message,
      };
    } catch (error) {
      console.error('API GET Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Make a POST request
   */
  static async post<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    try {
      const token = localStorage.getItem('authToken');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });

      const data = await response.json();
      return {
        success: response.ok,
        data: data,
        message: data.message,
      };
    } catch (error) {
      console.error('API POST Error:', error);
      
      // Check if it's a network error (backend not running)
      if (error instanceof TypeError && error.message.includes('fetch')) {
        return {
          success: false,
          error: 'Cannot connect to server. Please ensure the backend is running on http://localhost:4000',
        };
      }
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Make a PUT request
   */
  static async put<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    try {
      const token = localStorage.getItem('authToken');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(body),
      });

      const data = await response.json();
      return {
        success: response.ok,
        data: data,
        message: data.message,
      };
    } catch (error) {
      console.error('API PUT Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Make a DELETE request
   */
  static async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const token = localStorage.getItem('authToken');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'DELETE',
        headers,
      });

      const data = await response.json();
      return {
        success: response.ok,
        data: data,
        message: data.message,
      };
    } catch (error) {
      console.error('API DELETE Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}
