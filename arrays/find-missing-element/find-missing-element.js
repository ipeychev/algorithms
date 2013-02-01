'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.FindMissingElement = function(config) {
};

Liferay.FindMissingElement.prototype = {
	constructor: Liferay.FindMissingElement,

	find: function(array1, array2) {
		var i, j, len1, len2, result;

		len1 = array1.length;
		len2 = array2.length;

		result = 0;

		for (i = 0, j = 0; i < len1; i++) {
			result ^= array1[i];

			if (j < len2) {
				result ^= array2[j++];
			}
		}

		return result;
	}
};