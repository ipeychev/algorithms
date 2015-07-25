function Anagram() {}

Anagram.prototype.isAnagram = function(source, dest) {
	if (source.length !== dest.length) {
		return false;
	}

	var ht = Object.create(null);
	var curChar, curCharValue;

	for (var i = 0; i < source.length; i++) {
		curChar = source.charAt(i).toLowerCase();
		curCharValue = ht[curChar] || 0;

		ht[curChar] = ++curCharValue;
	}

	for (i = 0; i < dest.length; i++) {
		curChar = dest.charAt(i).toLowerCase();
		curCharValue = ht[curChar];

		if (!curCharValue) {
			return false;
		}

		ht[curChar] = --curCharValue;
	}

	return true;
};

Anagram.prototype.findAnagrams = function(list) {
	var hashtable = Object.create(null);

	for (var i = 0; i < list.length; i++) {
		var word = list[i];

		var sortedWord = word.toLowerCase().split('').sort().join('');

		var value = hashtable[sortedWord];

		if (value) {
			value.push(word);
		}
		else {
			hashtable[sortedWord] = [word];
		}
	}

	var res = [];

	Object.keys(hashtable).forEach(function(key) {
		if (hashtable[key].length > 1) {
			res = res.concat(hashtable[key]);
		}
	});

	return res;
};

module.exports = Anagram;