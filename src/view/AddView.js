// views/AddView.js
import { StoryPresenter } from '../presenter/StoryPresenter.js';
import { Spinner } from '../component/Spinner.js';
import Camera from '../utils/camera.js';
import { StoryFormFields } from '../component/StoryForm.js';

export const AddView = {
  async render() {
    return `
      <section class="add-section">
      <h2 id="add-story-heading">Add Story</h2>
      <form id="add-form" aria-labelledby="add-story-heading">
          ${StoryFormFields()}
          
          <p id="photo-label"><strong>Story Photo</strong></p>
          <button type="button" id="open-camera" aria-labelledby="photo-label">Open Camera</button>
          <button type="button" id="take-photo" style="display:none; margin-top: 10px;" aria-label="Take photo">Take Photo</button>

          <video id="camera-stream" autoplay playsinline style="display:none; width:100%; max-height:300px; border:1px solid #ccc;" aria-label="Camera preview"></video>
          <canvas id="snapshot" style="display:none;"></canvas>
          <input type="hidden" id="image" name="image">
                    

          <p id="map-desc">Click on the map to select a story location:</p>
          <div id="map" style="height: 300px;" aria-describedby="map-desc" role="application"></div>
          <input type="hidden" id="latitude" name="latitude">
          <input type="hidden" id="longitude" name="longitude">

          <button type="submit" aria-label="Add story to Story Day">Add Story</button>
        </form>
      </section>
    `;
  },

  async afterRender() {
    this.presenter = new StoryPresenter(this);
    if (!this.presenter.isAuthenticated()) {
      this.redirectToLogin();
      return;
    }

    this.renderMap();
    this.initCamera();
    this.handleSubmit();
    this.updateNavbar();

    document.getElementById('theme-toggle')?.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem(
        'theme',
        document.body.classList.contains('dark') ? 'dark' : 'light'
      );
    });
  },

  renderMap() {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl:
        'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });

    const map = L.map('map').setView([-6.2, 106.816666], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    let marker;

    map.on('click', (e) => {
      const { lat, lng } = e.latlng;
      document.getElementById('latitude').value = lat;
      document.getElementById('longitude').value = lng;

      if (marker) {
        marker.setLatLng(e.latlng);
      } else {
        marker = L.marker(e.latlng).addTo(map);
      }

      this.updatePopup(marker);
      map.setView(e.latlng, map.getZoom());
    });

    document.getElementById('description').addEventListener('input', () => {
      this.updatePopup(marker);
    });
  },

  updatePopup(marker) {
    if (!marker) return;
    const desc =
      document.getElementById('description').value || 'Tanpa Deskripsi';
    marker.bindPopup(`<strong>${desc}</strong>`).openPopup();
  },

  initCamera() {
    const openBtn = document.getElementById('open-camera');
    const takeBtn = document.getElementById('take-photo');
    const video = document.getElementById('camera-stream');
    const canvas = document.getElementById('snapshot');
    const imageInput = document.getElementById('image');

    const camera = new Camera({ video, canvas });

    openBtn.addEventListener('click', async () => {
      await camera.launch();
      video.style.display = 'block';
      canvas.style.display = 'none';
      takeBtn.style.display = 'inline-block';
    });

    camera.addCheeseButtonListener('#take-photo', async () => {
      const imageData = camera.takePicture();
      imageInput.value = imageData;

      canvas.style.display = 'block';
      video.style.display = 'none';
      takeBtn.style.display = 'none';

      Camera.stopAllStreams();
    });
  },

  handleSubmit() {
    document
      .getElementById('add-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();

        const description = document.getElementById('description').value.trim();
        const base64Data = document.getElementById('image').value;
        const latitude = document.getElementById('latitude').value;
        const longitude = document.getElementById('longitude').value;

        if (description.length < 10)
          return alert('Description must be at least 10 characters.');
        if (!base64Data) return alert('Please take a photo first.');
        if (!latitude || !longitude)
          return alert('Please select a location on the map.');

        const blob = await fetch(base64Data).then((res) => res.blob());
        const file = new File([blob], 'story.jpg', { type: 'image/jpeg' });

        const storyData = {
          description,
          photo: file,
          lat: parseFloat(latitude),
          lon: parseFloat(longitude),
        };

        Spinner.show();
        await this.presenter.submitStory(storyData);
        Spinner.hide();

        // Setelah Spinner.hide();
        if (Notification.permission === 'granted') {
          const reg = await navigator.serviceWorker.ready;
          reg.showNotification('🎉 Story added!', {
            body: 'Your story has been submitted successfully.',
            icon: './asset/icons/logo.png',
            badge: './asset/icons/favicon.png',
            data: { url: '#/home' },
          });
        }
      });
  },

  updateNavbar() {
    const nav = document.querySelector('nav');
    nav.innerHTML = `
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
  },

  showSuccess(message) {
    alert(`Success: ${message}`);
    location.hash = '#/home';
  },

  showError(message) {
    alert(`Error: ${message}`);
  },

  redirectToLogin() {
    location.hash = '#/login';
  },
};
