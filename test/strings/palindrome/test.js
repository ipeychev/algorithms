var assert = require('chai').assert;
var path = require('path');
var Palindrome = require(path.resolve(__dirname, '../../../src/strings/palindrome/palindrome.js'));

describe('Palindrome', function() {
    it('should validate a palindrome', function() {
        assert.isTrue( Palindrome('Sator Arepo Tenet Opera Rotas'));
    });

    it('should not validate a string which is not a palindrome', function() {
        assert.isFalse(Palindrome('this is nothing'));
    });

    it('should validate palindrome contains non-alphanumeric characters', function() {
        assert.isTrue(Palindrome('Насила закараха свинете ни в Сахара! - каза Лисан'));
    });
});