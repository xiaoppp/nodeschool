"use strict";

function getShortMessages(messages) {
	const me = messages
		.map(m => m.message)
		.filter(s => s.length < 50);
	return me;
}

module.exports = getShortMessages;