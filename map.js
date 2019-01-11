var animals = [
	{name: 'Pepper', species: 'cat'},
	{name: 'Pablo', species: 'dog'},
	{name: 'Kathy', species: 'bird'},
	{name: 'Snoopy', species: 'dog'}
];

var names = animals.map(function(animal) {
	return animal.name;
})

console.log(names)