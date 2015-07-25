'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.QuickSort = function(config) {
};

Liferay.QuickSort.prototype = {
	constructor: Liferay.QuickSort,

	sort: function(array) {
		return this._sort(array, 0, array.length - 1);
	},

	_partition: function(array, pivot, startIndex, endIndex) {
		while (startIndex < endIndex) {
			if (array[startIndex] < array[pivot]) {
				++startIndex;

				continue;
			}

			if (array[endIndex] >= array[pivot]) {
				--endIndex;

				continue;
			}

			this._swap(array, startIndex, endIndex);

			++startIndex;
		}

		return startIndex;
	},

	_sort: function(array, startIndex, endIndex) {
		var partition, pivot;

		if (startIndex < 0 || endIndex >= array.length) {
			return;
		}

		if (endIndex <= startIndex) {
			return;
		}

		pivot = endIndex;

		partition = this._partition(array, pivot, startIndex, endIndex - 1);

		if (array[partition] < array[pivot]) {
			++partition;
		}

		this._swap(array, partition, endIndex);

		this._sort(array, startIndex, partition - 1);
		this._sort(array, partition + 1, endIndex);

		return array;
	},

	_swap: function(array, startIndex, endIndex) {
		if (startIndex === endIndex) {
			return;
		}

		var tmp = array[startIndex];

		array[startIndex] = array[endIndex];

		array[endIndex] = tmp;
	}
};