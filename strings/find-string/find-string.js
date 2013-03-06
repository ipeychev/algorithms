'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.FindString = function(config) {
};

Liferay.FindString.prototype = {
	constructor: Liferay.FindString,

	'findNaïve': function(string1, string2) {
		for (var i = 0; i < string1.length;) {
			var lastPosition = i;

			for (var j = 0; j < string2.length; ++j) {
				if (string1.charAt(i) !== string2.charAt(j)) {
					i = lastPosition + 1;

					break;
				}

				++i;
			}

			if (j === string2.length) {
				return lastPosition;
			}
		}

		return -1;
	}

	// TODO: Implement Boyer–Moore–Horspool and Boyer–Moore
};