var assert = require('chai').assert;
var path = require('path');
var sinon = require('sinon');

var debounce = require(path.resolve(__dirname, '../../../src/functions/debounce/debounce.js'));

describe('Debounce', function() {
    it.only('should debounce a function', function(done) {
        function a() {
            assert.isTrue(spy.calledOnce);
            assert.sameMembers([1, 2, 3, 1, 2, 3, 4], Array.prototype.slice.call(arguments, 0));

            done();
        }

        var spy = sinon.spy(a);

        var b = debounce(spy, 20, this, 1, 2, 3, 4);

        b(1, 2, 3);
        b(1, 2, 3);
        b(1, 2, 3);
        b(1, 2, 3);
    });
});