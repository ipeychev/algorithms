'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.MergeTwoSortedArrays = function(config) {
};

Liferay.MergeTwoSortedArrays.prototype = {
	constructor: Liferay.MergeTwoSortedArrays,

	merge: function(array1, array2) {
		var result = [];

		var array1Len = array1.length;
		var array2Len = array2.length;

		for (var i = 0, j = 0; i < array1Len || j < array2Len;) {
			if (i < array1Len && j < array2Len) {
				if (array1[i] <= array2[j]) {
					result.push(array1[i++]);
				}
				else {
					result.push(array2[j++]);
				}
			}
			else if (i < array1Len) {
				result.push(array1[i++]);
			}
			else {
				result.push(array2[j++]);
			}
		}

		return result;
	}
};