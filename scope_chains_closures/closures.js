'use strict'

function foo() {
	var bar = '';
	quux = 'asd'

	function zip() {
		let quux = 'asdf';
		bar = true;
	}

	return zip;
}