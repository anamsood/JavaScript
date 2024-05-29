function userlogin(username) {
	if (username === undefined) {
		// (!username)
		return "enter a valid name";
	}

	return `${username} just logged in`;
}

// console.log(userlogin());

function demo(name = "anam") {
	return name;
}
// console.log(demo);
// console.log(demo());
// console.log(demo("sanya"));

function costPrice(val1, val2, ...sum) {
	return sum;
}
// function costPrice(...sum) {
// 	return sum;
// }
console.log(costPrice(100, 200, 300, 500));

const myobj = {
	username: "asnam",
	price: 210,
};

function objecthandler(obj1) {
	console.log(`name is :${obj1.username} nd price is :${obj1.prices}`);
}
objecthandler(myobj);
objecthandler({
	username: "nhft",
	prices: 766,
});

//+++++++++++++++++++++++++ Important ++++++++++++++++++++++++++++++++

//two ways to declare

console.log(secondway(4)); // as secondway is a constant that holds a function , it cannot be accessed before initialisation

const secondway = function (num) {
	return num;
};

console.log(firstway(3)); //functions can be

function firstway(num) {
	return num;
}

//it is also called hoisting
