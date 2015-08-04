var assert = require('chai').assert;
var path = require('path');
var zip = require(path.resolve(__dirname, '../../../src/arrays/zip/zip.js'));

describe('zip', function() {
    it('should zip multiple arrrays', function() {
        var res = zip(['fred', 'barney'], [30, 40], [true, false]);

        assert.strictEqual(2, res.length);
        assert.sameMembers(['fred', 30, true], res[0]);
        assert.sameMembers(['barney', 40, false], res[1]);
    });
});