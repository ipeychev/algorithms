'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.ShellSort = function(config) {
	this._config = config || {};
};

Liferay.ShellSort.prototype = {
	constructor: Liferay.ShellSort,

	sort: function(list) {
		var increments = this._config.increments || [121, 40, 13, 4, 1]; // 3 * H + 1

		for (var i = 0; i < list.length; i++) {
			this._hSort(list, increments[i]);
		}

		return list;
	},

	_hSort: function(list, increment) {
		if (increment > list.length / 2) {
			return;
		}

		for (var i = 0; i < increment; i++) {
			this._sortSublist(list, i, increment);
		}
	},

	_sortSublist: function(list, startIndex, increment) {
		for (var i = startIndex + increment; i < list.length; i += increment) {
			var value = list[i];

			for (var j = i; j > startIndex; j-= increment) {
				var prevValue = list[j - increment];

				if (value >= prevValue) {
					break;
				}

				list[j] = prevValue;
			}

			list[j] = value;
		}
	}
};