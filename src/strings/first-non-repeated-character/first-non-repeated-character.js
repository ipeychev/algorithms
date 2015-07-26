

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
        var character, curValue, hop, i, htCharacters = Object.create ? Object.create(null) : {}, key;

        for (i = 0; i < content.length; ++i) {
            character = content.charAt(i);

            curValue = htCharacters[character] || 0;

            htCharacters[character] = ++curValue;
        }

        hop = Object.prototype.hasOwnProperty;

        for (key in htCharacters) {
            if (hop.call(htCharacters, key)) {
                if (htCharacters[key] === 1) {
                    return key;
                }
            }
        }

        return null;
    }
};