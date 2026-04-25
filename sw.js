var CACHE_NAME = 'flux-v5-3-9';
var URLS_TO_CACHE = ['./', './index.html'];
self.addEventListener('install', function(e) { e.waitUntil(caches.open(CACHE_NAME).then(function(c) { return c.addAll(URLS_TO_CACHE); }).then(function() { return self.skipWaiting(); })); });
self.addEventListener('activate', function(e) { e.waitUntil(caches.keys().then(function(n) { return Promise.all(n.filter(function(k) { return k !== CACHE_NAME; }).map(function(k) { return caches.delete(k); })); }).then(function() { return self.clients.claim(); })); });
self.addEventListener('fetch', function(e) { if (e.request.method !== 'GET') return; e.respondWith(fetch(e.request).then(function(r) { if (r && r.status === 200 && e.request.url.indexOf(self.registration.scope) === 0) { var c = r.clone(); caches.open(CACHE_NAME).then(function(ca) { ca.put(e.request, c); }); } return r; }).catch(function() { return caches.match(e.request); })); });
