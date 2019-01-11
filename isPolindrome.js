var myString = "toottoots";

console.log((function () {
	return myString === myString.split("").reverse().join("");
}) (myString));