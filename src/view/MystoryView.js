// MystoryView.js
import { StoryDB } from '../utils/story-db.js';

function updateSavedStoryIdsAfterDelete(id) {
  const ids = JSON.parse(localStorage.getItem('savedStoryIds')) || [];
  const updated = ids.filter((savedId) => savedId !== id);
  localStorage.setItem('savedStoryIds', JSON.stringify(updated));
}

function clearAllSavedStoryIds() {
  localStorage.setItem('savedStoryIds', JSON.stringify([]));
}

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
    const stories = await StoryDB.getLocalStories();

    container.innerHTML = '';

    if (!stories || stories.length === 0) {
      container.innerHTML = '<p>No stories saved offline.</p>';
      return;
    }

    stories.forEach((story) => {
      const article = document.createElement('article');
      article.className = 'story-card horizontal-card';

      const img = document.createElement('img');
      img.alt = 'Story photo';

      if (story.imageBlob) {
        const objectUrl = URL.createObjectURL(story.imageBlob);
        img.src = objectUrl;
        img.onload = () => URL.revokeObjectURL(objectUrl); // Hindari memory leak
      } else if (story.image && story.image !== '[uploaded]') {
        img.src = story.image;
      }

      const content = document.createElement('div');
      content.className = 'story-content';

      content.innerHTML = `
        <p>${story.description}</p>
        <p><strong>Uploader:</strong> ${story.uploader}</p>
        <p><small>${new Date(story.createdAt).toLocaleString()}</small></p>
      `;

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = '🗑 Delete';
      deleteBtn.dataset.id = story.id;

      deleteBtn.addEventListener('click', async () => {
        await StoryDB.deleteStory(story.id);
        updateSavedStoryIdsAfterDelete(story.id);
        this.afterRender();
      });

      content.appendChild(deleteBtn);
      article.appendChild(img);
      article.appendChild(content);
      container.appendChild(article);
    });

    document
      .getElementById('clear-all-btn')
      ?.addEventListener('click', async () => {
        await StoryDB.clearAllStories();
        clearAllSavedStoryIds();
        this.afterRender();
      });
  },

  redirectToLogin() {
    location.hash = '#/login';
  },
};
