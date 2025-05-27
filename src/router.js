import { LoginView } from './view/LoginView.js';
import { RegisterView } from './view/RegisterView.js';
import { HomeView } from './view/HomeView.js';
import { AddView } from './view/AddView.js';
import { MystoryView } from './view/MystoryView.js';
import { AuthModel } from '../src/model/AuthModel.js';
import Camera from './utils/camera.js';

export const Router = {
  init() {
    window.addEventListener('hashchange', this.handleRoute.bind(this));
    this.handleRoute();
  },

  async handleRoute() {
    const hash = window.location.hash || '#/login';
    const main = document.getElementById('main-content');

    if (!main) {
      console.error('main-content element not found');
      return;
    }

    if (document.startViewTransition) {
      await document.startViewTransition(() => this.renderView(hash, main));
    } else {
      await this.renderView(hash, main);
    }

    // Stop semua stream kamera setelah transisi
    Camera.stopAllStreams();
  },

  async renderView(hash, main) {
    switch (hash) {
      case '#/login':
        main.innerHTML = await LoginView.render();
        LoginView.afterRender();
        break;

      case '#/register':
        main.innerHTML = await RegisterView.render();
        RegisterView.afterRender();
        break;

      case '#/home':
        if (!AuthModel.isLoggedIn()) return (location.hash = '#/login');
        const homeView = new HomeView();
        main.innerHTML = await homeView.render();
        homeView.afterRender();
        break;

      case '#/add':
        if (!AuthModel.isLoggedIn()) return (location.hash = '#/login');
        main.innerHTML = await AddView.render();
        AddView.afterRender();
        break;

      case '#/mystory':
        if (!AuthModel.isLoggedIn()) return (location.hash = '#/login');
        main.innerHTML = await MystoryView.render();
        MystoryView.afterRender();
        break;

      default:
        main.innerHTML = `
        <section style="padding: 2rem; text-align: center;">
          <h2>404 - Page Not Found</h2>
          <p>The page you are looking for does not exist.</p>
          <a href="#/home" style="display:inline-block;margin-top:1rem;">🔙 Back to Home</a>
        </section>
      `;
        break;
    }
  },
};
