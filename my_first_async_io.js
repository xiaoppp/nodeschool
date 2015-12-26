'use strict'
const fs = require('fs');
const path = process.argv[2];

const buf = fs.readFile(path, (err, buf) => {
	const content = buf.toString();
	const items = content.split('\n');
	console.log(items.length - 1);
});