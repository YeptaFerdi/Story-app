import { AuthModel } from './AuthModel.js';
import { StoryDB } from '../utils/story-db.js'; // pastikan path benar

const BASE_API = 'https://story-api.dicoding.dev/v1';
const LOCAL_STORAGE_KEY = 'cachedStories';

export class StoryModel {
  // Ambil data dari API atau fallback ke cache (localStorage)
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
        image: story.photoUrl,
        uploader: story.name || 'Anonim',
        createdAt: story.createdAt || '',
        location: {
          lat: story.lat || 0,
          lng: story.lon || 0,
        },
        isLocal: false,
      }));

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storys));
      await Promise.all(storys.map((s) => StoryDB.saveStory(s)));

      return storys;
    } catch (error) {
      console.error('Failed to fetch data from API:', error.message);

      // Ambil dari IndexedDB sebagai fallback selain localStorage
      const cachedFromDB = await StoryDB.getAllStories();
      if (cachedFromDB.length > 0) {
        return cachedFromDB;
      }

      // Kalau IndexedDB kosong, fallback ke localStorage
      const cached = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      return cached;
    }
  }

  // Tambah story ke API, cache localStorage, dan IndexedDB
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
        image: '[uploaded]',
        imageBlob: photo,
        uploader: 'You',
        createdAt: new Date().toISOString(),
        location: {
          lat: lat || 0,
          lng: lon || 0,
        },
        isLocal: true, // <- Tambahkan flag story lokal
      };

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
