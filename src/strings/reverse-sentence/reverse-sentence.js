function ReverseSentence(string) {
	var array = [];
	var lastIndex = 0;

	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === ' ') {
			array.push(string.substring(lastIndex, i));

			lastIndex = i + 1;
		}
	}

	if (lastIndex < string.length) {
		array.push(string.substring(lastIndex, string.length));
	}

	return array.reverse().join(' ');
}

module.exports = ReverseSentence;