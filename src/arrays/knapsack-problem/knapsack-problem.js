'use strict';

if (typeof Liferay == 'undefined') {
    var Liferay = {};
}

Liferay.KnapsackProblem = function(config) {
};

Liferay.KnapsackProblem.prototype = {
    constructor: Liferay.KnapsackProblem,

    compute: function(array, maxSum) {
        var result = [];

        this._compute(array, maxSum, 0, result);

        return result;
    },

    _compute: function(array, maxSum, startIndex, result) {
        if (maxSum < 0) {
            return 0;
        }

        if (maxSum === 0) {
            return 1;
        }

        for (var i = startIndex; i < array.length; ++i) {
            var retValue = this._compute(array, maxSum - array[i], i + 1, result);

            if (retValue) {
                result.push(array[i]);

                return 1;
            }
        }

        return 0;
    }
};