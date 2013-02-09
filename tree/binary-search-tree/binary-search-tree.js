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
		var node = this._root;

		while (node) {
			if (value < node.value) {
				node = node.left;
			}
			else if (value < node.value) {
				node = node.right;
			}
			else {
				return true;
			}
		}
	},

	getRoot: function() {
		return this._root;
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
						node.left = new Liferay.BSTNode(value);

						return;
					}
					
					node = node.left;
				}
				else if (value > node.value) {
					if (!node.right) {
						node.right = new Liferay.BSTNode(value);

						return;
					}
					
					node = node.right;
				}
				else {
					return;
				}
			}
		}
	}
};