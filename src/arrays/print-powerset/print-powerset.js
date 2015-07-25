'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.PrintPowerset = function(config) {
};

Liferay.PrintPowerset.prototype = {
	constructor: Liferay.PrintPowerset,

	powerset: function(array) {
		var result = [];

		var tmp = [];

		this._powerset(array, result, tmp, array.length, 0);

		return result.join(' ');
	},

	_powerset: function(array, result, tmp, length, startIndex) {
		for (var i = startIndex; i < length; ++i) {
			tmp.push(array[i]);

			result.push('{' + tmp.join(',') + '}');

			if (i < length - 1) {
				this._powerset(array, result, tmp, length, i + 1);
			}

			--tmp.length;
		}
	}
};