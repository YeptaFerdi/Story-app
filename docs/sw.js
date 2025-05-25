if (!self.define) {
  let e,
    i = {};
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    i[a] ||
      new Promise((i) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = i), document.head.appendChild(e);
        } else (e = a), importScripts(a), i();
      }).then(() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, s) => {
    const r =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (i[r]) return;
    let c = {};
    const f = (e) => a(e, r),
      o = { module: { uri: r }, exports: c, require: f };
    i[r] = Promise.all(n.map((e) => o[e] || f(e))).then((e) => (s(...e), c));
  };
}
define(['./workbox-e1b59a58'], function (e) {
  'use strict';
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '443.827de83305c3f166e095.js', revision: null },
        {
          url: '443.827de83305c3f166e095.js.LICENSE.txt',
          revision: 'a09afd57099dc21e9263ff61a08dff24',
        },
        {
          url: 'asset/favicon.png',
          revision: '7d66ebdc1cb7e01cac323efb69b42ab2',
        },
        {
          url: 'asset/icons/logo.png',
          revision: '4cf2c5af954121380e3c0acfc1cae8ef',
        },
        {
          url: 'asset/screenshots/home.png',
          revision: '1761f9fcebc645d134da6ebe67245d5c',
        },
        {
          url: 'images/layers-2x.png',
          revision: '4f0283c6ce28e888000e978e537a6a56',
        },
        {
          url: 'images/layers.png',
          revision: 'a6137456ed160d7606981aa57c559898',
        },
        {
          url: 'images/marker-icon.png',
          revision: '2273e3d8ad9264b7daa5bdbf8e6b47f8',
        },
        {
          url: 'images/marker-shadow.png',
          revision: '44a526eed258222515aa21eaffd14a96',
        },
        { url: 'index.html', revision: '78580e7e8a557dd8c16e38f2a201552b' },
        {
          url: 'leaflet/images/layers-2x.png',
          revision: '4f0283c6ce28e888000e978e537a6a56',
        },
        {
          url: 'leaflet/images/layers.png',
          revision: 'a6137456ed160d7606981aa57c559898',
        },
        {
          url: 'leaflet/images/marker-icon-2x.png',
          revision: '401d815dc206b8dc1b17cd0e37695975',
        },
        {
          url: 'leaflet/images/marker-icon.png',
          revision: '2273e3d8ad9264b7daa5bdbf8e6b47f8',
        },
        {
          url: 'leaflet/images/marker-shadow.png',
          revision: '44a526eed258222515aa21eaffd14a96',
        },
        { url: 'main.3fbf1f536a39fc141964.css', revision: null },
        { url: 'main.8a80b98bf0f1cc79e51f.js', revision: null },
        {
          url: 'main.8a80b98bf0f1cc79e51f.js.LICENSE.txt',
          revision: '617fd376435e7230f7d7a2c482065b3f',
        },
        { url: 'manifest.json', revision: '2b28dce4427586c85dce94ce047b996b' },
        { url: 'offline.html', revision: '24ee57cff99ef03247f241518d7285d7' },
      ],
      {}
    ),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL('/offline.html'))
    ),
    e.registerRoute(
      /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      new e.CacheFirst({
        cacheName: 'images',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 60, maxAgeSeconds: 2592e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /https:\/\/story-api.dicoding.dev/,
      new e.NetworkFirst({
        cacheName: 'api-cache',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 300 }),
        ],
      }),
      'GET'
    );
});
//# sourceMappingURL=sw.js.map
