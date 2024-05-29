// call is used to pass our current execution context to another function

function setUsername(username) {
	this.username = username;
}

function createUser(username, email, password) {
	// setUsername(username); // function jaise hi call stack se nikla uski values bhi nikal gyi
	setUsername.call(this, username); // now refrence and values of another function will be stored (in our this)even if the function is not in call stack
	this.email = email;
	this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "!231");
console.log(chai);
