function TargetSum(array, sum) {
	// We first sort the array, then we set two pointers to the first
	// and last item.
	// We calculate the sum of the two items of array, pointed by these
	// two pointers.
	// When the currentSum becomes equal to the searched sum, we return the
	// two pointers
    var sortedArray = new MergeSort(array);

    var pointerLeft = 0;
    var pointerRight = sortedArray.length - 1;

    while (pointerLeft !== pointerRight) {
        var currentSum = sortedArray[pointerLeft] + sortedArray[pointerRight];

        if (currentSum === sum) {
            return {
                left: pointerLeft,
                right: pointerRight
            };
        } else if (currentSum < sum) {
            ++pointerLeft;
        } else {
            --pointerRight;
        }
    }

    return null;
}

function MergeSort(array) {
	if (array.length <= 1) {
		return array;
	}

    var middle = Math.floor(array.length / 2);

    var leftArray = MergeSort(array.slice(0, middle));
    var rightArray = MergeSort(array.slice(middle));

    var result = merge(leftArray, rightArray);

    return result;
}

function merge(leftArray, rightArray) {
    var result = [];

    for (var i = 0, j = 0; i < leftArray.length || j < rightArray.length;) {
        if (i < leftArray.length && j < rightArray.length) {
            if (leftArray[i] <= rightArray[j]) {
                result.push(leftArray[i++]);
            } else {
                result.push(rightArray[j++]);
            }
        } else if (i < leftArray.length) {
            result.push(leftArray[i++]);
        } else {
            result.push(rightArray[j++]);
        }
    }

    return result;
}

module.exports = TargetSum;