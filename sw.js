var GHPATH = '/StoragePlayer';
var APP_PREFIX = 'gppwa_';
var VERSION = 'version_04';
var URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/index_data`,
  `${GHPATH}/index_data/scripts`,
  `${GHPATH}/index_data/style`,
  `${GHPATH}/index_data/textures`,
  `${GHPATH}/index_data/scripts/language_english.js`,
  `${GHPATH}/index_data/scripts/language_hebrew.js`,
  `${GHPATH}/index_data/scripts/language_russian.js`,
  `${GHPATH}/index_data/scripts/languages.js`,
  `${GHPATH}/index_data/scripts/scripts.js`,
  `${GHPATH}/index_data/scripts/scripts_continue.js`,
  `${GHPATH}/index_data/style/animations.css`,
  `${GHPATH}/index_data/style/styles.css`,
  `${GHPATH}/index_data/style/styles_max_500.css`,
  `${GHPATH}/index_data/english`,
  `${GHPATH}/index_data/hebrew`,
  `${GHPATH}/index_data/russian`,
  `${GHPATH}/index_data/textures/icon_dark.png`,
  `${GHPATH}/index_data/textures/icon_light.png`,
  `${GHPATH}/index_data/english/en1.png`,
  `${GHPATH}/index_data/english/en2.png`,
  `${GHPATH}/index_data/english/en3.png`,
  `${GHPATH}/index_data/english/en4.png`,
  `${GHPATH}/index_data/hebrew/he1.png`,
  `${GHPATH}/index_data/hebrew/he2.png`,
  `${GHPATH}/index_data/hebrew/he3.png`,
  `${GHPATH}/index_data/hebrew/he4.png`,
  `${GHPATH}/index_data/russian/ru1.png`,
  `${GHPATH}/index_data/russian/ru2.png`,
  `${GHPATH}/index_data/russian/ru3.png`,
  `${GHPATH}/index_data/russian/ru4.png`,
  `${GHPATH}/index_data/themes`,
  `${GHPATH}/index_data/themes/default`,
  `${GHPATH}/index_data/themes/hoyolab`,
  `${GHPATH}/index_data/themes/default/roots.css`,
  `${GHPATH}/index_data/themes/hoyolab/roots.css`
];
var CACHE_NAME = 'storageplayer-v1';
var CacheURLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/index_data`,
  `${GHPATH}/index_data/scripts`,
  `${GHPATH}/index_data/style`,
  `${GHPATH}/index_data/textures`,
  `${GHPATH}/index_data/scripts/language_english.js`,
  `${GHPATH}/index_data/scripts/language_hebrew.js`,
  `${GHPATH}/index_data/scripts/language_russian.js`,
  `${GHPATH}/index_data/scripts/languages.js`,
  `${GHPATH}/index_data/scripts/scripts.js`,
  `${GHPATH}/index_data/scripts/scripts_continue.js`,
  `${GHPATH}/index_data/style/animations.css`,
  `${GHPATH}/index_data/style/styles.css`,
  `${GHPATH}/index_data/style/styles_max_500.css`,
  `${GHPATH}/index_data/english`,
  `${GHPATH}/index_data/hebrew`,
  `${GHPATH}/index_data/russian`,
  `${GHPATH}/index_data/textures/icon_dark.png`,
  `${GHPATH}/index_data/textures/icon_light.png`,
  `${GHPATH}/index_data/english/en1.png`,
  `${GHPATH}/index_data/english/en2.png`,
  `${GHPATH}/index_data/english/en3.png`,
  `${GHPATH}/index_data/english/en4.png`,
  `${GHPATH}/index_data/hebrew/he1.png`,
  `${GHPATH}/index_data/hebrew/he2.png`,
  `${GHPATH}/index_data/hebrew/he3.png`,
  `${GHPATH}/index_data/hebrew/he4.png`,
  `${GHPATH}/index_data/russian/ru1.png`,
  `${GHPATH}/index_data/russian/ru2.png`,
  `${GHPATH}/index_data/russian/ru3.png`,
  `${GHPATH}/index_data/russian/ru4.png`,
  `${GHPATH}/index_data/themes`,
  `${GHPATH}/index_data/themes/default`,
  `${GHPATH}/index_data/themes/hoyolab`,
  `${GHPATH}/index_data/themes/default/roots.css`,
  `${GHPATH}/index_data/themes/hoyolab/roots.css`
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CacheURLS))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Return cached response
        }
        return fetch(event.request); // Fetch from network
      })
  );
});