"use strict"
const path = process.argv[1]
const extention = process.argv[2]
const fs = require('fs')

fs.readdir(path, function(err, list) {
	//console.log(list)
	for (let item of list) {
		console.log(item)
	}
})