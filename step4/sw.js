importScripts('/sw-toolbox.js');


toolbox.precache([
	'/',
	'/public/js/app.js',
	'/public/js/0.js',
	'/public/js/1.js',
	'/public/css/app.css',
]);

toolbox.router.get('/(.*)', toolbox.networkFirst);
toolbox.router.get('/api(.*)', toolbox.fastest, {origin: 'https://randomuser.me'});