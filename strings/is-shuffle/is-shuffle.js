'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.IsShuffle = function(config) {
};

Liferay.IsShuffle.prototype = {
	constructor: Liferay.IsShuffle,

	check: function(str1, str2, str3) {
		if (str1.length + str2.length !== str3.length) {
			return false;
		}

		if (!str1 || !str2 || !str3) {
			return str1 + str2 === str3;
		}

		if (str1.charAt(0) !== str3.charAt(0) && str2.charAt(0) !== str3.charAt(0)) {
			return false;
		}

		if (str1.charAt(0) === str3.charAt(0)) {
			return this.check(str1.substr(1), str2, str3.substr(1));
		}
		else {
			return this.check(str1, str2.substr(1), str3.substr(1));
		}

		return false;
	}
};