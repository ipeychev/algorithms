'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.FindOddNumberArray = function(config) {
};

Liferay.FindOddNumberArray.prototype = {
	constructor: Liferay.FindOddNumberArray,

	find: function(array) {
		var result = 0;

		for (var i = 0; i < array.length; i++) {
			result ^= array[i];
		}

		return result;
	}
};