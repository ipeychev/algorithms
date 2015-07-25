var assert = require('assert');
var path = require('path');
var ReverseWords = require(path.resolve(__dirname, '../../../src/strings/reverse-sentence/reverse-sentence.js'));

describe('ReverseSentence', function() {
    it('should reverse a sentence', function() {
        assert.strictEqual('string is this', ReverseWords('this is string'));
    });

    it('should reverse a sentence with multiple spaces', function() {
        assert.strictEqual('string  is   this', ReverseWords('this   is  string'));
    });

    it('should reverse a sentence with one word', function() {
        assert.strictEqual('string', ReverseWords('string'));
    });
});