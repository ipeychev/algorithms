'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.AncestorTwoNodes = function(config) {
};

Liferay.AncestorTwoNodes.prototype = {
	constructor: Liferay.AncestorTwoNodes,

	find: function(node, value1, value2) {
		while (node) {
			var value = node.value;

			if (value > value1 && value > value2) {
				node = node.left;
			}
			else if (value < value1 && value < value2) {
				node = node.right;
			}
			else {
				break;
			}
		}

		return node ? node.value : null;
	}
};