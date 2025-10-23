/**
 * Type definitions for the application
 */

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  createdAt?: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: User;
  message?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface GameStats {
  wins: number;
  losses: number;
  gamesPlayed: number;
  winRate: number;
}

export interface Match {
  id: string;
  player1: string;
  player2: string;
  score1: number;
  score2: number;
  winner: string;
  date: string;
}

export interface Friend {
  id: string;
  username: string;
  avatar?: string;
  status: 'online' | 'offline' | 'in-game';
}

export interface Tournament {
  id: string;
  name: string;
  participants: number;
  maxParticipants: number;
  startDate: string;
  status: 'upcoming' | 'in-progress' | 'completed';
}
