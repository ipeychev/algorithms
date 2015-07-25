'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.BinarySearch = function(config) {
};

Liferay.BinarySearch.prototype = {
	constructor: Liferay.BinarySearch,

	search: function(list, content) {
		return this._search(list, content, 0, list.length - 1);
	},

	_search: function(list, content, startIndex, endIndex) {
		var cmp, index;

		if (startIndex > endIndex) {
			return -(startIndex + 1);
		}

		index = Math.floor(startIndex + (endIndex - startIndex) / 2);

		cmp = content.localeCompare(list[index]);

		if (cmp < 0) {
			index = this._search(list, content, startIndex, index - 1);
		}
		else if (cmp > 0) {
			index = this._search(list, content, index + 1, endIndex);
		}

		return index;
	}
};