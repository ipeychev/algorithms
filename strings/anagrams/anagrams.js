'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.Anagram = function(config) {
};

Liferay.Anagram.prototype = {
	constructor: Liferay.Anagram,

	isAnagram: function(source, dest) {
		var curChar, curVal, hashtable, i, key;

		if (source.length !== dest.length) {
			return false;
		}

		dest = dest.toLowerCase();
		source = source.toLowerCase();

		hashtable = Object.create ? Object.create(null) : {};

		for (i = 0; i < source.length; i++) {
			curChar = source.charAt(i);

			curVal = hashtable[curChar] || 0;

			hashtable[curChar] = ++curVal;
		}

		for (i = 0; i < dest.length; i++) {
			curChar = dest.charAt(i);

			curVal = hashtable[curChar];

			if (typeof curVal == 'undefined') {
				return false;
			}
			else {
				--curVal;

				if (curVal < 0) {
					return false;
				}

				hashtable[curChar] = curVal;
			}
		}

		return true;
	}
};