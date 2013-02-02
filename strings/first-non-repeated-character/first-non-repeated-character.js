'use strict';

if (typeof Liferay == 'undefined') {
    var Liferay = {};
}

Liferay.FirstNonRepeatedCharacter = function(config) {
};

Liferay.FirstNonRepeatedCharacter.prototype = {
    constructor: Liferay.FirstNonRepeatedCharacter,
    
    find: function(content) {
        return this._find(content);
    },

    _find: function(content) {
        var character, currentValue, htCharacters = Object.create ? Object.create(null) : {};

        for (var i = 0; i < content.length; i++) {
            character = content.charAt(i);

            currentValue = htCharacters[character] || 0;

            htCharacters[character] = ++currentValue;
        }

        for (i = 0; i < content.length; i++) {
            character = content.charAt(i);

            if (htCharacters[character] == 1) {
                return character;
            }
        }

        return null;
    }
};