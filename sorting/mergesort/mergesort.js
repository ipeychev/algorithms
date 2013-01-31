'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.MergeSort = function(config) {
};

Liferay.MergeSort.prototype = {
	constructor: Liferay.MergeSort,

	sort: function(list) {
		return this._sort(list, 0, list.length - 1);
	},

	_merge: function(listLeft, listRight) {
		var i, j, result = [];

		for (i = 0, j = 0; i < listLeft.length || j < listRight.length;) {
			if (i >= listLeft.length) {
				result.push(listRight[j++]);
			}
			else if (j >= listRight.length) {
				result.push(listLeft[i++]);
			}
			else if (listLeft[i] <= listRight[j]) {
				result.push(listLeft[i++]);
			}
			else {
				result.push(listRight[j++]);
			}
		}

		return result;
	},

	_sort: function(list, startIndex, endIndex) {
		var listLeft, listRight, splitIndex;

		if (startIndex === endIndex) {
			return [
				list[startIndex]
			];
		}

		splitIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);

		listLeft = this._sort(list, startIndex, splitIndex);
		listRight = this._sort(list, splitIndex + 1, endIndex);

		return this._merge(listLeft, listRight);
	}
};