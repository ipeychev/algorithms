'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.AncestorTwoNodes = function(config) {
};

Liferay.AncestorTwoNodes.prototype = {
	constructor: Liferay.AncestorTwoNodes,

	find: function(node, value1, value2) {
		var queue = [node];

		var index = 0;

		var found1 = false;
		var found2 = false;

		var ancestorIndex = -1;

		while (index < queue.length) {
			node = queue[index];

			if (!found1 && node.value === value1) {
				found1 = true;

				if (ancestorIndex < 0) {
					ancestorIndex = index - 1;
				}
			}
			else if (!found2 && node.value === value2) {
				found2 = true;

				if (ancestorIndex < 0) {
					ancestorIndex = index - 1;
				}
			}

			if (found1 && found2) {
				return queue[ancestorIndex].value;
			}

			if (node.left) {
				queue.push(node.left);
			}

			if (node.right) {
				queue.push(node.right);
			}

			++index;
		}

		return null;
	}
};