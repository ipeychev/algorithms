function CompressSimple(string) {
    if (string.length < 3) {
        return string;
    }

    var result = [];

    var endIndex = string.length - 1;

    for (var i = 1; i < endIndex; i++) {
        result.push(string.substring(0, i) + (endIndex - i) + string.charAt(endIndex));
    }

    result.push(string);

    return result;
}

module.exports = CompressSimple;