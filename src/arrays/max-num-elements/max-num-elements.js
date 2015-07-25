'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.MaxNumElements = function(config) {
};

Liferay.MaxNumElements.prototype = {
	constructor: Liferay.MaxNumElements,

	find: function(array) {
		var character1, character2, item, result = '';

		if (array.length < 2) {
			return -1;
		}

		// 10, 7, 9, 20, 30
		for (var i = 0; i < array.length; ++i) {
			character1 = item = array[i];

			if (item > 9) {
				character1 = parseInt(item.toString().charAt(0), 10);
			}

			for (var j = 0; j < result.length; j++) {
				character2 = parseInt(result.charAt(j), 10);

				if (character1 > character2) {
					break;
				}
			}

			result = result.substring(0, j) + item + result.substring(j);
		}

		return result;
	}
};