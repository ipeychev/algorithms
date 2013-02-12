'use strict';

if (typeof Liferay == 'undefined') {
    var Liferay = {};
}

Liferay.CountIndenticalCharacters = function(config) {
};

Liferay.CountIndenticalCharacters.prototype = {
    constructor: Liferay.CountIndenticalCharacters,
    
    count: function(content) {
        var hashtable = Object.create ? Object.create(null) : {};

        var maxValue = 0;

        for (var i = 0; i < content.length; ++i) {
            var character = content.charAt(i);

            var curValue = hashtable[character] || 0;

            hashtable[character] = ++curValue;

            if (maxValue < curValue) {
                maxValue = curValue;
            }
        }

        return maxValue;
    }
};