var assert = require('chai').assert;
var path = require('path');
var intersection = require(path.resolve(__dirname, '../../../src/arrays/intersection/intersection.js'));

describe('intersection', function() {
    it('should intersect the values from multiple arrays', function() {
        assert.sameMembers([2], intersection([1, 2], [4, 2], [2, 1]));
        assert.sameMembers([2, 3], intersection([1, 3, 2], [3, 4, 2], [2, 1, 3]));
    });
});