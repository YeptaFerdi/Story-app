// sw.js — final versi dengan precache offline.html manual

import { precacheAndRoute, precache } from 'workbox-precaching';
import { registerRoute, setCatchHandler } from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';

// Precache seluruh manifest dari InjectManifest
precacheAndRoute(self.__WB_MANIFEST);

// Tambahkan offline.html secara eksplisit ke precache
precache([{ url: 'offline.html', revision: null }]);

// HTML documents → Network First
registerRoute(
  ({ request }) => request.destination === 'document',
  new NetworkFirst()
);

// Gambar → Cache First
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

// Fallback jika offline
const offlinePage = `${self.location.origin}${self.registration.scope}offline.html`;

setCatchHandler(async ({ event }) => {
  if (event.request.destination === 'document') {
    return caches.match(offlinePage);
  }
  return Response.error();
});

// Push Notification handler
self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};
  const title = data.title || 'New Story!';
  const options = {
    body: data.body || 'A new story is available. Check it out!',
    icon: `${self.registration.scope}asset/icons/logo.png`,
    badge: `${self.registration.scope}asset/icons/logo.png`,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
