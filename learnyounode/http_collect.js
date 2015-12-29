// reference: https://nodejs.org/dist/latest-v5.x/docs/api/http.html

'use strict';
const http = require('http');
const url = process.argv[2];

http.get(url, res => {

	res.setEncoding('utf8');

	let data = '';

	res.on('data', chunk => {
		data += chunk;
		//console.log(chunk);
	})

	res.on('error', err => {
		console.log('problem with request: ' + err.message);
	})

	res.on('end', () => {
		console.log(data.length);
		console.log(data);
	})
})