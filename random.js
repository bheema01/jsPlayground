// console.log(Math.random() * 10000000000);

// console.log(Math.random().toString().slice(2,11));

// console.log(parseInt(Math.random()*1000000000, 10));

/*
Steps:
We generate a random number that fulfill 1 ≤ x < 10.
Then, we multiply by Math.pow(10,length-1) (number with a length len).
Finally, parseInt() to remove decimals.
 */

let getRandom = (length) => {
    let randomNumber = parseInt((Math.random() * 9 + 1) * Math.pow(10,length-1), 10);
    return randomNumber;
}

console.log(getRandom(10));