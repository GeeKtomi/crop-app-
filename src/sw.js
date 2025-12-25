const CACHE_NAME = 'crop-info-cache-v1';
const PRECACHE = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/scripts/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  // only handle GET requests
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(resp => {
      // put a copy into cache for next time (best-effort)
      if (req.url.startsWith(self.location.origin)) {
        caches.open(CACHE_NAME).then(cache => cache.put(req, resp.clone()));
      }
      return resp;
    }).catch(() => caches.match('/')))
  );
});
