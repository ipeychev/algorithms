function MergeSort(array) {
	if (array.length <= 1) {
		return array;
	}

	var index = Math.floor(array.length / 2);

	var firstHalf = MergeSort(array.slice(0, index));
	var secondHalf = MergeSort(array.slice(index));

	return Merge(firstHalf, secondHalf);
}

function Merge(array1, array2) {
	var result = [];

	for (var i = 0, j = 0; i < array1.length || j < array2.length;) {
		if (i < array1.length && j < array2.length) {
			if (array1[i] <= array2[j]) {
				result.push(array1[i++]);
			} else {
				result.push(array2[j++]);
			}
		} else if (i < array1.length) {
			result.push(array1[i++]);
		} else if (j < array2.length) {
			result.push(array2[j++]);
		}
	}

	return result;
}

module.exports = MergeSort;