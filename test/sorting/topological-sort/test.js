var assert = require('chai').assert;
var path = require('path');

var TS = require(path.resolve(__dirname, '../../../src/sorting/topological-sort/topological-sort.js'));
var TSUnit = require(path.resolve(__dirname, '../../../src/sorting/topological-sort/unit.js'));

describe('TS', function() {
    it('should provide a topological sort', function() {
        var ts = new TS();

        var tsOne = new TSUnit('one', []);
        var tsTwo = new TSUnit('two', [tsOne]);
        var tsThree = new TSUnit('three', [tsOne, tsTwo]);
        var tsFour = new TSUnit('four', [tsThree]);

        var res = ts.sort([tsFour]);

        assert.strictEqual(JSON.stringify(['one', 'two', 'three', 'four' ]), JSON.stringify(res));
    });
});