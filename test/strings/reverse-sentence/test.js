var assert = require('chai').assert;
var path = require('path');
var ReverseSentence = require(path.resolve(__dirname, '../../../src/strings/reverse-sentence/reverse-sentence.js'));

describe('ReverseSentence', function() {
    it('should reverse a sentence', function() {
        assert.strictEqual('string is this', ReverseSentence('this is string'));
    });

    it('should reverse a sentence with multiple spaces', function() {
        assert.strictEqual('string  is   this', ReverseSentence('this   is  string'));
    });

    it('should reverse a sentence with one word', function() {
        assert.strictEqual('string', ReverseSentence('string'));
    });
});