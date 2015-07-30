var assert = require('chai').assert;
var path = require('path');

var MergeSort = require(path.resolve(__dirname, '../../../src/sorting/mergesort/mergesort.js'));

describe('MergeSort', function() {
    it('should sort an array', function() {
        var array = [1, 10, 4, 5, 7, 8, 3, 2, 9, 6];

        var res = MergeSort(array);

        assert(res.length === array.length);

        for (var i = 0; i < res.length; i++) {
            assert.strictEqual(i + 1, res[i]);
        }
    });
});