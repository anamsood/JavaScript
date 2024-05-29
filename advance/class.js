class Person {
	constructor(name, age, food) {
		this.name = name;
		this.age = age;
		this.food = food;
	}
	encryptPassword() {
		return `${this.food}abcdfd`;
	}
}

const anam = new Person("anam", 21, "bhelpuri");
const sukhman = new Person("sukhman", 26, "bhature");
console.log(sukhman);
console.log(sukhman.encryptPassword());

// behind the scenes
// constructor is a function of name Person
// new prototype function "encryptPassword" is created
