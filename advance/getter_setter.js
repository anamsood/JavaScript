class User {
	constructor(email, password) {
		this.email = email;
		this.password = password;
	}
	//getter setter will override values stored by constructor
	get email() {
		return this._email.toUpperCase();
	}
	set email(value) {
		this._email = value;
		// using '_email' because getter-setter and constructor dono hi same property ko store krre h so loop nd stack overflow
	}

	get password() {
		return `${this._password}hitesh`; //return alag value krre to user
	}

	set password(value) {
		this._password = value; // and store in db original value
	}
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);
