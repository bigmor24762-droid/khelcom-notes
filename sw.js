const CACHE_NAME = 'khelcom-v2';
const urlsToCache = [
  './',
  './index.html',
  './logo-khelcom.jpg',
  './logo192.png',
  './logo512.png',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
