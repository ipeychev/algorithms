'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.InsertionSort = function(config) {
};

Liferay.InsertionSort.prototype = {
	constructor: Liferay.InsertionSort,

	sort: function(list) {
		var i, length, out = [], slotIndex;

		for (i = 0, length = list.length; i < length; i++) {
			slotIndex = out.length;

			while (slotIndex > 0) {
				if (list[i] >= out[slotIndex - 1]) {
					break;
				}

				--slotIndex;
			}

			out.splice(slotIndex, 0, list[i]);
		}

		return out;
	}
};