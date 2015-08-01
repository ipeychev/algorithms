var assert = require('chai').assert;
var path = require('path');
var TargetSum = require(path.resolve(__dirname, '../../../src/arrays/target-sum/target-sum.js'));

describe('TargetSum', function() {
    it('should return valid sum', function() {
        var res = TargetSum([3, 7, 5, 9, 0, 1], 16);

        assert.propertyVal(res, 'left', 4);
        assert.propertyVal(res, 'right', 5);
    });

    it('should return null when sum not found', function() {
        var res = TargetSum([3, 7, 5, 9, 0, 1], 26);

        assert.isNull(res);
    });
});