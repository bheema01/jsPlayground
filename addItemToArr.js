// You should be able to add an item anywhere in an array

var fn = function (arr, itemToAdd, pos) {
  arr.splice(pos, 0, itemToAdd);
  return arr;
};

var array = [1, 2, 3, 4, 5];

console.log(fn(array, 'dog', 2));