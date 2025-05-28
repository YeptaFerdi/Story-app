// views/HomeView.js
import { StoryPresenter } from '../presenter/StoryPresenter.js';
import { Spinner } from '../component/Spinner.js';

export class HomeView {
  constructor() {
    this.presenter = new StoryPresenter(this);
  }

  async render() {
    return `
      <section class="home-section">
        <h2 id="story-heading">Today's Story</h2>
        <div id="global-map" class="story-map" style="height: 400px; margin-bottom: 2rem;" role="application" aria-label="Story location map"></div>
        <div class="story-grid" id="story-list-container" aria-labelledby="story-heading"></div>
      </section>
    `;
  }

  async afterRender() {
    if (!this.presenter.isAuthenticated()) {
      this.redirectToLogin();
      return;
    }

    Spinner.show();
    await this.presenter.loadStorysAndMap();
    Spinner.hide();

    this.updateNavbar();
    this.setupThemeToggle();
  }

  renderStorys(storys) {
    const storyList = storys;
    const cards = storys.map((story) => {
      let imageUrl = story.image;
      let revokeUrl = null;

      if (story.imageBlob) {
        imageUrl = URL.createObjectURL(story.imageBlob);
        revokeUrl = imageUrl;
      }

      const card = document.createElement('div');
      card.className = 'story-card';
      card.tabIndex = 0;
      card.setAttribute(
        'aria-label',
        `Story by ${story.uploader} on ${story.createdAt}`
      );

      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Story photo';
      if (revokeUrl) {
        img.onload = () =>
          setTimeout(() => URL.revokeObjectURL(revokeUrl), 1000);
      }

      const desc = document.createElement('p');
      desc.textContent = story.description;

      const uploader = document.createElement('p');
      uploader.innerHTML = `<strong>Uploader:</strong> ${story.uploader}`;

      const date = document.createElement('p');
      date.innerHTML = `<strong>Created:</strong> ${new Date(
        story.createdAt
      ).toLocaleString()}`;

      card.appendChild(img);
      card.appendChild(desc);
      card.appendChild(uploader);
      card.appendChild(date);

      return card;
    });

    const container = document.getElementById('story-list-container');
    container.innerHTML = '';
    cards.forEach((card) => container.appendChild(card));
  }

  showMap(storys) {
    const mapContainer = document.getElementById('global-map');
    if (!mapContainer || storys.length === 0) return;

    if (mapContainer._leaflet_id) {
      mapContainer._leaflet_id = null;
    }

    const first = storys.find((p) => p.location?.lat && p.location?.lng);
    if (!first) return;

    const map = L.map('global-map').setView(
      [first.location.lat, first.location.lng],
      13
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const bounds = [];

    storys.forEach((story) => {
      if (story.location?.lat && story.location?.lng) {
        const latLng = [story.location.lat, story.location.lng];
        bounds.push(latLng);

        L.marker(latLng).addTo(map).bindPopup(`
            <b>${story.uploader}</b><br>
            ${story.description}<br>
            ${new Date(story.createdAt).toLocaleString()}
          `);
      }
    });

    if (bounds.length > 0) {
      map.fitBounds(bounds);
    }
  }

  updateNavbar() {
    const nav = document.getElementById('nav');
    if (nav) {
      nav.innerHTML = `
        <a href="#/home" class="logo" aria-label="Beranda Story Day">
          <img src="./asset/icons/logo.png" alt="Logo StoryDay" width="40" height="40">
        </a>
        <ul id="nav-links">
          <li><a href="#/home">Home</a></li>
          <li><a href="#/add">Add Story</a></li>
          <li><a href="#/mystory">My Story</a></li>
        </ul>
      `;

      document.getElementById('logout-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        this.presenter.logout();
      });
    }
  }

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
  }

  showError(message) {
    alert(`Error: ${message}`);
  }

  showSuccess(message) {
    alert(`Success: ${message}`);
  }

  redirectToLogin() {
    location.hash = '#/login';
  }
}
