"use strict";
const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const dir = process.argv[3];

// console.log(port);
// console.log(dir);

const server = http.createServer((req, res) => {
	const stream = fs.createReadStream(dir);
	// src.pipe(des);
	stream.pipe(res);
})

server.listen(port);