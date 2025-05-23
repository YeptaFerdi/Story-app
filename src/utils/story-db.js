import { openDB } from 'idb';

const DB_NAME = 'story-db';
const STORE_NAME = 'stories';
const DB_VERSION = 1;

async function getDB() {
  console.log('📂 Opening IndexedDB...');
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        console.log('🆕 Creating object store:', STORE_NAME);
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
}

export const StoryDB = {
  async saveStory(story) {
    try {
      const db = await getDB();
      await db.put(STORE_NAME, story);
      console.log('✅ Story saved:', story);
    } catch (e) {
      console.error('❌ Failed to save story:', e);
    }
  },

  async getAllStories() {
    try {
      const db = await getDB();
      const stories = await db.getAll(STORE_NAME);
      console.log('📥 Retrieved stories:', stories);
      return stories;
    } catch (e) {
      console.error('❌ Failed to get stories:', e);
      return [];
    }
  },

  async getLocalStories() {
    try {
      const db = await getDB();
      const stories = await db.getAll(STORE_NAME);
      const localStories = stories.filter(s => s.isLocal);
      console.log('📥 Retrieved local stories only:', localStories);
      return localStories;
    } catch (e) {
      console.error('❌ Failed to get local stories:', e);
      return [];
    }
  },

  async deleteStory(id) {
    try {
      const db = await getDB();
      await db.delete(STORE_NAME, id);
      console.log(`🗑️ Story with id ${id} deleted`);
    } catch (e) {
      console.error(`❌ Failed to delete story ${id}:`, e);
    }
  },

  async clearAllStories() {
    try {
      const db = await getDB();
      await db.clear(STORE_NAME);
      console.log('🚮 All stories cleared');
    } catch (e) {
      console.error('❌ Failed to clear stories:', e);
    }
  },
};

