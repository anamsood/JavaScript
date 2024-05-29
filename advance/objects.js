// everything => object => null

function multiplyBy5(num) {
	return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power); // function is also an object
console.log(multiplyBy5.prototype);

function create(username, price) {
	(this.username = username), (this.price = price);
}

create.prototype.increment = function () {
	// prototype contains properties that can be performed
	this.price++;
};
create.prototype.printme = function () {
	// we are creating a new constructor prototype (default properties dont need 'prototype' keyword)
	console.log("price is ", this.price);
};

const chai = new create("chai", 25);
const coffee = new create("coffee", 250); // new keyword not only creates new object but also links all the proptypes(including created by user)
chai.printme();
