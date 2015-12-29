"use strict";
const net = require('net');
const port = process.argv[2];

const server = net.createServer(socket => {
	// socket handling logic

	// you can write data by this method, 
	// socket.write(data);

	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth() + 1;
	const day = now.getDate();
	const hour = now.getHours();
	const minute = now.getMinutes();

	date = `${year}-${month}-${day} ${hour}:${minute}\n`;
	socket.end(date);
})

server.listen(port);