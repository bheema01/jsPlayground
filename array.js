const a1 = ['apple', 'orange', 'banana'];

// New array using spread operator
const a2 = [...a1];

console.log('--- Origianl array ---');
console.log(a1);
a1.splice(1,1);
console.log('--- Spliced array ---');
console.log(a1);

console.log(a2);
