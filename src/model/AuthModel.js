import { SessionHelper } from '../utils/SessionHelper.js';

const BASE_URL = 'https://story-api.dicoding.dev/v1';

export class AuthModel {
  // Fungsi untuk login
  static async login(email, password) {
    try {
      if (!email || !password) {
        throw new Error('Email and password are required.');
      }

      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Login failed. Status:', response.status);
        console.error('Server response:', result);
        throw new Error(result.message || 'Login failed.');
      }

      // Simpan token dan data user
      SessionHelper.saveSession({
        token: result.loginResult.token,
        name: result.loginResult.name,
        email,
      });

      return true;
    } catch (error) {
      console.error('Login Error:', error.message);
      return false;
    }
  }

  // Fungsi untuk registrasi
  static async register(name, email, password) {
    try {
      // Validasi input sebelum request
      if (!name || !email || !password) {
        throw new Error('All fields are required.');
      }

      if (password.length < 8) {
        throw new Error('Password must be at least 8 characters.');
      }

      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Register failed. Status:', response.status);
        console.error('Server response:', result);
        throw new Error(result.message || 'Registration failed.');
      }

      return true;
    } catch (error) {
      console.error('Register Error:', error.message);
      return false;
    }
  }

  // Fungsi logout
  static logout() {
    SessionHelper.clearSession();
  }

  // Mengecek apakah sudah login
  static isLoggedIn() {
    return !!SessionHelper.loadSession();
  }

  // Mengambil token yang disimpan
  static getToken() {
    const session = SessionHelper.loadSession();
    return session ? session.token : null;
  }

  // Mengambil data user
  static getUser() {
    const session = SessionHelper.loadSession();
    return session ? { name: session.name, email: session.email } : null;
  }
}
