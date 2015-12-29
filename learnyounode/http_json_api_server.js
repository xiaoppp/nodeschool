"use strict"

const http = require('http');
const fs = require('fs');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((req, res) => {
	const URL = url.parse(req.url, true);
	if (URL.pathname === '/api/parsetime') {
		const ios = URL.query['iso'];
		const date = new Date(ios);

		// console.log(date);

		const hour = date.getHours();
		const minute = date.getMinutes();
		const second = date.getSeconds();

		// console.log(hour);
		// console.log(minute);
		// console.log(second);

		const json = {
			hour: hour,
			minute: minute,
			second: second
		};

		const data = JSON.stringify(json)

		res.writeHead(200, {
			'Content-Type': 'application/json'
		})
		res.write(data);
		res.end();
	}

	if (URL.pathname === '/api/unixtime') {
		const ios = URL.query['iso'];
		const unixtime = new Date(ios).getTime();

		const json = {
			unixtime: unixtime
		};

		const data = JSON.stringify(json)

		res.writeHead(200, {
			'Content-Type': 'application/json'
		})
		res.write(data);
		res.end();
	}
})

server.listen(port);