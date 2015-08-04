var assert = require('chai').assert;
var path = require('path');
var sinon = require('sinon');

var throttle = require(path.resolve(__dirname, '../../../src/functions/throttle/throttle.js'));

describe('Throttle', function() {
    it('should throttle a function', function(done) {
        function a() {}

        var spy = sinon.spy(a);

        var b = throttle(spy, 50);

        b();
        b();
        b();
        b();

        assert.isTrue(spy.calledOnce, 'After the first round it should be called once');

        setTimeout(function() {
            b();
            b();
            b();
            b();

            assert.isTrue(spy.calledTwice, 'After the second round it should be called twice');

            done();
        }, 50);
    });
});