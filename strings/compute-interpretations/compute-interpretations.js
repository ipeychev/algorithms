'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.StripToFlat = function(config) {
};

Liferay.StripToFlat.prototype = {
	constructor: Liferay.StripToFlat,

	strip: function(array) {
		var result = [];

		this._strip(array, result);

		return result;
	},

	_strip: function(array, result) {
		for (var i = 0; i < array.length; i++) {
			var value = array[i];

			if (typeof value == 'number') {
				result.push(value);
			}
			else if (Array.isArray ? Array.isArray(value) : Object.prototype.toString.call(value) == '[object Array]') {
				this._strip(value, result);
			}
		}
	}
};