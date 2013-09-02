describe('fn', function() {
	describe('isValue', function() {
		it('should be false for null and undefined');
	});

	describe('identity', function() {
		it('should return the first arg passed in');
	});

	describe('indexOf', function() {
		it('should return the index of an element in an array');
		it('should return the index of an element in an array-like object');
	});

	describe('keys', function() {
		it('should return all the keys in an object as an array');
	});

	describe('values', function() {
		it('should return all the values in an object as an array');
	});

	describe('isArray', function() {
		it('should return true for an array');
		it('should return false for an array-like object');
	});

	describe('each', function() {
		it('should cycle through all elements in an array');
		it('should cycle through all elements in an array-like object');
		it('should cycle through all elements in an object');
	});

	describe('extend', function() {
		it('should shallow copy key value pairs of all following arguments into the first one');
	});

	describe('map', function() {
		it('should apply a function onto every element of an array, and map the results');
		it('should apply a function onto every element of an array-like object, and map the results');
		it('should apply a function onto every key value pair of an object, and map the results');
	});

	describe('times', function() {
		it('should run the supplied function n times, and collect the results in an array');
	});

	describe('invoke', function() {
		it('should call the named function on every element of an array/array-like object/object');
	});

	describe('filter', function() {
		it('should call the function on every element of an array/array-like object/object, and map only the elements which returned truthy elements');
	});

	describe('find', function() {
		it('should return the first element in an A/ALO/O that returns a truthy value for the function passed');
	});

	describe('reduce', function() {
		it('should \'reduce\' the array into a single value');
	});

	describe('debounce', function(){
		it('should postpone its execution until after \'wait\' milliseconds have elapsed since the last time it was invoked');
	});

	describe('compose',  function(){
		it('should return the composition of a list of functions, where each function consumes the return value of the function that follows');
	});

});