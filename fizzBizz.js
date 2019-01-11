
var fizzBizz = function() {
	var fbArray = [];

	for (var i=1; i<=100; i++) {
		if ((i%3 === 0) && (i%5 === 0)) {
			fbArray.push('fizzBizz');
		} else if (i%3 === 0) {
			fbArray.push('fizz');
		} else if (i%5 === 0) {
			fbArray.push('bizz');
		} else {
			fbArray.push(i);
		}
	}

	return fbArray.join(',');
}

console.log(fizzBizz());