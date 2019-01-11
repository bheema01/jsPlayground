// Example for call, apply using a function by name scope

function scope() {
	console.log(this, arguments.length);
}

// scope();
scope.call("foo");

scope.call("foo", [1,2]);

scope.apply("foo", [1,2]);