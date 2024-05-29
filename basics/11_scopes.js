// {} = scope
//it is called block scope and used with functions,if-else,loop (with object they are just used to define it)

a = 300;

if (true) {
	var a = 30; // or a = 30;
	let b = 10;
	const c = 20;
}

//console.log(a); //var is a global scope variable and can be accessed anywhere
// console.log(b); // let is defined in block scope so not accessible
// console.log(c); // so is const

// var is not used because it is global scope variable and useful

let d = 100;
if (true) {
	// let d = 20;
	d = d + 30;
	console.log(`inner : ${d}`);
}
d = d + 30;
console.log(d);

//global scope can be accessed in block but vice-versa not true

function one() {
	const name = "anam";

	function two() {
		console.log(name);
		const webiste = "yotutube";
	}

	// console.log(webiste); // not accessible here

	two();
}
one();
