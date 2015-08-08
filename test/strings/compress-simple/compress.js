var assert = require('chai').assert;
var path = require('path');
var CompressSimple = require(path.resolve(__dirname, '../../../src/strings/compress-simple/compress-simple.js'));

describe('CompressSimple', function() {
    it('should compress a string', function() {
        assert.strictEqual('i18n', CompressSimple('internationalization'));
        assert.strictEqual('ab', CompressSimple('ab'));
        assert.strictEqual('', CompressSimple(''));
        assert.strictEqual('metal', CompressSimple('m3l'));
        assert.throws(CompressSimple(1));
        assert.throws(CompressSimple(null));
    });
});