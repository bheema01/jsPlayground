var animals = [
	{name: 'Pepper', species: 'cat'},
	{name: 'Pablo', species: 'dog'},
	{name: 'Kathy', species: 'bird'},
	{name: 'Snoopy', species: 'dog'}
];

// var isDog = function(animal){
// 	return (animal.species === 'dog');
// }

var dogs = animals.filter(animal => {
	return (animal.species === 'dog');
});

console.log(dogs);
