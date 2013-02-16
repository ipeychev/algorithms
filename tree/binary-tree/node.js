'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.BTNode = function(value, parent) {
	this.value = value;

	this.parent = parent;
};

Liferay.BTNode.prototype = {
	constructor: Liferay.BTNode,

	left: null,

	right: null,

	value: null
};