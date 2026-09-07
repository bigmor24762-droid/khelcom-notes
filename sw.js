self.addEventListener('install', e => {
  e.waitUntil(caches.open('khelcom-v1').then(cache => {
    return cache.addAll(['khelcom.html', 'manifest.json', 'logo-khelcom.jpg']);
  }));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});