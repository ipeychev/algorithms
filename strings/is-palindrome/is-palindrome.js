'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.IsPalindrome = function(config) {
};

Liferay.IsPalindrome.prototype = {
	constructor: Liferay.IsPalindrome,

	check: function(content) {
		var startIndex, endIndex, startChar, endChar;

		startIndex = 0;
		endIndex = content.length - 1;

		while (endIndex > startIndex) {
			startChar = content.charAt(startIndex).toLowerCase();
			endChar = content.charAt(endIndex).toLowerCase();

			if (this._isPunctuation(startChar)) {
				++startIndex;

				continue;
			}
			else if (this._isPunctuation(endChar)) {
				--endIndex;

				continue;
			}
			
			if (startChar !== endChar) {
				return false;
			}

			++startIndex;
			--endIndex;
		}

		return true;
	},

	_isPunctuation: function(character) {
		// this regex does not include all punctuations, only the most commonly used
		return (/[,!@#$-=+%|{}\^&*()\[\]?.,;!¡ ¿。、·]/).test(character);
	}
};