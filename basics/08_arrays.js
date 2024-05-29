// array

const myarr = [1, 2, 3, 4];
const heroes = ["hi", "hello", "bye"];
const myarr2 = new Array(5, 6, 4, 3, "anam", "Sood");

// console.log(myarr2);

//methods
myarr.push(6);
myarr.push(7);
myarr.pop();
myarr.unshift(9); //add element at start
myarr.unshift(8);
myarr.shift(); //remove from front

// console.log(myarr);

// myarr.includes(9);
// myarr.indexOf(6);

const newarr = myarr.join(); //binds and converts array in string
// console.log(newarr);

//slice and splice

const ar = myarr.slice(1, 3); //3 is not included
console.log(ar);
console.log(myarr);

const ar2 = myarr.splice(1, 4); // 4 is included and it actually change the original array
console.log(myarr);
console.log(ar2);
