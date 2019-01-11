
var fibonacci = function(max) {
	var fib = [0, 1];

	for (var i=2; i<max; i++) {
		fib[i] = fib[i-2] + fib[i-1];

		if (fib[i] > max) {
			fib.pop();
			return fib;
		}
	}
}
	

console.log(fibonacci(1000));