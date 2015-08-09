var assert = require('chai').assert;
var path = require('path');
var CompressSimple = require(path.resolve(__dirname, '../../../src/strings/compress-simple/compress.js'));

describe('CompressSimple', function() {
    it('should compress a string', function() {
    	assert.sameMembers([
    		'i18n',
			'in17n',
			'int16n',
			'inte15n',
			'inter14n',
			'intern13n',
			'interna12n',
			'internat11n',
			'internati10n',
			'internatio9n',
			'internation8n',
			'internationa7n',
			'international6n',
			'internationali5n',
			'internationaliz4n',
			'internationaliza3n',
			'internationalizat2n',
			'internationalizati1n',
			'internationalization'
		], CompressSimple('internationalization'));

		assert.sameMembers([
			'c7p',
			'ca6p',
			'car5p',
			'care4p',
			'caree3p',
			'career2p',
			'careerc1p',
			'careercup'
			], CompressSimple('careercup'));
    });
});