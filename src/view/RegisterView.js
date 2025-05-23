// views/RegisterView.js
import { StoryFormRegister } from '../component/StoryForm.js';
import { AuthPresenter } from '../presenter/AuthPresenter.js';

export const RegisterView = {
  async render() {
    return `
      <section class="auth-section">
        <h2 id="register-heading">Register</h2>
        <form id="register-form" aria-labelledby="register-heading">
          ${StoryFormRegister()}
          
          <button type="submit" aria-label="Register a new account on Story Day">Register</button>
        </form>
        <p>Already have an account? <a href="#/login">Login</a></p>
      </section>
    `;
  },

  async afterRender() {
    this.presenter = new AuthPresenter(this);

    document.getElementById('register-form').addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      if (name.length < 2) {
        this.showError('Name must be at least 2 characters.');
        return;
      }

      if (!emailRegex.test(email)) {
        this.showError('Invalid email format.');
        return;
      }

      if (password.length < 8) {
        this.showError('Password must be at least 8 characters.');
        return;
      }

      this.presenter.handleRegister(name, email, password);
    });
  },

  navigateToLogin() {
    window.location.hash = '#/login';
  },

  showError(message) {
    alert(`Error: ${message}`);
  },

  showSuccess(message) {
    alert(`Success: ${message}`);
  },
};
