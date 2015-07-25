'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.MutateString = function(config) {
};

Liferay.MutateString.prototype = {
	constructor: Liferay.MutateString,

	mutate: function(content, htReplaceCharacters) {
		var result = [];

		this._mutate(content, 0, htReplaceCharacters, result);

		result.push(content);

		return result;
	},

	_mutate: function(content, index, htReplaceCharacters, result) {
		for (var i = index; i < content.length; ++i) {
			var character = content.charAt(i);

			var replaceCharacters = htReplaceCharacters[character];

			if (replaceCharacters) {
				for (var j = 0; j < replaceCharacters.length; ++j) {
					var replaceCharacter = replaceCharacters[j];

					var tmp = content.substr(0, i) + replaceCharacter + content.substr(i + 1);

					result.push(tmp);

					this._mutate(tmp, i + 1, htReplaceCharacters, result);
				}
			}
		}
	}
};