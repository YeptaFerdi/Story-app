// sw.js — Final untuk InjectManifest (Workbox)

import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, setCatchHandler } from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';

// Precache semua asset hasil build
precacheAndRoute(self.__WB_MANIFEST);

// HTML: Network First strategy
registerRoute(
  ({ request }) => request.destination === 'document',
  new NetworkFirst()
);

// Gambar: Cache First strategy
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

// Fallback offline page (harus diprecache saat build)
const offlinePage = `${self.location.origin}${self.registration.scope}offline.html`;

setCatchHandler(async ({ event }) => {
  if (event.request.destination === 'document') {
    return caches.match(offlinePage);
  }
  return Response.error();
});

// Push Notification Handler
self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};

  const title = data.title || 'New Story!';
  const options = {
    body: data.body || 'A new story is available. Check it out!',
    icon: `${self.registration.scope}asset/icons/logo.png`,
    badge: `${self.registration.scope}asset/icons/logo.png`,
    data: {
      url: data.url || `${self.registration.scope}#/home`,
    },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Notification Click Handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Fokuskan tab yang sudah ada jika tersedia
      for (const client of clientList) {
        if (client.url.includes(targetUrl) && 'focus' in client) {
          return client.focus();
        }
      }
      // Jika tidak ada, buka tab baru
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
