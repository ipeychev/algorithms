'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.KthLargestElement = function(config) {
};

Liferay.KthLargestElement.prototype = {
	constructor: Liferay.KthLargestElement,

	find: function(array, k) {
		return this._find(array, 0, array.length - 1, k);
	},

	_find: function(array, startIndex, endIndex, k) {
		// 1. set as pivot equals to the start index

		var pivot = startIndex;

		// 2. initially, set the left and right indexes equal to start and end indexes
		// during the function execution they will increase/decrease their values
		var left = startIndex;
		var right = endIndex;

		// 3. loop until left and right meet
		while (left < right) {
			// 3.1 increase left index while it points to values less than pivot
			while (left < right && array[left] <= array[pivot]) {
				++left;
			}

			// 3.2 decrease the right index while it points to values bigger than pivot
			while (left < right && array[right] >= array[pivot]) {
				--right;
			}

			// 3.3 swap the left and right indexes
			if (left < right) {
				this._swap(array, left, right);
			}
		}

		// 4. move the pivot to the end of the array
		this._swap(array, pivot, right);

		// 5. check if we found the k-th element. if so - return, otherwise, change left and right index and
		// call the function recursively
		// k starts from 1, but indexes - from 0

		if (k === right + 1) {
			return array[right];
		}
		else if (k > pivot + 1) {
			return this._find(array, right + 1, endIndex, k);
		}
		else {
			return this._find(array, startIndex, right - 1, k);
		}
	},

	_swap: function(array, startIndex, endIndex) {
		var tmp = array[startIndex];

		array[startIndex] = array[endIndex];

		array[endIndex] = tmp;
	}
};