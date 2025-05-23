import { AuthModel } from '../model/AuthModel.js';

export class AuthPresenter {
  constructor(view) {
    this.view = view;
  }

  async handleLogin(email, password) {
    const success = await AuthModel.login(email, password);
    if (success) {
      this.view.navigateToHome();
    } else {
      this.view.showError('Login failed. Incorrect email or password..');
    }
  }

  async handleRegister(name, email, password) {
    const success = await AuthModel.register(name, email, password);
    if (success) {
      this.view.showSuccess('Registration successful. Please login.');
      this.view.navigateToLogin();
    } else {
      this.view.showError(
        'Registration failed. Email may already be registered.'
      );
    }
  }

  logout() {
    AuthModel.logout();
    this.view.navigateToLogin();
  }

  isAuthenticated() {
    return AuthModel.isLoggedIn();
  }

  getUser() {
    return AuthModel.getUser();
  }
}
