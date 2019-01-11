String.prototype.repeatify = String.prototype.repeatify || function(number) {
	var stringToRepeat = '';
	for(var i=0; i<number; i++) {
		stringToRepeat += this;
	}

	return stringToRepeat;
}

console.log('Hello'.repeatify(3));