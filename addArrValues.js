// You should be able to add the values of an array

// var numArray = [1,2,3,4,5,6,7];

// var sumOfArray = function(arr) {
// 	var arrSum = 0;
// 	for (var i=0; i<arr.length; i++) {
// 		arrSum += arr[i];
// 	}
// 	return arrSum;
// }

// console.log('Values of array numArray[]: ' + sumOfArray(numArray));


var numbers = [1,2,3,4,5,6,7];
var  sum = 0;

numbers.forEach(function(number) {
  sum += number;
});

console.log(sum);