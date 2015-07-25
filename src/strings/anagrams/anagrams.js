'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.Anagram = function(config) {
};

Liferay.Anagram.prototype = {
	constructor: Liferay.Anagram,

	isAnagram: function(source, dest) {
		var curChar, curVal, hashtable, i;

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
	},

	findAnagrams: function(list) {
		var hashtable = Object.create ? Object.create(null) : {};

		for (var i = 0; i < list.length; i++) {
			var word = list[i];

			var sortedWord = word.toLowerCase().split('').sort().join('');

			var value = hashtable[sortedWord];

			if (value) {
				value.push(word);
			}
			else {
				hashtable[sortedWord] = [word];
			}
		}

		return hashtable;
	}
};