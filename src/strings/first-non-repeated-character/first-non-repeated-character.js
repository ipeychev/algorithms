function FirstNonRepeatedCharacter(string) {
    var cache = Object.create(null);
    var char;

    for (var i = 0; i < string.length; i++) {
        char = string.charAt(i);
        var curVal = cache[char] || 0;

        cache[char] = ++curVal;
    }

    for (i = 0; i < string.length; i++) {
        char = string.charAt(i);

        if (cache[char] <= 1) {
            return char;
        }
    }

    return '';
}

module.exports = FirstNonRepeatedCharacter;