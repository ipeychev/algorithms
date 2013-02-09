'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.BinarySearchTreeChecker = function(config) {
};

Liferay.BinarySearchTreeChecker.prototype = {
	constructor: Liferay.BinarySearchTreeChecker,

	isBST: function(rootNode) {
		return this._isBST(rootNode, -Infinity, Infinity);

		// alternate solution, using inOrder traversal
		// return this._isBST2(rootNode, -Infinity);
	},

	_isBST: function(node, minValue, maxValue) {
		if (!node) {
			return true;
		}

		var nodeValue = node.value;

		if (!(minValue < nodeValue && nodeValue < maxValue)) {
			return false;
		}

		return this._isBST(node.left, minValue, node.value) && this._isBST(node.right, node.value, maxValue);
	},

	isBST2: function(node) {
		return this._isBST2(node, -Infinity);
	},

	/*
	 * Alternate solution using inOrder traversal
	 */
	_isBST2: function(node, lastValue) {
		if (!node) {
			return true;
		}

		if (!this._isBST2(node.left, lastValue)) {
			return false;
		}

		if (lastValue >= node.value) {
			return false;
		}

		lastValue = node.value;

		return this._isBST2(node.right, lastValue);
	}
};