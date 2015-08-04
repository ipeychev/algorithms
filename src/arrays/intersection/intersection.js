function intersection() {
    var arrays = Array.prototype.slice.call(arguments, 0);

    var cache = Object.create(null);
    var result = [];

    for (var i = 0; i < arrays.length; i++) {
        var array = arrays[i];

        for (var j = 0; j < array.length; j++) {
            var val = array[j];
            var curValue;

            if (i > 0) {
                if (!Object.prototype.hasOwnProperty.call(cache, val)) {
                    continue;
                } else {
                    curValue = cache[val] || 0;

                    if (curValue < i) {
                        continue;
                    }

                    cache[val] = ++curValue;

                    if (curValue === arrays.length) {
						result.push(val);
					}
                }
            } else {
                curValue = cache[val] || 0;

                cache[val] = ++curValue;
            }
        }
    }

    return result;
}

module.exports = intersection;