// presenter/StoryPresenter.js
import { StoryModel } from '../model/StoryModel.js';
import { AuthModel } from '../model/AuthModel.js';

export class StoryPresenter {
  constructor(view) {
    this.view = view;
  }

  isAuthenticated() {
    return AuthModel.isLoggedIn();
  }

  logout() {
    AuthModel.logout();
    this.view.redirectToLogin();
  }

  async loadStorysAndMap() {
    try {
      const storys = await StoryModel.getStorys();
      this.view.renderStorys(storys);
      this.view.showMap(storys);
    } catch (err) {
      this.view.showError('Failed to load story data.');
    }
  }

  async getStorys() {
    try {
      if (!AuthModel.isLoggedIn()) {
        this.view.showError('Session has expired. Please re-login..');
        this.view.redirectToLogin();
        return [];
      }

      const storys = await StoryModel.getStorys();

      if (storys && storys.length > 0) {
        this.view.renderStorys(storys);
      } else {
        this.view.showError('No story data found.');
      }

      return storys;
    } catch (error) {
      this.view.showError(
        error.message || 'An error occurred while retrieving story data.'
      );
      return [];
    }
  }

  async submitStory({ description, photo, lat, lon }) {
    try {
      await StoryModel.addStory({ description, photo, lat, lon });
      this.view.showSuccess('Story added successfully!');
    } catch (error) {
      this.view.showError(error.message || 'Failed to add story.');
    }
  }
}
