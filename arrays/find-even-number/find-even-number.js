'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.FindEvenNumberArray = function(config) {
	this._config = config;
};

Liferay.FindEvenNumberArray.prototype = {
	constructor: Liferay.FindEvenNumberArray,

	find: function(array) {
		if (this._config && this._config.useXOR) {
			return this._findXOR(array);
		}
		else {
			return this._find(array);
		}
	},

	_find: function(array) {
		var hop, htOccurrences, i, key, occurrences, value;

		hop = Object.prototype.hasOwnProperty;

		htOccurrences = Object.create ? Object.create(null) : {};

		for (i = 0; i < array.length; i++) {
			value = array[i];

			occurrences = htOccurrences[value] || 0;

			htOccurrences[value] = ++occurrences;
		}

		for (key in htOccurrences) {
			if (hop.call(htOccurrences, key)) {
				value = htOccurrences[key];

				if (value % 2 === 0) {
					return key;
				}
			}
		}

		return null;
	},

	_findXOR: function(array) {
		var i, j, hop, key, result = 0;

		var htUniqueNumbers = Object.create ? Object.create(null) : {};

		for (i = 0; i < array.length; i++) {
			htUniqueNumbers[array[i]] = array[i];

			result ^= array[i];
		}

		hop = Object.prototype.hasOwnProperty;

		for (key in htUniqueNumbers) {
			if (hop.call(htUniqueNumbers, key)) {
				result ^= htUniqueNumbers[key];
			}
		}

		return result;
	}
};