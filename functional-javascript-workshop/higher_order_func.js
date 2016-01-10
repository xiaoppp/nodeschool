"use strict";

// this is the loop version
// function repeat(operation, num) {
// 	while (num > 0) {
// 		operation.call(this);
// 		num -= 1;
// 	}
// }

// this is the resurise version
function repeat(operation, num) {
	if (num <= 0) return;

	operation.call(this);
	num -= 1;

	repeat(operation, num);
}

module.exports = repeat;