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
	}
};