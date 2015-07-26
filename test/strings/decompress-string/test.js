var assert = require('chai').assert;
var path = require('path');
var DecompressString = require(path.resolve(__dirname, '../../../src/strings/decompress-string/decompress-string.js'));

describe('DecompressString', function() {
    it('should decompress a string', function() {
        assert.strictEqual('CAADBBBCCCC', DecompressString('C1A2DB3C4'));
        assert.strictEqual('C', DecompressString('C1'));
        assert.strictEqual('CCCCCCCCC', DecompressString('C9'));
        assert.strictEqual('C', DecompressString('C'));
    });
});