'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.FindSequencesSumInteger = function(config) {
};

Liferay.FindSequencesSumInteger.prototype = {
	constructor: Liferay.FindSequencesSumInteger,

	find: function(number) {
		var result = [];

		if (number === 0) {
			return [[]];
		}

		for (var i = 1; i <= number; ++i) {
			var tmp = this.find(number - i);

			for (var j = 0; j < tmp.length; ++j) {
				var tmpVal = tmp[j];

				tmpVal.push(i);

				result.push(tmpVal);
			}
		}

		return result;
	}
};