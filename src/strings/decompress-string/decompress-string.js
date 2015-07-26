var DecompressString = function(content) {
    var res = [];
    var prevChar;

    for (var i = 0; i < content.length; i++) {
        var curChar = content.charAt(i);

        var num = parseInt(curChar, 10);

        if (typeof num === 'number' && !isNaN(num)) {
            prevChar = content.charAt(i - 1);

            for (var j = 1; j < num; j++) {
                res.push(prevChar);
            }
        } else {
            res.push(curChar);
        }
    }

    return res.join('');
};

module.exports = DecompressString;