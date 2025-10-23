/**
 * API Service - Centralized API communication
 */
const API_BASE_URL = 'http://localhost:4000/api';
export class ApiService {
    /**
     * Make a GET request
     */
    static async get(endpoint) {
        try {
            const token = localStorage.getItem('authToken');
            const headers = {
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
        }
        catch (error) {
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
    static async post(endpoint, body) {
        try {
            const token = localStorage.getItem('authToken');
            const headers = {
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
        }
        catch (error) {
            console.error('API POST Error:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    }
    /**
     * Make a PUT request
     */
    static async put(endpoint, body) {
        try {
            const token = localStorage.getItem('authToken');
            const headers = {
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
        }
        catch (error) {
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
    static async delete(endpoint) {
        try {
            const token = localStorage.getItem('authToken');
            const headers = {
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
        }
        catch (error) {
            console.error('API DELETE Error:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    }
}
