var assert = require('chai').assert;
var path = require('path');
var Anagram = require(path.resolve(__dirname, '../../../src/strings/anagrams/anagrams.js'));

describe('Anagram', function() {
    it('should check if a string is an anagram', function() {
        var anagram = new Anagram();

        assert.isTrue(anagram.isAnagram('Eleven plus two', 'Twelve plus one'));
        assert.isFalse(anagram.isAnagram('Eleven', 'Twelve plus one'));
        assert.isTrue(anagram.isAnagram('not anagram', 'aanrgam ton'));
        assert.isFalse(anagram.isAnagram('nut anagram', 'aanrgam ton'));
    });

    it('should find anagrams in a list', function() {
        var anagram = new Anagram();

        var res = anagram.findAnagrams(['stop', 'post', 'tops', 'test']);
        assert.sameMembers(['stop', 'post', 'tops'], res);
    });
});