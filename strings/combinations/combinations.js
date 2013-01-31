'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.Combinations = function(config) {
};

Liferay.Combinations.prototype = {
	constructor: Liferay.Combinations,

	combine: function(content) {
		var result, tmp;

		result = [];

		tmp = [];

		this._combine(content, result, tmp, content.length, 0);

		return result;
	},

	_combine: function(content, result, tmp, length, start) {
		for (var i = start; i < length; i++) {
			tmp.push(content[i]);

			if (result.length) {
				result.push(' ');
			}

			result.push(tmp.join(''));

			if (i < length - 1) {
				this._combine(content, result, tmp, length, i + 1);
			}

			--tmp.length;
		}
	}
};