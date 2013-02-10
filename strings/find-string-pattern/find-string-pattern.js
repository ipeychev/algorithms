'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.FindStringPattern = function(config) {
};


Liferay.FindStringPattern.prototype = {
	constructor: Liferay.FindStringPattern,

	find: function(content, pattern) {
		var patternIndex = 0, contentIndex = 0, patternChar;

		for (; patternIndex < pattern.length && contentIndex < content.length; ++patternIndex, ++contentIndex) {

			patternChar = pattern.charAt(patternIndex);

			if (patternChar !== '*') {
				if (patternChar !== content.charAt(contentIndex)) {
					return false;
				}
			}
			else {
				++patternIndex;

				if (patternIndex === pattern.length - 1) {
					return true;
				}

				patternChar = pattern.charAt(patternIndex);

				if (patternIndex < pattern.length) {
					while (contentIndex < content.length && content.charAt(contentIndex) !== patternChar) {
						++contentIndex;
					}

					if (contentIndex >= content.length) {
						return false;
					}
				}
			}
		}

		if (pattern.charAt(pattern.length - 1) !== '*' && contentIndex < content.length) {
			return false;
		}

		return true;
	}
};