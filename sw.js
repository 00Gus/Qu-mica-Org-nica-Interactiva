const CACHE_NAME = 'organicca-cache-v13';
const ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './js/openchemlib.bundle.js',
  './js/problems.js',
  './js/theory.js',
  './js/validator.js',
  './js/quiz_data.js',
  './js/quiz.js',
  './js/app.js',
  './assets/icon.svg',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cache or fetch from network
        return response || fetch(event.request).catch(() => {
          // Si falla la red, intentar regresar offline
        });
      })
  );
});

// Escuchar mensaje desde la app para forzar actualización
self.addEventListener('message', event => {
  if (event.data && event.data.action === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
