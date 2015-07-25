var assert = require('chai').assert;
var path = require('path');
var StripToFlat = require(path.resolve(__dirname, '../../../src/arrays/strip-to-flat/strip-to-flat.js'));

describe('StripToFlat', function() {
    it('should strip arrays to flat', function() {
        var result = StripToFlat(
            [1, [2, 3], [4, [5, 6], 7]]
        );

        assert.sameMembers([1, 2, 3, 4, 5, 6, 7], result);

        result = StripToFlat(
            [3, [2, 1], [[4, 7], 0, 8]]
        );

        assert.sameMembers([3, 2, 1, 4, 7, 0, 8], result);

        result = StripToFlat(
            [[[[[[[[[[5]]]]]]]]]]
        );

        assert.sameMembers([5], result);
    });
});