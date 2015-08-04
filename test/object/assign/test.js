var assert = require('chai').assert;
var path = require('path');

var assign = require(path.resolve(__dirname, '../../../src/object/assign/assign.js'));

describe('Assign', function() {
    it('should assign properties of source objects to a dest object', function() {
        var res = assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });

        assert.propertyVal(res, 'user', 'fred');
        assert.propertyVal(res, 'age', 40);
    });
});