'use strict';

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  'offline.html',
  'images/balloon_128x128.webp',
  'images/balloon_144x144.webp',
  'images/balloon_152x152.webp',
  'images/balloon_192x192.webp',
  'images/balloon_256x256.webp',
  'images/balloon_500x500.webp',
  'images/firmware-broadcom-sas-sata-controller.webp',
  'images/firmware-hp-digital-camera.webp',
  'images/irmware-hp-digital-entertainment.webp',
  'images/firmware-hp-dvd-writer.webp',
  'images/firmware-hp-flatbed-scanner.webp',
  'images/firmware-pelco-sarix_1.webp',
  'images/pure-css-cellphone1.webp',
  'images/pure-css-cellphone2.webp',
  'images/pure-css-laptop.webp',
  'images/pure-css-monitor.webp',
  'images/screenshot-aws-scratch.webp',
  'images/screenshot-barchart.webp',
  'images/screenshot-commandline-heros.webp',
  'images/screenshot-fcc-dv-cert.webp',
  'images/screenshot-fcc-fe-cert.webp',
  'images/screenshot-forcedirect.webp',
  'images/screenshot-gameoflife.webp',
  'images/screenshot-gc-app.webp',
  'images/screenshot-gcstats.webp',
  'images/screenshot-heatmap.webp',
  'images/screenshot-joe-cool.webp',
  'images/screenshot-js-calculator.webp',
  'images/screenshot-old-portfolio.webp',
  'images/screenshot-player-template.webp',
  'images/screenshot-pmodoro.webp',
  'images/screenshot-project-portfolio.webp',
  'images/screenshot-purecss.webp',
  'images/screenshot-quote.webp',
  'images/screenshot-roguelike.webp',
  'images/screenshot-rpn-hex-calc.webp',
  'images/screenshot-rpn-hex-chrome.webp',
  'images/screenshot-rpn-hex-vscode.webp',
  'images/screenshot-sample-app.webp',
  'images/screenshot-scatter.webp',
  'images/screenshot-simon.webp',
  'images/screenshot-terms3.webp',
  'images/screenshot-terms4.webp',
  'images/screenshot-tic-tac-toe.webp',
  'images/screenshot-tribute.webp',
  'images/screenshot-ttt-watir.webp',
  'images/screenshot-twitch.webp',
  'images/screenshot-voting-app.webp',
  'images/screenshot-weather.webp',
  'images/screenshot-wikipedia.webp',
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // CODELAB: Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // CODELAB: Remove previous cached data from disk.

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);
  // CODELAB: Add fetch event handler here.

});
