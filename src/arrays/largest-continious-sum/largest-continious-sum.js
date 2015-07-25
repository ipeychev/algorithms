'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.LargestContiniousSum = function(config) {
};

Liferay.LargestContiniousSum.prototype = {
	constructor: Liferay.LargestContiniousSum,

	find: function(array) {
		var currentSum, maxSum;

		if (array.length < 1) {
			return;
		}

		currentSum = maxSum = array[0];

		for (var i = 1; i < array.length; i++) {
			var num = array[i];

			currentSum = Math.max(currentSum + num, num);

			maxSum = Math.max(currentSum, maxSum);
		}

		return maxSum;
	}
};