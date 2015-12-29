'use strict'
const modular = require('./make_it_modular_2');

const dir = process.argv[2];
const extention = process.argv[3];

modular(dir, extention, (err, files) => {
	if (err)
		return err;

	// console.log(files);

	for (let file of files) {
		console.log(file);
	}
})