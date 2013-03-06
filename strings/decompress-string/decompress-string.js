'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.DecompressString = function(config) {
};

Liferay.DecompressString.prototype = {
	constructor: Liferay.DecompressString,

	decompress: function(content) {
		var result = [];

		for (var i = 0; i < content.length; ++i) {
			var curChar = content.charAt(i);

			if (i + 1 < content.length) {
				var nextChar = content.charAt(i + 1);

				var charNum = parseInt(nextChar, 10);

				if (!isNaN(charNum)) {
					curChar = new Array(charNum + 1).join(curChar);

					++i;
				}
			}

			result.push(curChar);
		}

		return result.join('');
	}
};