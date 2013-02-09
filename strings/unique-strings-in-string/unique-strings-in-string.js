'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.FindStringsString = function(config) {
};

Liferay.FindStringsString.prototype = {
	find: function(content, delimiter) {
		var hashtable = Object.create ? Object.create(null) : {};

		var startWord;

		for (var i = 0; i < content.length; ++i) {
			if (content.charAt(i) !== delimiter) {
				startWord = i++;

				while (i < content.length && content.charAt(i) !== delimiter) {
					i++;
				}

				var word = content.substring(startWord, i);

				var curValue = hashtable[word] || 0;

				hashtable[word] = ++curValue;
			}
		}

		var result = [];

		var hop = Object.prototype.hasOwnProperty;

		for (var key in hashtable) {
			if (hop.call(hashtable, key) && hashtable[key] === 1) {
				result.push(key);
			}
		}

		return result.join();
	}
};
