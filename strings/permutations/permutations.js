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

	permute2: function(content) {
		var result = this._permute2(content);

		return result.join(' ');
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
	},

	_permute2: function(content) {
		var permutations = [];

		if (!content.length) {
			permutations.push('');

			return permutations;
		}

		var first = content.charAt(0);

		var remainder = content.substr(1);

		var words = this._permute2(remainder);

		for (var i = 0; i < words.length; ++i) {
			var word = words[i];

			for (var j = 0; j <= word.length; ++j) {
				permutations.push(this._insertCharAt(word, first, j));
			}
		}

		return permutations;
	},

	_insertCharAt: function(content, character, position) {
		return content.substring(0, position) + character + content.substr(position);
	}
};