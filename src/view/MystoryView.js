// MystoryView.js
import { StoryDB } from '../utils/story-db.js';

export const MystoryView = {
  async render() {
    return `
      <section class="my-story">
        <h2>📦 My Saved Stories (Offline)</h2>
        <div id="story-list" class="story-scroll-list"></div>
        <button id="clear-all-btn" style="margin-top:1rem;">🗑 Clear All Stories</button>
      </section>
    `;
  },

  async afterRender() {
    const container = document.getElementById('story-list');
    const stories = await StoryDB.getAllStories();

    if (!stories || stories.length === 0) {
      container.innerHTML = '<p>No stories saved offline.</p>';
      return;
    }

    container.innerHTML = ''; // Clear container dulu

    stories.forEach((story) => {
      const article = document.createElement('article');
      article.className = 'story-card horizontal-card';

      const img = document.createElement('img');
      img.alt = 'Story photo';

      if (story.imageBlob) {
        const objectUrl = URL.createObjectURL(story.imageBlob);
        img.src = objectUrl;

        // Revoke URL setelah gambar selesai dimuat supaya tidak bocor memori
        img.onload = () => URL.revokeObjectURL(objectUrl);
      } else {
        img.src = story.image; // fallback ke URL dari API
      }

      const content = document.createElement('div');
      content.className = 'story-content';

      const desc = document.createElement('p');
      desc.textContent = story.description;

      const uploader = document.createElement('p');
      uploader.innerHTML = `<strong>Uploader:</strong> ${story.uploader}`;

      const date = document.createElement('p');
      date.innerHTML = `<small>${new Date(
        story.createdAt
      ).toLocaleString()}</small>`;

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = '🗑 Delete';
      deleteBtn.dataset.id = story.id;

      deleteBtn.addEventListener('click', async () => {
        await StoryDB.deleteStory(story.id);
        this.afterRender();
      });

      content.appendChild(desc);
      content.appendChild(uploader);
      content.appendChild(date);
      content.appendChild(deleteBtn);

      article.appendChild(img);
      article.appendChild(content);

      container.appendChild(article);
    });

    document
      .getElementById('clear-all-btn')
      .addEventListener('click', async () => {
        await StoryDB.clearAllStories();
        this.afterRender();
      });
  },

  setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem(
          'theme',
          document.body.classList.contains('dark') ? 'dark' : 'light'
        );
      });
    }
  },

  redirectToLogin() {
    location.hash = '#/login';
  },
};
