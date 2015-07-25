function ExtractMinMax(array) {
	var minValue = Infinity, maxValue = -Infinity;

	for (var i = 0; i < array.length; i++) {
		if (array[i] > maxValue) {
			maxValue = array[i];
		}

		if (array[i] < minValue) {
			minValue = array[i];
		}
	}

	return [minValue, maxValue];
}

module.exports = ExtractMinMax;