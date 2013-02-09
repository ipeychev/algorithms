'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.BSTNode = function(value) {
	this.value = value;
};

Liferay.BSTNode.prototype = {
	constructor: Liferay.BSTNode,

	left: null,

	right: null,

	value: null
};