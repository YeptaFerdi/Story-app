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

    container.innerHTML = stories
      .map(
      (story) => `
      <article class="story-card horizontal-card">
        <img src="${story.image || 'default.jpg'}" alt="Story Image" />
        <div class="story-content">
          <h3>${story.uploader || 'Anonim'}</h3>
          <p>${story.description}</p>
          <p><small>${new Date(story.createdAt).toLocaleString()}</small></p>
          <button data-id="${story.id}" class="delete-btn">🗑 Delete</button>
        </div>
      </article>
    `
    )
    .join('');

    document.querySelectorAll('.delete-btn').forEach((btn) => {
      btn.addEventListener('click', async () => {
        await StoryDB.deleteStory(btn.dataset.id);
        this.afterRender();
      });
    });

    document.getElementById('clear-all-btn').addEventListener('click', async () => {
      await StoryDB.clearAllStories();
      this.afterRender();
    });
  },
};
