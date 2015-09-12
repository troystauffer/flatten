describe('Flatten Library', function() {
	var f = require('../lib/flatten');
	it('should error when passed invalid data', function() {
		expect(function() {f.flatten([{key:'value'}])}).toThrowError(TypeError);
	});

	it('should flatten an array of numbers', function() {
		var input = [[1,2,[3]],4];
		var result = [1,2,3,4];
		var actual = f.flatten(input);
		expect(actual).toEqual(result);
	});

	it('should flatten a deeply nested array of numbers', function() {
		var deeplynestedinput = [1,[[2,[[3,4],5],6,[[7],8],9],10]];
		var dnresult = [1,2,3,4,5,6,7,8,9,10];
		var dnactual = f.flatten(deeplynestedinput);
		expect(dnactual).toEqual(dnresult);
	});
});