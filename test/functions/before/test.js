var assert = require('chai').assert;
var path = require('path');
var sinon = require('sinon');
var before = require(path.resolve(__dirname, '../../../src/functions/before/before.js'));

describe('Before', function() {
	it('should invoke a function no more than X times', function() {
		var spied = sinon.spy(before(5, function(){}));

		for (var i = 1; i <= 5; i++) {
			spied(i);
			assert.isTrue(spied.calledWith(i), 'Loop: Should be called with ' + i);
		}

		spied(10);
		assert.isTrue(spied.calledWith(5), 'Outside: Should be called with ' + 5);
	});
});