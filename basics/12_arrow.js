const object = {
	user: "anam",
	price: 23,
	message: function () {
		console.log(`${this.user} , welcome to website`);
		console.log(this); // current object
	},
};
// object.message();
// object.user = "sam";
// object.message();

//console.log(this); // in browser , it will loh Window as window is the global object there
//but in node environment , empty object is this

function one() {
	let username = "anam";
	console.log(this);
	console.log(this.username); //only works for object
}

const two = function () {
	console.log(this);
};
//arrow function
const three = () => {
	console.log(this);
};
// one();
// two();
// three();

//ways to write arrow function

const add = (num1, num2) => {
	return num1 + num2;
};

const add1 = (num1, num2) => num1 + num2;

const add2 = (num1, num2) => num1 + num2;

//with parenthesis no need to write return , only with curly braces

const add3 = () => ({ username: "anam" });

console.log(add(2, 3));
console.log(add2(3, 4));
console.log(add3());
