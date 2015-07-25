var assert = require('chai').assert;
var path = require('path');
require(path.resolve(__dirname, '../../../src/functions/bind/bind.js'));

describe('Bind', function() {
	it('should bind a function to another one', function() {
		function a() {
			return Array.prototype.slice.call(arguments, 0);
		}

		var b = a.bind2(this, 1, 2, 3, 4);

		var res = b(22, 23, 24);

		assert.sameMembers([22, 23, 24, 1, 2, 3, 4], res);
	});

	it('should call a bound function with different context', function() {
		var obj = {};

		function a() {
			return {
				context: this,
				args: Array.prototype.slice.call(arguments, 0)
			};
		}

		var b = a.bind2(obj, 1, 2, 3, 4);

		var res = b(22, 23, 24);

		assert.strictEqual(obj, res.context);
		assert.sameMembers([22, 23, 24, 1, 2, 3, 4], res.args);
	});
});