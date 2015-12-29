'use strict';
const http = require('http');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

// console.log(url1);
// console.log(url2);
// console.log(url3);

http.get(url1, res => {
	res.setEncoding('utf8');
	let data = '';
	res.on('data', chunk => {
		data += chunk;
	})
	res.on('end', () => {
		console.log(data);

		http.get(url2, res => {
			res.setEncoding('utf8');
			let data = '';
			res.on('data', chunk => {
				data += chunk;
			})
			res.on('end', () => {

				console.log(data);

				http.get(url3, res => {
					res.setEncoding('utf8');
					let data = '';
					res.on('data', chunk => {
						data += chunk;
					})
					res.on('end', () => {
						console.log(data);
					})
				})

			})
		})

	})
})

// function async(items, cb) {

// 	let index = 0;

// 	function execute() {
// 		item = items[index];
// 		index += 1;
// 	}
// }