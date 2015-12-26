'use strict'
const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const extention = process.argv[3];

// console.log(path);
// console.log(extention);

fs.readdir(dir, (err, files) => {
	// console.log(files);
	for (let file of files) {
		if (path.extname(file).replace('.', '') == extention)
			console.log(file);
	}
})