'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.StringPermutations = function (config) {
};

Liferay.StringPermutations.prototype = {
	constructor: Liferay.StringPermutations,

	permute: function(content) {
		var result, tmp, usedCharacters;

		this._result = [];

		tmp = [];

		usedCharacters = [];

		this._permute(content, usedCharacters, content.length, 0, this._result, tmp);

		result = this._result.join('');

		this._result = null;

		return result;
	},

	_permute: function(content, usedCharacters, length, level, result, tmp) {
		var character, i;

		if (level === length) {
			if (result.length) {
				result.push(' ');
			}

			result.push(tmp.join(''));

			return;
		}

		for (i = 0; i < length; i++) {
			character = content.charAt(i);
			
			if (usedCharacters[i]) {
				continue;
			}

			tmp.push(character);

			usedCharacters[i] = true;

			this._permute(content, usedCharacters, length, level + 1, result, tmp);

			usedCharacters[i] = false;

			tmp.length -= 1;
		}
	}
};