function CompressSimple(string) {
	if (typeof string !== 'string') {
		throw new Error('The passed param must be a string');
	}

	if (string.length < 3) {
		return string;
	}

	var firstChar = string.charAt(0);
	var lastChar = string.charAt(string.length - 1);
	var rest = string.length - 2;

	return firstChar + rest + lastChar;
}

module.exports = CompressSimple;