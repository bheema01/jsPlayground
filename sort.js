// Sort elements of an array
// Sort the numbers ascending

var someArray = [56, 89, 99, 120120, 1];

// console.log(someArray.sort());

var sorted = someArray.sort(function(a,b){return a-b});
console.log(sorted);

var reverseSorted = someArray.sort(function(a,b){return b-a});
console.log(reverseSorted);