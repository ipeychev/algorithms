var assert = require('chai').assert;
var path = require('path');

var BST = require(path.resolve(__dirname, '../../../src/tree/binary-search-tree/bst.js'));
var BSTChecker = require(path.resolve(__dirname, '../../../src/tree/is-binary-search-tree/is-binary-search-tree.js'));

describe('BST', function() {
    it('should create a binary search tree', function() {
        var bst = new BST();
        bst.add([8, 3, 1, 6, 4, 7, 10, 14, 13]);

        var bstChecker = new BSTChecker();

        assert.isTrue(bstChecker.isBST(bst.getRoot()));
    });

    it('should produce in order traversal', function() {
        var values = [8, 3, 1, 6, 4, 7, 10, 14, 13];
        var expected = [ 1, 3, 4, 6, 7, 8, 10, 13, 14 ];

        var bst = new BST();
        bst.add(values);

        var res = bst.inOrderTraversal();

        assert.strictEqual(JSON.stringify(expected), JSON.stringify(res));
    });

    it('should produce post order traversal', function() {
        var values = [8, 3, 1, 6, 4, 7, 10, 14, 13];
        var expected = [1, 4, 7, 6, 3, 13, 14, 10, 8];

        var bst = new BST();
        bst.add(values);

        var res = bst.postOrderTraversal();

        assert.strictEqual(JSON.stringify(expected), JSON.stringify(res));
    });

    it('should produce pre order traversal', function() {
        var values = [8, 3, 1, 6, 4, 7, 10, 14, 13];
        var expected = [8, 3, 1, 6, 4, 7, 10, 14, 13];

        var bst = new BST();
        bst.add(values);

        var res = bst.preOrderTraversal();

        assert.strictEqual(JSON.stringify(expected), JSON.stringify(res));
    });
});