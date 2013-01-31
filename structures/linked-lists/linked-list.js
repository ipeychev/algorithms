'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.LinkedList = function(config) {
	this._length = 0;

	this._head = null;
};

Liferay.LinkedList.prototype = {
	constructor: Liferay.LinkedList,

	add: function(value) {
		var current, node;

		node = {
			value: value,
			next: null
		};

		if (this._head === null) {
			this._head = node;
		}
		else {
			current = this._head;

			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}

		++this._length;
	},

	contains: function(value) {
		var current = this._head;

		while(current) {
			if (current.value === value) {
				return true;
			}

			current = current.next;
		}

		return false;
	},

	itemAt: function(index) {
		var current, i = 0;

		current = this._head;

		if (index >= 0 && index < this._length) {
			while (i < index) {
				current = current.next;

				++i;
			}

			return current.value;
		}

		return null;
	},

	remove: function(index) {
		var current, i = 0, previous;

		if (index >= 0 && index < this._length) {
			current = this._head;

			if (index === 0) {
				current = current._next;
			}
			else {
				while (i++ < index) {
					previous = current;

					current = current.next;
				}

				previous.next = current.next;
			}

			--this._length;

			return current.value;
		}

		return null;
	},

	size: function() {
		return this._length;
	}
};