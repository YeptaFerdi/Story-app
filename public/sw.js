const CACHE_NAME = 'storyday-cache-v1';

const STATIC_ASSETS = [
  './',
  './index.html',
  './offline.html', // 🔧 fallback offline
  './manifest.json',
  './asset/favicon.png',
  './asset/icons/logo.png',
  './leaflet/images/marker-icon.png',
  './leaflet/images/marker-icon-2x.png',
  './leaflet/images/marker-shadow.png',
];

// Install: Cache all static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const asset of STATIC_ASSETS) {
        try {
          const response = await fetch(asset);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          await cache.put(asset, response);
          console.log('✅ Cached:', asset);
        } catch (err) {
          console.error('❌ Failed to cache:', asset, err);
        }
      }
    })
  );
  self.skipWaiting(); // activate immediately
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: Serve from cache or network fallback
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).catch(() => {
          // Show offline page if navigation fails
          if (event.request.destination === 'document') {
            return caches.match('./offline.html');
          }
        })
      );
    })
  );
});

// Push Notification Support
self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};
  const title = data.title || 'New Story!';
  const options = {
    body: data.body || 'A new story is available. Check it out!',
    icon: 'asset/icons/logo.png',
    badge: 'asset/icons/logo.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
