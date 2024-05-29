const num = 123;
const newNum = new Number(123); // we get extra methods tu use

// console.log(num);
// console.log(newNum);

// console.log(newNum.toString().length);
// console.log(newNum.toFixed(2)); // will return only two digits after decimal

const other = 1126.695;
// console.log(other.toPrecision(5));
// console.log(other.toPrecision(4));
// console.log(other.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN")); // to get in international system use .toLocaleString();
// console.log(Number.MAX_VALUE);

// +++++++++++++++++++++++++MATHS +++++++++++++++++++++++++

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); //outputs the upper value like 5 here
// console.log(Math.floor(4.9)); //outputs the lower value like 4 here
// console.log(Math.min(3, 4, 5, 6, 7));

console.log(Math.random()); //generate any random value between 0-1
console.log(Math.random() * 10 + 1); //ensures min value is always 1
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
