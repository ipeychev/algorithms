'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.FindAlone = function(config) {
};

Liferay.FindAlone.prototype = {
	constructor: Liferay.FindAlone,

	find: function(array, relations) {
		for (var i = 0, j = array.length - 1; array.length > 1;) {
			if (this.isRelated(array[i], array[j], relations)) {
				array.splice(i, 1);

				--j;
			}
			else if (this.isRelated(array[j], array[i], relations)) {
				array.splice(j--, 1);
			}
		}

		if (array.length === 1) {
			return array[0];
		}
	},

	isRelated: function(source, dest, relations) {
		var sourceRelations = relations[source];

		return sourceRelations[dest];
	}
};