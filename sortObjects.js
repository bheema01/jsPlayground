// sort array of objects by a specific property

var obj =[
			{name: "Something", age: 12},
			{name: "User", age: 120},
			{name: "Joe", age:99}
	];

console.log(obj.sort(function(a,b){
	return(b.age - a.age);
}));
