function zip() {
	var arrays = Array.prototype.slice.call(arguments, 0);

    var result = [];
    var length = arrays[0].length;

    for (var i = 0; i < length; i++) {
        var tmp = [];

        for (var j = 0; j < arrays.length; j++) {
            tmp.push(arrays[j][i]);
        }

        result.push(tmp);
    }

    return result;
}

module.exports = zip;