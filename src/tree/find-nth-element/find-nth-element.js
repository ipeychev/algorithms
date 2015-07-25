'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.FindNthElement = function(config) {
};

Liferay.FindNthElement.prototype = {
	constructor: Liferay.FindNthElement,

	find: function(node, index) {
		var nodeInfo = {
			node: null,
			index: 0
		};

		this._find(node, index, nodeInfo);

		return nodeInfo.node ? nodeInfo.node.value : null;
	},

	_find: function(node, index, nodeInfo) {
		var result;

		if (!node || nodeInfo.node) {
			return;
		}

		this._find(node.left, index, nodeInfo);

		++nodeInfo.index;

		if (index === nodeInfo.index) {
			nodeInfo.node = node;

			return;
		}

		if (!nodeInfo.node) {
			this._find(node.right, index, nodeInfo);
		}
	}
};