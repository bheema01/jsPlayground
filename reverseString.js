var myString = 'Today is Friday';
var myStringArr = myString.split(' ');
var revStringArr = [];

for(var i=myStringArr.length; i>=0; i--) {
	revStringArr.push(myStringArr[i]);
}

console.log(revStringArr.join(' ').trim());