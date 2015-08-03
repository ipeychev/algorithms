'use strict';

function before(n, func) {
    var self = this;
    var origArgs = Array.prototype.slice.call(arguments, 2);

    var callCount = 0;
    var result;

    return function() {
        if (callCount < n) {
            var currentArgs = Array.prototype.slice.call(arguments, 0);
            var callingArgs = currentArgs.concat(origArgs);

            callCount++;

            result = func.apply(self, callingArgs);
        }

        return result;
    };
}

module.exports = before;