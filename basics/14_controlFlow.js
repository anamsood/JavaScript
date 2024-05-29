//if-else , switch

const a = 3;
switch (a) {
	case 1:
		console.log("jan");
		break;
	case "feb":
		console.log("feb");
		break;
	case 3:
		console.log("march");
	// break;  // all cases below it will output (including default)
	case 4:
		console.log("april");
	// break;
	default:
		console.log("default");
}

// === striclt equal , check datatype and value
// console.log(3 === 3);
let b = new Number(10);
let c = new Number(10);
// console.log(b == c);
// console.log(b === c);

const str1 = {};
const str2 = str1;
// console.log(str1 == str2);
// console.log(str1 === str2);

// +++++++++++++++++++++++++++++++++ Truthy +++++++++++++++++++++++++++++++++++++++++

let email = "";
// let email = "anm"
if (email) {
	// console.log("tes");
} else {
	// console.log("no");
}

//by default empty string is falsy , and not empty is truthy

// falsy values - false , 0 , -0 , "" , null , undefined , NaN , BigInt = 0n

//truthy values - true , {} , [] ,function(){} , 'false' , '0' , " "

let arr = [];
if (arr.length === 0) {
	console.log("empty arr");
}

let obj = {};
if (Object.keys(obj).length === 0) {
	console.log("empty obj");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nullish Coalescing Operator ( ?? ) - null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

// console.log(val1);

// Ternary Operator

let price = 100;
price > 80 ? console.log("true") : console.log("false");
