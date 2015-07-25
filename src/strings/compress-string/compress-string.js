'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.CompressString = function(config) {
};

Liferay.CompressString.prototype = {
	constructor: Liferay.CompressString,

	compress: function(content) {
		var character, count, i, result = [];

		for (i = 0; i < content.length;) {
			character = content.charAt(i);

			result.push(character);

			++i;

			count = 1;

			while (content.charAt(i) === character) {
				++count;

				++i;
			}

			if (count > 1) {
				result.push(count);
			}
		}

		return result.join('');
	}
};