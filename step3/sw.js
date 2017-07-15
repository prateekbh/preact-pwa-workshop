var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/public/css/app.css',
	'https://fonts.googleapis.com/icon?family=Material+Icons',
	'https://fonts.gstatic.com/s/materialicons/v22/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2',
  '/public/js/app.js',
	'/public/js/0.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// sw does don have acces to dom or window
// thus self becomes default this
self.addEventListener('fetch', function(event) {
		event.respondWith(
			caches.match(event.request)
				.then(function(response) {
					// Cache hit - return response
					if (response) {
						return response;
					}
					return fetch(event.request);
				}
			)
		);
});


/*
if(event.request.url.indexOf('https://randomuser.me/api/?results=') > -1) {
		const clone = event.request.clone();
		event.respondWith(
			fetch(event.request).then(res=>{
				const resClone = res.clone();
				caches.open(CACHE_NAME)
					.then(function(cache) {
						cache.put(clone.url, resClone);
					});
				return res;
			}).catch(e=>{
				return caches.match(event.request);
			})
		);
	}
*/

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());