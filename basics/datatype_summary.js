//Primitive datatype

// 7 types - String,Number,Boolean,Null,Undefined,Symbol,BigInt

let anam; //undefined
let prashar = null; //type - object

const id = Symbol("123");
const cid = Symbol("123"); //always return a unique value

// const bigNumber = 6363678189083978n;

// console.log(cid === id);
// console.log(typeof bigNumber);
// console.log(typeof prashar);

//Reference or Non-primitve

//object,array,functions

let obj = {
	name: "anam",
	age: "20",
};

let arr = ["anam", "yuvraj"];

let func = function () {
	console.log("hello");
};

// console.log(typeof func);
// console.log(typeof obj);
// console.log(typeof arr);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//memory
//stack(primitve) || heap(non-primitve)

let string1 = "anamsood";
let string2 = string1; //we are sending only a copy of string1
string2 = "yuvraj"; //original value does not change

console.log(string1);
console.log(string2);

let obj1 = {
	name: "anam",
	age: 20,
};

let obj2 = obj1; //reference is passed

obj2.name = "sood"; //original value will also change

console.log(obj1);
console.log(obj2);
