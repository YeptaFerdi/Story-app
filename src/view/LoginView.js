// views/LoginView.js
import { StoryFormLogin } from '../component/StoryForm.js';
import { AuthPresenter } from '../presenter/AuthPresenter.js';

export const LoginView = {
  async render() {
    return `
      <section class="auth-section">
        <h2>Login</h2>
        <form id="login-form" aria-labelledby="login-heading">
          ${StoryFormLogin()}
          
          <button type="submit" aria-label="Login to Story Day account">Login</button>
        </form>
        <p>Don't have an account yet? <a href="#/register">Register</a></p>
      </section>
    `;
  },

  async afterRender() {
    this.presenter = new AuthPresenter(this);

    document.getElementById('login-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      if (password.length < 8) {
        this.showError('Password must be at least 8 characters.');
        return;
      }

      this.presenter.handleLogin(email, password);
    });
  },

  navigateToHome() {
    window.location.hash = '#/home';
  },

  showError(message) {
    alert(`Error: ${message}`);
  },
};
