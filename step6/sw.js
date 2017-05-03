importScripts('/sw-toolbox.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.9/firebase-messaging.js');

toolbox.precache([
	'/',
	'/public/js/app.js',
	'/public/js/0.js',
	'/public/js/1.js',
	'/public/css/app.css',
]);

toolbox.router.get('/(.*)', toolbox.networkFirst);
toolbox.router.get('/api(.*)', toolbox.fastest, {origin: 'https://randomuser.me'});


self.addEventListener('push', (event)=> {
	const title = 'Push Codelab';
	const options = {
		body: 'Yay it works.',
		icon: 'images/icon.png',
		badge: 'images/icon.png'
	};
	event.waitUntil(self.registration.showNotification(title, options));
});

firebase.initializeApp({
  'messagingSenderId': '678578574774'
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(async function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Pipsum!';
  const notificationOptions = {
    body: 'Firebase notif says: ' + payload.data.msg,
    icon: '/images/icon.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});


