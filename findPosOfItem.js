// You should be able to determine the location of an item in an array

var arr = ['cat', 'dog', 'tiger'];

var targetPostion = function(arr, targetItem) {
	for (var i=0; i < arr.length; i++) {
		if (arr[i] === targetItem)
			return i;
	}
}

console.log('Position of dog in arr[]: ' + targetPostion(arr, 'dog'));