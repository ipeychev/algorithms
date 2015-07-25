var assert = require('chai').assert;
var path = require('path');
var ExtractMinMax = require(path.resolve(__dirname, '../../../src/arrays/extract-min-max/extract-min-max.js'));

describe('ExtractMinMax', function() {
    it('should the minimum and maximum numbers from an array', function() {
        assert.sameMembers([1, 9], ExtractMinMax([3, 4, 2, 7, 1, 9]));
        assert.sameMembers([1, 19], ExtractMinMax([3, 4, 2, 19, 7, 1, 9]));
        assert.sameMembers([-100, 106], ExtractMinMax([-100, 101, 104, 106]));
    });
});