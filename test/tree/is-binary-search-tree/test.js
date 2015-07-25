var assert = require('chai').assert;
var path = require('path');

var BST = require(path.resolve(__dirname, '../../../src/tree/binary-search-tree/binary-search-tree.js'));
var BSTChecker = require(path.resolve(__dirname, '../../../src/tree/is-binary-search-tree/is-binary-search-tree.js'));

describe('BSTChecker', function() {
    it('should check if tree is binary search tree', function() {
    	var bst = new BST();
		bst.add([8, 3, 1, 6, 4, 7, 10, 14, 13]);

		var bstChecker = new BSTChecker();

		debugger;
		assert.isTrue(bstChecker.isBST(bst.getRoot()));
    });
});