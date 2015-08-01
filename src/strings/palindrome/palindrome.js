var Palindrome = function(palindrome) {
    var regexChar = /[a-z\u0430-\u044f0-9]/i;

    for (var i = 0, j = palindrome.length - 1; i !== j;) {
        while (i < palindrome.length && !regexChar.test(palindrome.charAt(i))) {
            i++;
        }

        while (j >= 0 && !regexChar.test(palindrome.charAt(j))) {
            j--;
        }

        if (i < palindrome.length && j >= 0) {
            if (palindrome.charAt(i).toLowerCase() !== palindrome.charAt(j).toLowerCase()) {
                return false;
            }

            i++;
            j--;
        } else {
            return false;
        }
    }

    return true;
};

module.exports = Palindrome;