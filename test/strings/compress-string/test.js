var assert = require('chai').assert;
var path = require('path');
var CompressString = require(path.resolve(__dirname, '../../../src/strings/compress-string/compress-string.js'));

describe('CompressString', function() {
    it('should compress a string', function() {
        assert.strictEqual('A3C3B2D', CompressString('AAACCCBBD'));
        assert.strictEqual('C', CompressString('C'));
        assert.strictEqual('C9', CompressString('CCCCCCCCC'));
        assert.strictEqual('ABC', CompressString('ABC'));
    });
});