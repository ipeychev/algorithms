'use strict';

if (typeof Liferay == 'undefined') {
    var Liferay = {};
}

Liferay.DuplicateCharacters = function(config) {
};

Liferay.DuplicateCharacters.prototype = {
    constructor: Liferay.DuplicateCharacters,
    
    remove: function(content) {
        var character, htCharacters, result = [];

        htCharacters = Object.create ? Object.create(null) : {};

        for (var i = 0; i < content.length; i++) {
            character = content.charAt(i);
            
            if (!htCharacters[character]) {
                result.push(character);

                htCharacters[character] = true;
            }
        }

        return result.join('');
    }
};