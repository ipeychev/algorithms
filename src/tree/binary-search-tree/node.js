function BSTNode(value, parent) {
	this.value = value;

	this.parent = parent;
}

BSTNode.prototype = {
	constructor: BSTNode,

	left: null,

	parent: null,

	right: null,

	value: null
};

module.exports = BSTNode;