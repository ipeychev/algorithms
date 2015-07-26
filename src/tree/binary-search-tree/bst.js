var path = require('path');
var BSTNode = require(path.resolve(__dirname, 'bstnode.js'));

function BST() {}

BST.prototype = {
    constructor: BST,

    add: function(value) {
        if (Array.isArray(value)) {
            value.forEach(function(val) {
                this.add(val);
            }.bind(this));
        }

        if (!this._rootNode) {
            this._rootNode = new BSTNode(value);
        } else {
            this._add(this._rootNode, value);
        }
    },

    getRoot: function() {
        return this._rootNode;
    },

    inOrderTraversal: function() {
        this._nodes = [];
        this._inOrderTraversal(this._rootNode);
        return this._nodes;
    },

    postOrderTraversal: function() {
        this._nodes = [];
        this._postOrderTraversal(this._rootNode);
        return this._nodes;
    },

    preOrderTraversal: function() {
        this._nodes = [];
        this._preOrderTraversal(this._rootNode);
        return this._nodes;
    },

    _add: function(root, value) {
        var node = root;

        while (node) {
            if (value < node.value) {
                if (!node.left) {
                    node.left = new BSTNode(value, node);
                    return;
                } else {
                    node = node.left;
                }
            } else if (value > node.value) {
                if (!node.right) {
                    node.right = new BSTNode(value, node);
                    return;
                } else {
                    node = node.right;
                }
            } else {
                return;
            }
        }
    },

    _inOrderTraversal: function(node) {
        if (!node) {
            return;
        }

        this._inOrderTraversal(node.left);

        this._nodes.push(node.value);

        this._inOrderTraversal(node.right);
    },

    _postOrderTraversal: function(node) {
        if (!node) {
            return;
        }

        this._postOrderTraversal(node.left);

        this._postOrderTraversal(node.right);

        this._nodes.push(node.value);
    },

    _preOrderTraversal: function(node) {
        if (!node) {
            return;
        }

        this._nodes.push(node.value);

        this._preOrderTraversal(node.left);

        this._preOrderTraversal(node.right);
    }
};

module.exports = BST;