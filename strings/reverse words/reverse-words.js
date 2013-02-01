'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.ReverseWords = function(config) {	
};


Liferay.ReverseWords.prototype = {
	constructor: Liferay.ReverseWords,

	reverse: function(content) {
		var wordStart;

		var words = [];

		for (var i = 0; i < content.length;) {
			if (content.charAt(i) !== ' ') {
				wordStart = i;

				while(i < content.length && content.charAt(i) != ' ') {
					i++;
				}

				words.push(content.substring(wordStart, i));
			}

			i++;
		}

		return words.reverse();
	}
};