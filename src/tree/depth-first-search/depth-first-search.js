'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.DepthFirstSearch = function(config) {
};

Liferay.DepthFirstSearch.prototype = {
	constructor: Liferay.DepthFirstSearch,

	/**
	 * In order traversal
	 * Left, root, right
	 */
	inOrderTraversal: function(node) {
		var result = [];

		this._inOrderTraversal(node, result);

		return result;
	},

	/**
	 * Post order traversal
	 * Left, right, root
	 */
	postOrderTraversal: function(node) {
		var result = [];

		this._postOrderTraversal(node, result);

		return result;
	},

	/**
	 * Pre order traversal
	 * Root, left, right
	 */
	preOrderTraversal: function(node) {
		var result = [];

		this._preOrderTraversal(node, result);

		return result;
	},

	// Left, root, right
	_inOrderTraversal: function(node, result) {
		if (!node) {
			return;
		}

		this._inOrderTraversal(node.left, result);

		result.push(node.value);

		this._inOrderTraversal(node.right, result);
	},

	// Left, right, root
	_postOrderTraversal: function(node, result) {
		if (!node) {
			return;
		}

		this._postOrderTraversal(node.left, result);

		this._postOrderTraversal(node.right, result);

		result.push(node.value);
	},

	// Root, left, right
	_preOrderTraversal: function(node, result) {
		if (!node) {
			return;
		}

		result.push(node.value);

		this._preOrderTraversal(node.left, result);

		this._preOrderTraversal(node.right, result);
	}
};