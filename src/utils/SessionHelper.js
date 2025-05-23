// utils/SessionHelper.js

export const SessionHelper = {
  // Menyimpan sesi user ke localStorage
  saveSession(user) {
    if (user && user.token) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('name', user.name);
      localStorage.setItem('email', user.email);
    }
  },

  // Memuat sesi dari localStorage
  loadSession() {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    if (token && name && email) {
      return { token, name, email };
    }
    return null;
  },

  // Menghapus sesi dari localStorage
  clearSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  },

  saveSession(user) {
    if (user && user.token) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('name', user.name);
      localStorage.setItem('email', user.email);
      localStorage.setItem('sessionTime', Date.now());
    }
  },
};
