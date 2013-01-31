'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.ReverseWords = function(config) {	
};


Liferay.ReverseWords.prototype = {
	constructor: Liferay.ReverseWords,

	reverse: function(content) {
		var endPos;

		var res = [];

		for (var i = content.length - 1, endPos = content.length; i >= 0; --i) {
			if (content[i] === ' ') {
				var tmp = content.substring(i + 1, endPos);

				res.push(tmp);

				endPos = i;
			}
		}

		res.push(content.substring(0, endPos));

		return res;
	}
};