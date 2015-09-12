function flatten(a) {
	var flattened = [];
	a.forEach(function(item) {
		if (Array.isArray(item)) {
			flattened = flattened.concat(flatten(item));
		} else if(isNumeric(item)) {
			flattened.push(item);
		} else {
			throw new TypeError("Non-numeric, non-array type found in input.");
		}
	});
	return flattened;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = {
	flatten: flatten
}