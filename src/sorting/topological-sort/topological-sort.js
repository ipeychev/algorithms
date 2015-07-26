function TS() {}

TS.prototype = {
    constructor: TS,

    sort: function(nodes) {
        this._res = [];

        for (var i = 0; i < nodes.length; i++) {
        	if (!nodes[i].mark) {
            	this._visit(nodes[i]);
            }
        }

        return this._res.reverse();
    },

    _visit: function(node) {
        if (node.tmpMark) {
            throw new Error('Not a DAG: ' + node.name);
        }

        if (!node.mark) {
	        node.tmpMark = true;

	        for (var i = 0; i < node.deps.length; i++) {
	        	this._visit(node.deps[i]);
	        }

	        node.mark = true;
	        node.tmpMark = false;

	        this._res.unshift(node.name);
	    }
    }
};

module.exports = TS;