'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.RomanToInteger = function(config) {
};

Liferay.RomanToInteger.prototype = {
	constructor: Liferay.RomanToInteger,

	convert: function(romanNumber) {
		if (!romanNumber.length) {
			return -1;
		}

		var lastChar = romanNumber.charAt(romanNumber.length - 1);

		var sum = this.map[lastChar];

		for (var i = romanNumber.length - 2; i >= 0; --i) {
			var curChar = romanNumber.charAt(i);

			var curValue = this.map[curChar];
			var prevValue = this.map[lastChar];

			if (curValue < prevValue) {
				sum -= curValue;
			}
			else {
				sum += curValue;
			}

			lastChar = curChar;
		}

		return sum;
	},

	map: {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	}

};