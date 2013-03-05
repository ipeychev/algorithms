'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.KthLargestNode = function(config) {
};

Liferay.KthLargestNode.prototype = {
	constructor: Liferay.KthLargestNode,

	find: function(node, k) {
		this._count = 0;

		return this._find(node, k);
	},

	_find: function(node, k) {
		if (!node) {
			return;
		}

		var kthNodeValue = this._find(node.right, k);

		if (kthNodeValue) {
			return kthNodeValue;
		}

		if (++this._count === k) {
			return node.value;
		}

		return this._find(node.left, k);
	}
};