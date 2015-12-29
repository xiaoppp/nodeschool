const http = require('http');
const fs = require('fs');
const port = process.argv[2];

const server = http.createServer((req, res) => {

	if (req.method == 'POST') {
		req.on('data', chunk => {
			console.log(chunk.toString());
			res.write(chunk.toString().toUpperCase())
		})
		req.on('end', () => {
			res.end();
		})
	}
})

server.listen(port);