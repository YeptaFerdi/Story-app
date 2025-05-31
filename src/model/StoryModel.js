// model/StoryModel.js
import { AuthModel } from './AuthModel.js';
import { StoryDB } from '../utils/story-db.js';

const BASE_API = 'https://story-api.dicoding.dev/v1';
const LOCAL_STORAGE_KEY = 'cachedStories';

export class StoryModel {
  // Ambil data dari API, fallback ke cache jika gagal
  static async getStorys() {
    const token = AuthModel.getToken();

    try {
      const response = await fetch(`${BASE_API}/stories`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to fetch from API');

      const data = await response.json();
      const stories = data.listStory || [];

      const storys = stories.map((story) => ({
        id: story.id,
        description: story.description || 'No Description',
        image:
          story.photoUrl && story.photoUrl !== '[uploaded]'
            ? story.photoUrl
            : null,
        imageBlob: null,
        uploader: story.name || 'Anonim',
        createdAt: story.createdAt || '',
        location: {
          lat: story.lat || 0,
          lng: story.lon || 0,
        },
        isLocal: false,
      }));

      // Simpan ke localStorage saja sebagai cache ringan
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storys));

      return storys;
    } catch (error) {
      console.error('❌ Failed to fetch data from API:', error.message);

      // Fallback ke IndexedDB, lalu localStorage
      const cachedFromDB = await StoryDB.getLocalStories();
      if (cachedFromDB.length > 0) return cachedFromDB;

      const cached = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      return cached;
    }
  }

  // Tambah story baru via API & simpan ke IndexedDB lokal
  static async addStory({ description, photo, lat, lon }) {
    const token = AuthModel.getToken();

    const formData = new FormData();
    formData.append('description', description);
    formData.append('photo', photo);
    if (lat && lon) {
      formData.append('lat', lat);
      formData.append('lon', lon);
    }

    try {
      const response = await fetch(`${BASE_API}/stories`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to add data');
      }

      const newStory = {
        id: result.story?.id || Date.now(),
        description,
        image: null,
        imageBlob: photo,
        uploader: 'You',
        createdAt: new Date().toISOString(),
        location: {
          lat: lat || 0,
          lng: lon || 0,
        },
        isLocal: true,
      };

      // Simpan juga ke cache
      const cached = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      cached.push(newStory);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cached));

      await StoryDB.saveStory(newStory);

      return result;
    } catch (error) {
      console.error('Add Story Error:', error);
      throw new Error('Failed to add story data');
    }
  }
}
