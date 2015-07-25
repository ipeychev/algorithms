function StripToFlat(array) {
	if (!Array.isArray(array)) {
		return [array];
	}

	var res = [];

	for (var i = 0; i < array.length; i++) {
		var el = array[i];

		if (Array.isArray(el)) {
			res = res.concat(StripToFlat(el));
		} else {
			res.push(el);
		}
	}

	return res;
}

module.exports = StripToFlat;