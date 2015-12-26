'use strict'
const fs = require('fs');
const path = require('path');

// use arrow function and IEEF here
module.exports = function(dir, extention, cb) {
	// console.log(dir);
	// console.log(extention);

	fs.readdir(dir, (err, files) => {

		if (err)
			return cb(err);

		let list = [];

		// console.log(files);
		for (let file of files) {
			if (path.extname(file).replace('.', '') == extention) {
				list.push(file);
			}
		}

		cb(null, list);
	})
}