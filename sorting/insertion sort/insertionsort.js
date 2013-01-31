'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.InsertionSort = function(config) {
};

Liferay.InsertionSort.prototype = {
	constructor: Liferay.InsertionSort,

	sort: function(list) {
		var i, length, result = [], slot;

		for (i = 0, length = list.length; i < length; i++) {
			slot = result.length;

			while (slot > 0) {
				if (list[i] >= result[slot - 1]) {
					break;
				}

				--slot;
			}

			result.splice(slot, 0, list[i]);
		}

		return result;
	}
};