'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.BalancedTreeChecker = function(config) {
};

Liferay.BalancedTreeChecker.prototype = {
	constructor: Liferay.BalancedTreeChecker,

	isBalanced: function(root) {
		var maxHeight = this._getMaxHeight(root);

		var minHeight = this._getMinHeight(root);

		var isBalanced = ((maxHeight - minHeight) <= 1);

		return isBalanced;
	},

	_getMaxHeight: function(root) {
		if (root === null) {
			return 0;
		}

		var maxHeightLeft = this._getMaxHeight(root.left);

		var maxHeightRight = this._getMaxHeight(root.right);

		return Math.max(maxHeightLeft, maxHeightRight) + 1;
	},

	_getMinHeight: function(root) {
		if (root === null) {
			return 0;
		}

		var minHeightLeft = this._getMinHeight(root.left);

		var minHeightRight = this._getMinHeight(root.right);

		return Math.min(minHeightLeft, minHeightRight) + 1;
	}
};