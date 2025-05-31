/*! For license information please see sw.js.LICENSE.txt */
(() => {
  'use strict';
  var e = {
      136: () => {
        try {
          self['workbox:core:7.2.0'] && _();
        } catch (e) {}
      },
      390: () => {
        try {
          self['workbox:strategies:7.2.0'] && _();
        } catch (e) {}
      },
      447: () => {
        try {
          self['workbox:precaching:7.2.0'] && _();
        } catch (e) {}
      },
      608: () => {
        try {
          self['workbox:routing:7.2.0'] && _();
        } catch (e) {}
      },
    },
    t = {};
  function s(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var a = (t[n] = { exports: {} });
    return e[n](a, a.exports, s), a.exports;
  }
  s(136);
  const n = (e, ...t) => {
    let s = e;
    return t.length > 0 && (s += ` :: ${JSON.stringify(t)}`), s;
  };
  class r extends Error {
    constructor(e, t) {
      super(n(e, t)), (this.name = e), (this.details = t);
    }
  }
  const a = {
      googleAnalytics: 'googleAnalytics',
      precache: 'precache-v2',
      prefix: 'workbox',
      runtime: 'runtime',
      suffix: 'undefined' != typeof registration ? registration.scope : '',
    },
    i = (e) =>
      [a.prefix, e, a.suffix].filter((e) => e && e.length > 0).join('-'),
    o = (e) => e || i(a.precache),
    c = (e) => e || i(a.runtime);
  function h(e, t) {
    const s = t();
    return e.waitUntil(s), s;
  }
  s(447);
  function l(e) {
    if (!e) throw new r('add-to-cache-list-unexpected-type', { entry: e });
    if ('string' == typeof e) {
      const t = new URL(e, location.href);
      return { cacheKey: t.href, url: t.href };
    }
    const { revision: t, url: s } = e;
    if (!s) throw new r('add-to-cache-list-unexpected-type', { entry: e });
    if (!t) {
      const e = new URL(s, location.href);
      return { cacheKey: e.href, url: e.href };
    }
    const n = new URL(s, location.href),
      a = new URL(s, location.href);
    return (
      n.searchParams.set('__WB_REVISION__', t),
      { cacheKey: n.href, url: a.href }
    );
  }
  class u {
    constructor() {
      (this.updatedURLs = []),
        (this.notUpdatedURLs = []),
        (this.handlerWillStart = async ({ request: e, state: t }) => {
          t && (t.originalRequest = e);
        }),
        (this.cachedResponseWillBeUsed = async ({
          event: e,
          state: t,
          cachedResponse: s,
        }) => {
          if (
            'install' === e.type &&
            t &&
            t.originalRequest &&
            t.originalRequest instanceof Request
          ) {
            const e = t.originalRequest.url;
            s ? this.notUpdatedURLs.push(e) : this.updatedURLs.push(e);
          }
          return s;
        });
    }
  }
  class f {
    constructor({ precacheController: e }) {
      (this.cacheKeyWillBeUsed = async ({ request: e, params: t }) => {
        const s =
          (null == t ? void 0 : t.cacheKey) ||
          this._precacheController.getCacheKeyForURL(e.url);
        return s ? new Request(s, { headers: e.headers }) : e;
      }),
        (this._precacheController = e);
    }
  }
  let d;
  async function p(e, t) {
    let s = null;
    if (e.url) {
      s = new URL(e.url).origin;
    }
    if (s !== self.location.origin)
      throw new r('cross-origin-copy-response', { origin: s });
    const n = e.clone(),
      a = {
        headers: new Headers(n.headers),
        status: n.status,
        statusText: n.statusText,
      },
      i = t ? t(a) : a,
      o = (function () {
        if (void 0 === d) {
          const e = new Response('');
          if ('body' in e)
            try {
              new Response(e.body), (d = !0);
            } catch (e) {
              d = !1;
            }
          d = !1;
        }
        return d;
      })()
        ? n.body
        : await n.blob();
    return new Response(o, i);
  }
  const y = (e) =>
    new URL(String(e), location.href).href.replace(
      new RegExp(`^${location.origin}`),
      ''
    );
  function g(e, t) {
    const s = new URL(e);
    for (const e of t) s.searchParams.delete(e);
    return s.href;
  }
  class w {
    constructor() {
      this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  }
  const m = new Set();
  function v(e) {
    return new Promise((t) => setTimeout(t, e));
  }
  s(390);
  function b(e) {
    return 'string' == typeof e ? new Request(e) : e;
  }
  class R {
    constructor(e, t) {
      (this._cacheKeys = {}),
        Object.assign(this, t),
        (this.event = t.event),
        (this._strategy = e),
        (this._handlerDeferred = new w()),
        (this._extendLifetimePromises = []),
        (this._plugins = [...e.plugins]),
        (this._pluginStateMap = new Map());
      for (const e of this._plugins) this._pluginStateMap.set(e, {});
      this.event.waitUntil(this._handlerDeferred.promise);
    }
    async fetch(e) {
      const { event: t } = this;
      let s = b(e);
      if (
        'navigate' === s.mode &&
        t instanceof FetchEvent &&
        t.preloadResponse
      ) {
        const e = await t.preloadResponse;
        if (e) return e;
      }
      const n = this.hasCallback('fetchDidFail') ? s.clone() : null;
      try {
        for (const e of this.iterateCallbacks('requestWillFetch'))
          s = await e({ request: s.clone(), event: t });
      } catch (e) {
        if (e instanceof Error)
          throw new r('plugin-error-request-will-fetch', {
            thrownErrorMessage: e.message,
          });
      }
      const a = s.clone();
      try {
        let e;
        e = await fetch(
          s,
          'navigate' === s.mode ? void 0 : this._strategy.fetchOptions
        );
        for (const s of this.iterateCallbacks('fetchDidSucceed'))
          e = await s({ event: t, request: a, response: e });
        return e;
      } catch (e) {
        throw (
          (n &&
            (await this.runCallbacks('fetchDidFail', {
              error: e,
              event: t,
              originalRequest: n.clone(),
              request: a.clone(),
            })),
          e)
        );
      }
    }
    async fetchAndCachePut(e) {
      const t = await this.fetch(e),
        s = t.clone();
      return this.waitUntil(this.cachePut(e, s)), t;
    }
    async cacheMatch(e) {
      const t = b(e);
      let s;
      const { cacheName: n, matchOptions: r } = this._strategy,
        a = await this.getCacheKey(t, 'read'),
        i = Object.assign(Object.assign({}, r), { cacheName: n });
      s = await caches.match(a, i);
      for (const e of this.iterateCallbacks('cachedResponseWillBeUsed'))
        s =
          (await e({
            cacheName: n,
            matchOptions: r,
            cachedResponse: s,
            request: a,
            event: this.event,
          })) || void 0;
      return s;
    }
    async cachePut(e, t) {
      const s = b(e);
      await v(0);
      const n = await this.getCacheKey(s, 'write');
      if (!t) throw new r('cache-put-with-no-response', { url: y(n.url) });
      const a = await this._ensureResponseSafeToCache(t);
      if (!a) return !1;
      const { cacheName: i, matchOptions: o } = this._strategy,
        c = await self.caches.open(i),
        h = this.hasCallback('cacheDidUpdate'),
        l = h
          ? await (async function (e, t, s, n) {
              const r = g(t.url, s);
              if (t.url === r) return e.match(t, n);
              const a = Object.assign(Object.assign({}, n), {
                  ignoreSearch: !0,
                }),
                i = await e.keys(t, a);
              for (const t of i) if (r === g(t.url, s)) return e.match(t, n);
            })(c, n.clone(), ['__WB_REVISION__'], o)
          : null;
      try {
        await c.put(n, h ? a.clone() : a);
      } catch (e) {
        if (e instanceof Error)
          throw (
            ('QuotaExceededError' === e.name &&
              (await (async function () {
                for (const e of m) await e();
              })()),
            e)
          );
      }
      for (const e of this.iterateCallbacks('cacheDidUpdate'))
        await e({
          cacheName: i,
          oldResponse: l,
          newResponse: a.clone(),
          request: n,
          event: this.event,
        });
      return !0;
    }
    async getCacheKey(e, t) {
      const s = `${e.url} | ${t}`;
      if (!this._cacheKeys[s]) {
        let n = e;
        for (const e of this.iterateCallbacks('cacheKeyWillBeUsed'))
          n = b(
            await e({
              mode: t,
              request: n,
              event: this.event,
              params: this.params,
            })
          );
        this._cacheKeys[s] = n;
      }
      return this._cacheKeys[s];
    }
    hasCallback(e) {
      for (const t of this._strategy.plugins) if (e in t) return !0;
      return !1;
    }
    async runCallbacks(e, t) {
      for (const s of this.iterateCallbacks(e)) await s(t);
    }
    *iterateCallbacks(e) {
      for (const t of this._strategy.plugins)
        if ('function' == typeof t[e]) {
          const s = this._pluginStateMap.get(t),
            n = (n) => {
              const r = Object.assign(Object.assign({}, n), { state: s });
              return t[e](r);
            };
          yield n;
        }
    }
    waitUntil(e) {
      return this._extendLifetimePromises.push(e), e;
    }
    async doneWaiting() {
      let e;
      for (; (e = this._extendLifetimePromises.shift()); ) await e;
    }
    destroy() {
      this._handlerDeferred.resolve(null);
    }
    async _ensureResponseSafeToCache(e) {
      let t = e,
        s = !1;
      for (const e of this.iterateCallbacks('cacheWillUpdate'))
        if (
          ((t =
            (await e({
              request: this.request,
              response: t,
              event: this.event,
            })) || void 0),
          (s = !0),
          !t)
        )
          break;
      return s || (t && 200 !== t.status && (t = void 0)), t;
    }
  }
  class C {
    constructor(e = {}) {
      (this.cacheName = c(e.cacheName)),
        (this.plugins = e.plugins || []),
        (this.fetchOptions = e.fetchOptions),
        (this.matchOptions = e.matchOptions);
    }
    handle(e) {
      const [t] = this.handleAll(e);
      return t;
    }
    handleAll(e) {
      e instanceof FetchEvent && (e = { event: e, request: e.request });
      const t = e.event,
        s = 'string' == typeof e.request ? new Request(e.request) : e.request,
        n = 'params' in e ? e.params : void 0,
        r = new R(this, { event: t, request: s, params: n }),
        a = this._getResponse(r, s, t);
      return [a, this._awaitComplete(a, r, s, t)];
    }
    async _getResponse(e, t, s) {
      let n;
      await e.runCallbacks('handlerWillStart', { event: s, request: t });
      try {
        if (((n = await this._handle(t, e)), !n || 'error' === n.type))
          throw new r('no-response', { url: t.url });
      } catch (r) {
        if (r instanceof Error)
          for (const a of e.iterateCallbacks('handlerDidError'))
            if (((n = await a({ error: r, event: s, request: t })), n)) break;
        if (!n) throw r;
      }
      for (const r of e.iterateCallbacks('handlerWillRespond'))
        n = await r({ event: s, request: t, response: n });
      return n;
    }
    async _awaitComplete(e, t, s, n) {
      let r, a;
      try {
        r = await e;
      } catch (a) {}
      try {
        await t.runCallbacks('handlerDidRespond', {
          event: n,
          request: s,
          response: r,
        }),
          await t.doneWaiting();
      } catch (e) {
        e instanceof Error && (a = e);
      }
      if (
        (await t.runCallbacks('handlerDidComplete', {
          event: n,
          request: s,
          response: r,
          error: a,
        }),
        t.destroy(),
        a)
      )
        throw a;
    }
  }
  class q extends C {
    constructor(e = {}) {
      (e.cacheName = o(e.cacheName)),
        super(e),
        (this._fallbackToNetwork = !1 !== e.fallbackToNetwork),
        this.plugins.push(q.copyRedirectedCacheableResponsesPlugin);
    }
    async _handle(e, t) {
      const s = await t.cacheMatch(e);
      return (
        s ||
        (t.event && 'install' === t.event.type
          ? await this._handleInstall(e, t)
          : await this._handleFetch(e, t))
      );
    }
    async _handleFetch(e, t) {
      let s;
      const n = t.params || {};
      if (!this._fallbackToNetwork)
        throw new r('missing-precache-entry', {
          cacheName: this.cacheName,
          url: e.url,
        });
      {
        0;
        const r = n.integrity,
          a = e.integrity,
          i = !a || a === r;
        if (
          ((s = await t.fetch(
            new Request(e, {
              integrity: 'no-cors' !== e.mode ? a || r : void 0,
            })
          )),
          r && i && 'no-cors' !== e.mode)
        ) {
          this._useDefaultCacheabilityPluginIfNeeded();
          await t.cachePut(e, s.clone());
          0;
        }
      }
      return s;
    }
    async _handleInstall(e, t) {
      this._useDefaultCacheabilityPluginIfNeeded();
      const s = await t.fetch(e);
      if (!(await t.cachePut(e, s.clone())))
        throw new r('bad-precaching-response', {
          url: e.url,
          status: s.status,
        });
      return s;
    }
    _useDefaultCacheabilityPluginIfNeeded() {
      let e = null,
        t = 0;
      for (const [s, n] of this.plugins.entries())
        n !== q.copyRedirectedCacheableResponsesPlugin &&
          (n === q.defaultPrecacheCacheabilityPlugin && (e = s),
          n.cacheWillUpdate && t++);
      0 === t
        ? this.plugins.push(q.defaultPrecacheCacheabilityPlugin)
        : t > 1 && null !== e && this.plugins.splice(e, 1);
    }
  }
  (q.defaultPrecacheCacheabilityPlugin = {
    cacheWillUpdate: async ({ response: e }) =>
      !e || e.status >= 400 ? null : e,
  }),
    (q.copyRedirectedCacheableResponsesPlugin = {
      cacheWillUpdate: async ({ response: e }) =>
        e.redirected ? await p(e) : e,
    });
  class U {
    constructor({
      cacheName: e,
      plugins: t = [],
      fallbackToNetwork: s = !0,
    } = {}) {
      (this._urlsToCacheKeys = new Map()),
        (this._urlsToCacheModes = new Map()),
        (this._cacheKeysToIntegrities = new Map()),
        (this._strategy = new q({
          cacheName: o(e),
          plugins: [...t, new f({ precacheController: this })],
          fallbackToNetwork: s,
        })),
        (this.install = this.install.bind(this)),
        (this.activate = this.activate.bind(this));
    }
    get strategy() {
      return this._strategy;
    }
    precache(e) {
      this.addToCacheList(e),
        this._installAndActiveListenersAdded ||
          (self.addEventListener('install', this.install),
          self.addEventListener('activate', this.activate),
          (this._installAndActiveListenersAdded = !0));
    }
    addToCacheList(e) {
      const t = [];
      for (const s of e) {
        'string' == typeof s
          ? t.push(s)
          : s && void 0 === s.revision && t.push(s.url);
        const { cacheKey: e, url: n } = l(s),
          a = 'string' != typeof s && s.revision ? 'reload' : 'default';
        if (this._urlsToCacheKeys.has(n) && this._urlsToCacheKeys.get(n) !== e)
          throw new r('add-to-cache-list-conflicting-entries', {
            firstEntry: this._urlsToCacheKeys.get(n),
            secondEntry: e,
          });
        if ('string' != typeof s && s.integrity) {
          if (
            this._cacheKeysToIntegrities.has(e) &&
            this._cacheKeysToIntegrities.get(e) !== s.integrity
          )
            throw new r('add-to-cache-list-conflicting-integrities', {
              url: n,
            });
          this._cacheKeysToIntegrities.set(e, s.integrity);
        }
        if (
          (this._urlsToCacheKeys.set(n, e),
          this._urlsToCacheModes.set(n, a),
          t.length > 0)
        ) {
          const e = `Workbox is precaching URLs without revision info: ${t.join(
            ', '
          )}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
          console.warn(e);
        }
      }
    }
    install(e) {
      return h(e, async () => {
        const t = new u();
        this.strategy.plugins.push(t);
        for (const [t, s] of this._urlsToCacheKeys) {
          const n = this._cacheKeysToIntegrities.get(s),
            r = this._urlsToCacheModes.get(t),
            a = new Request(t, {
              integrity: n,
              cache: r,
              credentials: 'same-origin',
            });
          await Promise.all(
            this.strategy.handleAll({
              params: { cacheKey: s },
              request: a,
              event: e,
            })
          );
        }
        const { updatedURLs: s, notUpdatedURLs: n } = t;
        return { updatedURLs: s, notUpdatedURLs: n };
      });
    }
    activate(e) {
      return h(e, async () => {
        const e = await self.caches.open(this.strategy.cacheName),
          t = await e.keys(),
          s = new Set(this._urlsToCacheKeys.values()),
          n = [];
        for (const r of t) s.has(r.url) || (await e.delete(r), n.push(r.url));
        return { deletedURLs: n };
      });
    }
    getURLsToCacheKeys() {
      return this._urlsToCacheKeys;
    }
    getCachedURLs() {
      return [...this._urlsToCacheKeys.keys()];
    }
    getCacheKeyForURL(e) {
      const t = new URL(e, location.href);
      return this._urlsToCacheKeys.get(t.href);
    }
    getIntegrityForCacheKey(e) {
      return this._cacheKeysToIntegrities.get(e);
    }
    async matchPrecache(e) {
      const t = e instanceof Request ? e.url : e,
        s = this.getCacheKeyForURL(t);
      if (s) {
        return (await self.caches.open(this.strategy.cacheName)).match(s);
      }
    }
    createHandlerBoundToURL(e) {
      const t = this.getCacheKeyForURL(e);
      if (!t) throw new r('non-precached-url', { url: e });
      return (s) => (
        (s.request = new Request(e)),
        (s.params = Object.assign({ cacheKey: t }, s.params)),
        this.strategy.handle(s)
      );
    }
  }
  let T;
  const k = () => (T || (T = new U()), T);
  s(608);
  const L = (e) => (e && 'object' == typeof e ? e : { handle: e });
  class P {
    constructor(e, t, s = 'GET') {
      (this.handler = L(t)), (this.match = e), (this.method = s);
    }
    setCatchHandler(e) {
      this.catchHandler = L(e);
    }
  }
  class K extends P {
    constructor(e, t, s) {
      super(
        ({ url: t }) => {
          const s = e.exec(t.href);
          if (s && (t.origin === location.origin || 0 === s.index))
            return s.slice(1);
        },
        t,
        s
      );
    }
  }
  class x {
    constructor() {
      (this._routes = new Map()), (this._defaultHandlerMap = new Map());
    }
    get routes() {
      return this._routes;
    }
    addFetchListener() {
      self.addEventListener('fetch', (e) => {
        const { request: t } = e,
          s = this.handleRequest({ request: t, event: e });
        s && e.respondWith(s);
      });
    }
    addCacheListener() {
      self.addEventListener('message', (e) => {
        if (e.data && 'CACHE_URLS' === e.data.type) {
          const { payload: t } = e.data;
          0;
          const s = Promise.all(
            t.urlsToCache.map((t) => {
              'string' == typeof t && (t = [t]);
              const s = new Request(...t);
              return this.handleRequest({ request: s, event: e });
            })
          );
          e.waitUntil(s),
            e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0));
        }
      });
    }
    handleRequest({ request: e, event: t }) {
      const s = new URL(e.url, location.href);
      if (!s.protocol.startsWith('http')) return void 0;
      const n = s.origin === location.origin,
        { params: r, route: a } = this.findMatchingRoute({
          event: t,
          request: e,
          sameOrigin: n,
          url: s,
        });
      let i = a && a.handler;
      const o = e.method;
      if (
        (!i &&
          this._defaultHandlerMap.has(o) &&
          (i = this._defaultHandlerMap.get(o)),
        !i)
      )
        return void 0;
      let c;
      try {
        c = i.handle({ url: s, request: e, event: t, params: r });
      } catch (e) {
        c = Promise.reject(e);
      }
      const h = a && a.catchHandler;
      return (
        c instanceof Promise &&
          (this._catchHandler || h) &&
          (c = c.catch(async (n) => {
            if (h) {
              0;
              try {
                return await h.handle({
                  url: s,
                  request: e,
                  event: t,
                  params: r,
                });
              } catch (e) {
                e instanceof Error && (n = e);
              }
            }
            if (this._catchHandler)
              return this._catchHandler.handle({
                url: s,
                request: e,
                event: t,
              });
            throw n;
          })),
        c
      );
    }
    findMatchingRoute({ url: e, sameOrigin: t, request: s, event: n }) {
      const r = this._routes.get(s.method) || [];
      for (const a of r) {
        let r;
        const i = a.match({ url: e, sameOrigin: t, request: s, event: n });
        if (i)
          return (
            (r = i),
            ((Array.isArray(r) && 0 === r.length) ||
              (i.constructor === Object && 0 === Object.keys(i).length) ||
              'boolean' == typeof i) &&
              (r = void 0),
            { route: a, params: r }
          );
      }
      return {};
    }
    setDefaultHandler(e, t = 'GET') {
      this._defaultHandlerMap.set(t, L(e));
    }
    setCatchHandler(e) {
      this._catchHandler = L(e);
    }
    registerRoute(e) {
      this._routes.has(e.method) || this._routes.set(e.method, []),
        this._routes.get(e.method).push(e);
    }
    unregisterRoute(e) {
      if (!this._routes.has(e.method))
        throw new r('unregister-route-but-not-found-with-method', {
          method: e.method,
        });
      const t = this._routes.get(e.method).indexOf(e);
      if (!(t > -1)) throw new r('unregister-route-route-not-registered');
      this._routes.get(e.method).splice(t, 1);
    }
  }
  let N;
  const O = () => (
    N || ((N = new x()), N.addFetchListener(), N.addCacheListener()), N
  );
  function E(e, t, s) {
    let n;
    if ('string' == typeof e) {
      const r = new URL(e, location.href);
      0;
      n = new P(({ url: e }) => e.href === r.href, t, s);
    } else if (e instanceof RegExp) n = new K(e, t, s);
    else if ('function' == typeof e) n = new P(e, t, s);
    else {
      if (!(e instanceof P))
        throw new r('unsupported-route-type', {
          moduleName: 'workbox-routing',
          funcName: 'registerRoute',
          paramName: 'capture',
        });
      n = e;
    }
    return O().registerRoute(n), n;
  }
  class M extends P {
    constructor(e, t) {
      super(({ request: s }) => {
        const n = e.getURLsToCacheKeys();
        for (const r of (function* (
          e,
          {
            ignoreURLParametersMatching: t = [/^utm_/, /^fbclid$/],
            directoryIndex: s = 'index.html',
            cleanURLs: n = !0,
            urlManipulation: r,
          } = {}
        ) {
          const a = new URL(e, location.href);
          (a.hash = ''), yield a.href;
          const i = (function (e, t = []) {
            for (const s of [...e.searchParams.keys()])
              t.some((e) => e.test(s)) && e.searchParams.delete(s);
            return e;
          })(a, t);
          if ((yield i.href, s && i.pathname.endsWith('/'))) {
            const e = new URL(i.href);
            (e.pathname += s), yield e.href;
          }
          if (n) {
            const e = new URL(i.href);
            (e.pathname += '.html'), yield e.href;
          }
          if (r) {
            const e = r({ url: a });
            for (const t of e) yield t.href;
          }
        })(s.url, t)) {
          const t = n.get(r);
          if (t) {
            return { cacheKey: t, integrity: e.getIntegrityForCacheKey(t) };
          }
        }
      }, e.strategy);
    }
  }
  const S = {
    cacheWillUpdate: async ({ response: e }) =>
      200 === e.status || 0 === e.status ? e : null,
  };
  function j() {
    var e,
      t,
      s = 'function' == typeof Symbol ? Symbol : {},
      n = s.iterator || '@@iterator',
      r = s.toStringTag || '@@toStringTag';
    function a(s, n, r, a) {
      var c = n && n.prototype instanceof o ? n : o,
        h = Object.create(c.prototype);
      return (
        W(
          h,
          '_invoke',
          (function (s, n, r) {
            var a,
              o,
              c,
              h = 0,
              l = r || [],
              u = !1,
              f = {
                p: 0,
                n: 0,
                v: e,
                a: d,
                f: d.bind(e, 4),
                d: function (t, s) {
                  return (a = t), (o = 0), (c = e), (f.n = s), i;
                },
              };
            function d(s, n) {
              for (o = s, c = n, t = 0; !u && h && !r && t < l.length; t++) {
                var r,
                  a = l[t],
                  d = f.p,
                  p = a[2];
                s > 3
                  ? (r = p === n) &&
                    ((o = a[4] || 3),
                    (c = a[5] === e ? a[3] : a[5]),
                    (a[4] = 3),
                    (a[5] = e))
                  : a[0] <= d &&
                    ((r = s < 2 && d < a[1])
                      ? ((o = 0), (f.v = n), (f.n = a[1]))
                      : d < p &&
                        (r = s < 3 || a[0] > n || n > p) &&
                        ((a[4] = s), (a[5] = n), (f.n = p), (o = 0)));
              }
              if (r || s > 1) return i;
              throw ((u = !0), n);
            }
            return function (r, l, p) {
              if (h > 1) throw TypeError('Generator is already running');
              for (
                u && 1 === l && d(l, p), o = l, c = p;
                (t = o < 2 ? e : c) || !u;

              ) {
                a ||
                  (o
                    ? o < 3
                      ? (o > 1 && (f.n = -1), d(o, c))
                      : (f.n = c)
                    : (f.v = c));
                try {
                  if (((h = 2), a)) {
                    if ((o || (r = 'next'), (t = a[r]))) {
                      if (!(t = t.call(a, c)))
                        throw TypeError('iterator result is not an object');
                      if (!t.done) return t;
                      (c = t.value), o < 2 && (o = 0);
                    } else
                      1 === o && (t = a.return) && t.call(a),
                        o < 2 &&
                          ((c = TypeError(
                            "The iterator does not provide a '" + r + "' method"
                          )),
                          (o = 1));
                    a = e;
                  } else if ((t = (u = f.n < 0) ? c : s.call(n, f)) !== i)
                    break;
                } catch (t) {
                  (a = e), (o = 1), (c = t);
                } finally {
                  h = 1;
                }
              }
              return { value: t, done: u };
            };
          })(s, r, a),
          !0
        ),
        h
      );
    }
    var i = {};
    function o() {}
    function c() {}
    function h() {}
    t = Object.getPrototypeOf;
    var l = [][n]
        ? t(t([][n]()))
        : (W((t = {}), n, function () {
            return this;
          }),
          t),
      u = (h.prototype = o.prototype = Object.create(l));
    function f(e) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(e, h)
          : ((e.__proto__ = h), W(e, r, 'GeneratorFunction')),
        (e.prototype = Object.create(u)),
        e
      );
    }
    return (
      (c.prototype = h),
      W(u, 'constructor', h),
      W(h, 'constructor', c),
      (c.displayName = 'GeneratorFunction'),
      W(h, r, 'GeneratorFunction'),
      W(u),
      W(u, r, 'Generator'),
      W(u, n, function () {
        return this;
      }),
      W(u, 'toString', function () {
        return '[object Generator]';
      }),
      (j = function () {
        return { w: a, m: f };
      })()
    );
  }
  function W(e, t, s, n) {
    var r = Object.defineProperty;
    try {
      r({}, '', {});
    } catch (e) {
      r = 0;
    }
    (W = function (e, t, s, n) {
      if (t)
        r
          ? r(e, t, {
              value: s,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            })
          : (e[t] = s);
      else {
        var a = function (t, s) {
          W(e, t, function (e) {
            return this._invoke(t, s, e);
          });
        };
        a('next', 0), a('throw', 1), a('return', 2);
      }
    }),
      W(e, t, s, n);
  }
  function I(e, t, s, n, r, a, i) {
    try {
      var o = e[a](i),
        c = o.value;
    } catch (e) {
      return void s(e);
    }
    o.done ? t(c) : Promise.resolve(c).then(n, r);
  }
  function A(e) {
    return function () {
      var t = this,
        s = arguments;
      return new Promise(function (n, r) {
        var a = e.apply(t, s);
        function i(e) {
          I(a, n, r, i, o, 'next', e);
        }
        function o(e) {
          I(a, n, r, i, o, 'throw', e);
        }
        i(void 0);
      });
    };
  }
  var F, H;
  (function (e) {
    k().precache(e);
  })([
    { revision: null, url: '/Story-app/443.827de83305c3f166e095.js' },
    {
      revision: 'a09afd57099dc21e9263ff61a08dff24',
      url: '/Story-app/443.827de83305c3f166e095.js.LICENSE.txt',
    },
    {
      revision: '7d66ebdc1cb7e01cac323efb69b42ab2',
      url: '/Story-app/asset/favicon.png',
    },
    {
      revision: '4cf2c5af954121380e3c0acfc1cae8ef',
      url: '/Story-app/asset/icons/logo.png',
    },
    {
      revision: '49464d290fb20f46d2b6ac0b9ad6feed',
      url: '/Story-app/asset/screenshots/home.png',
    },
    {
      revision: '4e69ea574ddea051b25b1497e9136ab7',
      url: '/Story-app/asset/screenshots/home2.png',
    },
    {
      revision: '39e9161a14388ca1b04fb80f88a56fd5',
      url: '/Story-app/asset/screenshots/home3.png',
    },
    {
      revision: 'e38853625ee6ee571b301e0ef8c87d7c',
      url: '/Story-app/asset/screenshots/mobile.png',
    },
    {
      revision: 'd7f904975d8a0651f4db67b1b7232d59',
      url: '/Story-app/asset/screenshots/mobile2.png',
    },
    {
      revision: 'dcb91a42d049f480b84485c8dba89d97',
      url: '/Story-app/asset/screenshots/mobile3.png',
    },
    {
      revision: '7d66ebdc1cb7e01cac323efb69b42ab2',
      url: '/Story-app/favicon.png',
    },
    {
      revision: '4f0283c6ce28e888000e978e537a6a56',
      url: '/Story-app/images/layers-2x.png',
    },
    {
      revision: 'a6137456ed160d7606981aa57c559898',
      url: '/Story-app/images/layers.png',
    },
    {
      revision: '2273e3d8ad9264b7daa5bdbf8e6b47f8',
      url: '/Story-app/images/marker-icon.png',
    },
    {
      revision: '44a526eed258222515aa21eaffd14a96',
      url: '/Story-app/images/marker-shadow.png',
    },
    {
      revision: '6bbab0632508064497a0a8cbcef11777',
      url: '/Story-app/index.html',
    },
    {
      revision: '4f0283c6ce28e888000e978e537a6a56',
      url: '/Story-app/leaflet/images/layers-2x.png',
    },
    {
      revision: 'a6137456ed160d7606981aa57c559898',
      url: '/Story-app/leaflet/images/layers.png',
    },
    {
      revision: '401d815dc206b8dc1b17cd0e37695975',
      url: '/Story-app/leaflet/images/marker-icon-2x.png',
    },
    {
      revision: '2273e3d8ad9264b7daa5bdbf8e6b47f8',
      url: '/Story-app/leaflet/images/marker-icon.png',
    },
    {
      revision: '44a526eed258222515aa21eaffd14a96',
      url: '/Story-app/leaflet/images/marker-shadow.png',
    },
    { revision: null, url: '/Story-app/main.99aaf452d6794b79f431.js' },
    {
      revision: '617fd376435e7230f7d7a2c482065b3f',
      url: '/Story-app/main.99aaf452d6794b79f431.js.LICENSE.txt',
    },
    { revision: null, url: '/Story-app/main.d36a62a1a90eaf209938.css' },
    {
      revision: 'ef20b50d97e747eca0e81da0ab80ba75',
      url: '/Story-app/manifest.json',
    },
    {
      revision: '24ee57cff99ef03247f241518d7285d7',
      url: '/Story-app/offline.html',
    },
    {
      revision: '617fd376435e7230f7d7a2c482065b3f',
      url: '/Story-app/sw.js.LICENSE.txt',
    },
  ]),
    (function (e) {
      const t = k();
      E(new M(t, e));
    })(F),
    E(
      function (e) {
        return 'document' === e.request.destination;
      },
      new (class extends C {
        constructor(e = {}) {
          super(e),
            this.plugins.some((e) => 'cacheWillUpdate' in e) ||
              this.plugins.unshift(S),
            (this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0);
        }
        async _handle(e, t) {
          const s = [];
          const n = [];
          let a;
          if (this._networkTimeoutSeconds) {
            const { id: r, promise: i } = this._getTimeoutPromise({
              request: e,
              logs: s,
              handler: t,
            });
            (a = r), n.push(i);
          }
          const i = this._getNetworkPromise({
            timeoutId: a,
            request: e,
            logs: s,
            handler: t,
          });
          n.push(i);
          const o = await t.waitUntil(
            (async () => (await t.waitUntil(Promise.race(n))) || (await i))()
          );
          if (!o) throw new r('no-response', { url: e.url });
          return o;
        }
        _getTimeoutPromise({ request: e, logs: t, handler: s }) {
          let n;
          return {
            promise: new Promise((t) => {
              n = setTimeout(async () => {
                t(await s.cacheMatch(e));
              }, 1e3 * this._networkTimeoutSeconds);
            }),
            id: n,
          };
        }
        async _getNetworkPromise({
          timeoutId: e,
          request: t,
          logs: s,
          handler: n,
        }) {
          let r, a;
          try {
            a = await n.fetchAndCachePut(t);
          } catch (e) {
            e instanceof Error && (r = e);
          }
          return (
            e && clearTimeout(e), (!r && a) || (a = await n.cacheMatch(t)), a
          );
        }
      })()
    ),
    E(
      function (e) {
        return 'image' === e.request.destination;
      },
      new (class extends C {
        async _handle(e, t) {
          let s,
            n = await t.cacheMatch(e);
          if (n) 0;
          else {
            0;
            try {
              n = await t.fetchAndCachePut(e);
            } catch (e) {
              e instanceof Error && (s = e);
            }
            0;
          }
          if (!n) throw new r('no-response', { url: e.url, error: s });
          return n;
        }
      })({
        cacheName: 'images',
        plugins: [
          {
            cacheWillUpdate:
              ((H = A(
                j().m(function e(t) {
                  var s;
                  return j().w(function (e) {
                    for (;;)
                      if (0 === e.n)
                        return (
                          (s = t.response), e.a(2, 200 === s.status ? s : null)
                        );
                  }, e);
                })
              )),
              function (e) {
                return H.apply(this, arguments);
              }),
          },
        ],
      })
    );
  var D,
    B = ''
      .concat(self.location.origin)
      .concat(self.registration.scope, 'offline.html');
  (D = (function () {
    var e = A(
      j().m(function e(t) {
        return j().w(function (e) {
          for (;;)
            switch (e.n) {
              case 0:
                if ('document' !== t.event.request.destination) {
                  e.n = 1;
                  break;
                }
                return e.a(2, caches.match(B));
              case 1:
                return e.a(2, Response.error());
            }
        }, e);
      })
    );
    return function (t) {
      return e.apply(this, arguments);
    };
  })()),
    O().setCatchHandler(D),
    self.addEventListener('push', function (e) {
      var t,
        s = (null === (t = e.data) || void 0 === t ? void 0 : t.json()) || {},
        n = s.title || 'New Story!',
        r = {
          body: s.body || 'A new story is available. Check it out!',
          icon: ''.concat(self.registration.scope, 'asset/icons/logo.png'),
          badge: ''.concat(self.registration.scope, 'asset/icons/logo.png'),
        };
      e.waitUntil(self.registration.showNotification(n, r));
    });
})();
//# sourceMappingURL=sw.js.map
