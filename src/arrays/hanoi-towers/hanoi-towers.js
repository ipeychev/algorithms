'use strict';

if (typeof Liferay == 'undefined') {
	var Liferay = {};
}

Liferay.HanoyTowers = function(config) {
};

Liferay.HanoyTowers.prototype = {
	constructor: Liferay.HanoyTowers,

	process: function(disks) {
		var towers = [];

		for (var i = 0; i < 3; i++) {
			towers[i] = new Liferay.Tower(i);
		}

		for (i = disks - 1; i >= 0; --i) {
			towers[0].add(i);
		}

		towers[0].moveDisks(disks, towers[2], towers[1]);

		for (i = 0; i < 3; i++) {
			towers[i].print();
		}
	}
};

Liferay.Tower = function(index) {
	this._disks = [];

	this._index = index;
};

Liferay.Tower.prototype = {
	constructor: Liferay.Tower,

	add: function(diskNumber) {
		var length = this._disks.length;

		if (this._disks[length - 1] <= diskNumber) {
			console.log('Disk with number ' + diskNumber + ' cannot be added to tower with index ' + this._index);
		}

		this._disks.push(diskNumber);
	},

	moveDisks: function(number, destination, buffer) {
		if (number > 0) {
			this.moveDisks(number - 1, buffer, destination);

			this.moveTopTo(destination);

			buffer.moveDisks(number - 1, destination, this);
		}
	},

	moveTopTo: function(tower) {
		var topDisk = this._disks.pop();

		tower.add(topDisk);
	},

	print: function () {
		if (this._disks.length === 0) {
			console.log('Tower ' +  this._index + ' does not contain any disks');

			return;
		}

		console.log('Tower ' +  this._index + ' contains disks (from top to bottom): ');

		for (var i = this._disks.length - 1; i >= 0; --i) {
			console.log(this._disks[i]);
		}
	}
};