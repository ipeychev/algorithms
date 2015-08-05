var assert = require('chai').assert;
var path = require('path');
var FNRC = require(path.resolve(__dirname, '../../../src/strings/first-non-repeated-character/first-non-repeated-character.js'));

describe('First non-repeated character', function() {
    it('should find the first non-repeated character', function() {
        assert.strictEqual('b', FNRC('teebtast'));
    });
});