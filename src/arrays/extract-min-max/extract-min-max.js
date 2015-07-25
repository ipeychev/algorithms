'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.ExtractMinMax = function(config) {
};

Liferay.ExtractMinMax.prototype = {
	constructor: Liferay.ExtractMinMax,

	find: function(array) {
		var startIndex, endIndex, minValue, maxValue;

		startIndex = 0;

		endIndex = array.length - 1;

		minValue = Infinity;
		maxValue = -Infinity;

		while (endIndex >= startIndex) {
			minValue = Math.min(array[startIndex], array[endIndex], minValue);

			maxValue = Math.max(array[startIndex], array[endIndex], maxValue);

			++startIndex;
			--endIndex;
		}

		return {
			minValue: minValue,
			maxValue: maxValue
		};
	}
};