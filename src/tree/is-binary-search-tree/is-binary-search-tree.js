function BSTChecker() {}

BSTChecker.prototype = {
	constructor: BSTChecker,

	isBST: function(rootNode) {
		if (!rootNode) {
			return false;
		}

		return this._isBST(rootNode, Infinity, -Infinity);
	},

	_isBST: function(node, minValue, maxValue) {
		if (!node) {
			return true;
		}

		if ((node.left && node.left.value >= minValue) || (node.right && node.right.value <= maxValue)) {
			return false;
		}

		return this._isBST(node.left, node.value, maxValue) && this._isBST(node.right, minValue, node.value);
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

module.exports = BSTChecker;