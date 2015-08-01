var array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function MergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    var index = Math.floor(array.length / 2);

    var leftArray = MergeSort(array.slice(0, index));
    var rightArray = MergeSort(array.slice(index));

    var result = Merge(leftArray, rightArray);

    return result;
}

function Merge(leftArray, rightArray) {
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
        } else if (j < rightArray.length) {
            result.push(rightArray[j++]);
        }
    }

    return result;
}

module.exports = MergeSort;