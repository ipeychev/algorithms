'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.ArrayPairSum = function(config) {
};

Liferay.ArrayPairSum.prototype = {
	constructor: Liferay.ArrayPairSum,

	find: function(array, k) {
		if (array.length < 2) {
			return false;
		}

		var set = Object.create ? Object.create(null) : {};

		var output = [];

		for (var i = 0; i < array.length; i++) {
			var num = array[i];

			var target = k - num;

			if (typeof set[target] == 'undefined') {
				set[target] = true;
			}
			else {
				output.push(
					[
						Math.min(num, target),
						Math.max(num, target)
					]
				);
			}
		}

		return output;
	}
};