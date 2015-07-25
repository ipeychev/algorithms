'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.BreadthFirstSearch = function(config) {
};

Liferay.BreadthFirstSearch.prototype = {
	constructor: Liferay.BreadthFirstSearch,

	traverse: function(node) {
		var result = [];

		this._traverse(node, result);

		return result;
	},

	_traverse: function(node, result) {
		var queue = [node];

		while (queue.length) {
			node = queue.shift();

			result.push(node.value);

			if (node.left) {
				queue.push(node.left);
			}

			if (node.right) {
				queue.push(node.right);
			}
		}
	}
};