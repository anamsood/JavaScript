class User {
	constructor(username) {
		this.username = username;
	}

	logMe() {
		console.log(`Username: ${this.username}`);
	}

	static createId() {
		//static does not allow object instantiated by this class to access this method
		return `123`;
	}
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId())

class Teacher extends User {
	constructor(username, email) {
		super(username);
		this.email = email;
	}
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());
