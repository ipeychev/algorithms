'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.MaxSumNonAdjElements = function(config) {
};

Liferay.MaxSumNonAdjElements.prototype = {
	constructor: Liferay.MaxSumNonAdjElements,

	find: function(array) {
		if (array.length < 2) {
			return -1;
		}

		var sum1 = array[0];
		var sum2 = array[1];

		var length = array.length;

		for (var i = 0, j = 1; i < length && j < length; i += 2, j += 2) {
			if (i + 2 < length) {
				sum1 += array[i + 2];
			}

			if (j + 2 < length) {
				sum2 += array[j + 2];
			}
		}

		return Math.max(sum1, sum2);
	}
};