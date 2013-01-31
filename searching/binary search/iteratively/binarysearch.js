'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.BinarySearch = function(config) {
};

Liferay.BinarySearch.prototype = {
	constructor: Liferay.BinarySearch,

	search: function(array, content) {
		var endIndex, index, startIndex;

		startIndex = 0;
		endIndex = array.length - 1;

		while (startIndex <= endIndex) {
			index = Math.floor(startIndex + (endIndex - startIndex) / 2);

			if (content === array[index]) {
				return index;
			}
			else if (content < array[index]) {
				endIndex = index - 1;
			}
			else {
				startIndex = index + 1;
			}
		}

		return -(startIndex + 1);
	}
};