const cacheName = 'aparna-garden-v2';
const assets = [
  './',
  './index.html',
  './dashboard.html',
  './history.html',
  './library.html',
  './notes.html',
  './syllabus.html',
  './manifest.json',
  // JavaScript folder
  './js/auth.js',
  './js/dashboard.js',
  './js/library.js',
  './js/syllabus-script.js',
  // Stylesheets folder
  './style-sheets/auth.css',
  './style-sheets/dashboard.css',
  './style-sheets/library.css',
  './style-sheets/notes.css',
  './style-sheets/syllabus.css',
  // Assets folder
  './assets/icon.png',
  './assets/new.mp4'
];

// 1. Install Event: Save all files to the phone's cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('App: Caching all files for offline use');
      return cache.addAll(assets);
    })
  );
});

// 2. Activate Event: Clean up any old versions of the app
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== cacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// 3. Fetch Event: Serve files from cache when offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cacheRes => {
      return cacheRes || fetch(e.request);
    })
  );

});
