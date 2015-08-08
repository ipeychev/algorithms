function reduce(array, func, accumulator, context) {
    var i = 0;

    if (!accumulator) {
        accumulator = array[0];
        i = 1;
    }

    for (; i < array.length; i++) {
        accumulator = func.call(context || this, accumulator, array[i], context || this);
	}

	return accumulator;
}

module.exports = reduce;