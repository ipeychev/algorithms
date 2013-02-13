'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.BSTNode = function(value, parent) {
	this.value = value;

	this.parent = parent;
};

Liferay.BSTNode.prototype = {
	constructor: Liferay.BSTNode,

	left: null,

	parent: null,

	right: null,

	value: null
};