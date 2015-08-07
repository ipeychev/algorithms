// AAABBBCCCC
// A3B3C4

function CompressString(string) {
    var result = '';

    var curChar = string.charAt(0);
    var curCharLength = 1;

    for (var i = 1; i < string.length; i++) {
        var char = string.charAt(i);

        if (char === curChar) {
            ++curCharLength;
        } else {
            result += curChar;

            if (curCharLength > 1) {
                result += curCharLength;
            }

            curChar = char;
            curCharLength = 1;
        }
    }

    result += curChar;

    if (curCharLength > 1) {
        result += curCharLength;
    }

    return result;
}


module.exports = CompressString;