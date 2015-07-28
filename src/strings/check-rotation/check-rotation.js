// waterbottle
// erbottlewat

// IsSubstring must be invoked only once

function CheckRotation(source, dest, rotationIndex) {
	var partBefore = dest.substring(0, rotationIndex); // wat
	var partAfter = dest.substring(rotationIndex);     // erbottle

	var concatenatedString = source + source; // waterbottlewaterbottle

	return IsSubstring(concatenatedString, partAfter + partBefore);
}

function IsSubstring(source, dest) {
	return source.indexOf(dest) >= 0;
}

module.exports = CheckRotation;
