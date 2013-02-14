'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.BST = function(config) {
};

Liferay.BST.prototype = {
	constructor: Liferay.BST,

	add: function(value) {
		if ((Array.isArray && Array.isArray(value)) || Object.prototype.toString.call(value) === '[object Array]') {
			for (var i = 0; i < value.length; i++) {
				this._add(value[i]);
			}
		}
		else {
			this._add(value);
		}
	},

	contains: function (value) {
		return !!this.getNode(value);
	},

	/*
	 * The predecessor node is the node with the next smaller number in the tree
	 */
	getInorderPredecessor: function(node) {
		var curNode;

		// the node has right child, so we get its rightmost child
		if (node.left) {
			curNode = node.left;

			while (curNode.right) {
				curNode = curNode.right;
			}

			return curNode;
		}
		else {
			// travelling up, we get the first parent, whose right node === node we currently are
			while (node) {
				if (node.parent && node.parent.right === node) {
					curNode = node.parent;
				}

				node = node.parent;
			}

			return curNode;
		}
	},

	/*
	 * The successor node is the node with the next bigger number in the tree
	 */
	getInorderSuccessor: function(node) {
		var curNode;

		// the node has right child, so we get its leftmost child
		if (node.right) {
			curNode = node.right;

			while (curNode.left) {
				curNode = curNode.left;
			}

			return curNode;
		}
		else {
			// travelling up, we get the first parent, whose left node === node we currently are
			while (node) {
				if (node.parent && node.parent.left === node) {
					curNode = node.parent;

					break;
				}

				node = node.parent;
			}

			return curNode;
		}
	},

	getNode: function(value) {
		var node = this._root;

		while (node) {
			if (value < node.value) {
				node = node.left;
			}
			else if (value > node.value) {
				node = node.right;
			}
			else {
				return node;
			}
		}
	},

	getRoot: function() {
		return this._root;
	},

	getMaxHeight: function() {
		return this._getMaxHeight(this._root);
	},

	_add: function(value) {
		if (!this._root) {
			this._root = new Liferay.BSTNode(value);
		}
		else {
			var node = this._root;

			while (node) {
				if (value < node.value) {
					if (!node.left) {
						node.left = new Liferay.BSTNode(value, node);

						return;
					}
					
					node = node.left;
				}
				else if (value > node.value) {
					if (!node.right) {
						node.right = new Liferay.BSTNode(value, node);

						return;
					}
					
					node = node.right;
				}
				else {
					return;
				}
			}
		}
	},

	_getMaxHeight: function(node) {
		if (!node) {
			return 0;
		}

		var leftHeight = this._getMaxHeight(node.left);

		var rightHeight = this._getMaxHeight(node.right);

		return (leftHeight > rightHeight) ? leftHeight + 1 : rightHeight + 1;
	}
};