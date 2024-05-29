const user = {
	username: "anam",
	loginCount: 2,
	isLoggedIn: true,

	getDetails: function () {
		return this.username;
	},
};

// console.log(user.getDetails());

//this = current context

//constructor
function User(username, loginCount, isLoggedIn) {
	(this.username = username),
		(this.loginCount = loginCount),
		(this.isLoggedIn = isLoggedIn),
		(this.getDetails = function () {
			console.log(this.username);
		});
	// return this; // not necessary
}

// const userone = User("sanya", 3, false);
// const usertwo = User("coco", 5, true); // it will override the values of userone

const userone = new User("sanya", 3, false);
const usertwo = new User("coco", 5, true); // it will create a new instance of obj

console.log(userone.constructor);
// console.log(usertwo);

console.log(userone instanceof User);
