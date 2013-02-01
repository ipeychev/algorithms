'use strict';

if (typeof Liferay == 'undefined') {
    var Liferay = {};
}

Liferay.BalancedParentheses = function(config) {
};

Liferay.BalancedParentheses.prototype = {
    constructor: Liferay.BalancedParentheses,
    
    check: function(content) {
        var htOpenParentheses = {
            '(': 1,
            '[': 1,
            '{': 1
        };

        var htClosedParentheses = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        var stack = [];

        for (var i = 0; i < content.length; i++) {
            var character = content.charAt(i);

            if (htOpenParentheses[character]) {
                stack.push(character);
            }
            else {
                if (stack.length === 0) {
                    return false;
                }

                var lastParenthese = stack.pop();

                if (lastParenthese !== htClosedParentheses[character]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
};