var assert = require('chai').assert;
var path = require('path');
var CheckRotation = require(path.resolve(__dirname, '../../../src/strings/check-rotation/check-rotation.js'));

describe('CheckRotation', function() {
    it('should check if a string is a rotation of another', function() {
        assert.isTrue(CheckRotation('waterbottle', 'erbottlewat', 3));
        assert.isTrue(CheckRotation('waterbottle', 'erbottlewat', 5));
        assert.isFalse(CheckRotation('waterbottle', 'peshokonia', 2));
    });
});