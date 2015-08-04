var assert = require('chai').assert;
var path = require('path');

var memoize = require(path.resolve(__dirname, '../../../src/functions/memoize/memoize.js'));

describe('memoize', function() {
    it('should memoize a function', function() {
        var mem = memoize(function(a, b, c) {
			return a + b + c;
		});

		assert.isFalse(Object.prototype.hasOwnProperty.call(memoize.cache, 'a$'));
        mem('a');
		assert.isTrue(Object.prototype.hasOwnProperty.call(memoize.cache, 'a$'));

		assert.isFalse(Object.prototype.hasOwnProperty.call(memoize.cache, 'a$b$'));
		mem('a', 'b');
		assert.isTrue(Object.prototype.hasOwnProperty.call(memoize.cache, 'a$b$'));

		assert.isFalse(Object.prototype.hasOwnProperty.call(memoize.cache, 'a$b$c$'));
		mem('a', 'b', 'c');
		assert.isTrue(Object.prototype.hasOwnProperty.call(memoize.cache, 'a$b$c$'));

		assert.isTrue(Object.prototype.hasOwnProperty.call(memoize.cache, 'a$b$c$'));
		mem('a', 'b', 'c');
		assert.isTrue(Object.prototype.hasOwnProperty.call(memoize.cache, 'a$b$c$'));
	});
});