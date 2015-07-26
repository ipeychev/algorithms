function ReverseSentence(string) {
	var i, j;
	var lastIndex = 0;
	var res = '';

	for (i = string.length - 1; i >= 0; i--) {
		res += string.charAt(i);
	}

	string = '';

	for (i = 0; i < res.length; i++) {
		if (res.charAt(i) === ' ') {
			for (j = i - 1; j >= lastIndex; j--) {
				string += res.charAt(j);
			}

			string += ' ';
			lastIndex = i + 1;
		}
	}

	if (lastIndex < res.length) {
		for (j = res.length - 1; j >= lastIndex; j--) {
			string += res.charAt(j);
		}
	}

	return string;
}

module.exports = ReverseSentence;