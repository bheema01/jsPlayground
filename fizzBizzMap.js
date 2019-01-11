var someArray = [];
for (var i=1; i<=100; i++) {
	someArray.push(i);
}

var fbArray = someArray.map(function (i) {
	if ((i%3 === 0) && (i%5 === 0))
		return 'fizzBizz';
	else if (i%3 === 0)
		return 'fizz';
	else if (i%5 === 0)
		return 'bizz';
	else
		return i;
});

console.log(fbArray.join(', '));