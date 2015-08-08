var assert = require('chai').assert;
var path = require('path');
var sinon = require('sinon');

var reduce = require(path.resolve(__dirname, '../../../src/functions/reduce/reduce.js'));

describe('Reduce', function() {
    it('should reduce an array without accumulator', function() {
        var res = reduce([1, 2], function(total, n) {
            return total + n;
        });

        assert.strictEqual(3, res);
    });

    it('should reduce an array with accumulator', function() {
        var res = reduce([1, 2], function(total, n) {
            return total + n;
        }, 10);

        assert.strictEqual(13, res);
    });

    it('should reduce an array with accumulator and context', function() {
        var obj = {};

        var callback = sinon.stub();

        reduce([1, 2], callback, 10, obj);

        assert.isTrue(callback.calledOn(obj));
    });
});