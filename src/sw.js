// sw.js — final untuk InjectManifest (Workbox)

import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, setCatchHandler } from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';

// Precache semua file hasil build
precacheAndRoute(self.__WB_MANIFEST);

// HTML: Network first agar dapat konten terbaru
registerRoute(
  ({ request }) => request.destination === 'document',
  new NetworkFirst()
);

// Gambar: Cache First
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      {
        cacheWillUpdate: async ({ response }) =>
          response.status === 200 ? response : null,
      },
    ],
  })
);

// Fallback offline untuk dokumen HTML
setCatchHandler(async ({ event }) => {
  if (event.request.destination === 'document') {
    return caches.match('/offline.html');
  }

  return Response.error();
});

// Push Notification
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
