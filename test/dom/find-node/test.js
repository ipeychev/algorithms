var assert = require('chai').assert;
var jsdom = require('jsdom');
var path = require('path');
var sinon = require('sinon');

var findNode = require(path.resolve(__dirname, '../../../src/dom/find-node/find-node.js'));

describe('FindNode', function() {
    it('should find the corresponding node in another dom tree', function(done) {
        jsdom.env({
            file: path.join(__dirname, 'fixtures/dom.html'),
            done: function (errors, window) {
                var document = window.document;

                var oneContainer = document.getElementById('divOne');
                var twoContainer = document.getElementById('divTwo');
                var divOneSpan4 = document.getElementById('divOne-span4');

                var res = findNode(oneContainer, divOneSpan4, twoContainer);

                assert.strictEqual(document.getElementById('divTwo-span4'), res);

                done();
            }
        });
    });
});