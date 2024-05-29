//object literals - not singleton(many instances can be made of it)

const mysym = Symbol("mykey");
const myobj = {
	name: "anam",
	age: 21,
	"location in": "rajpura",
	[mysym]: "mykey2", // mysym:"hbh"  //here mysym is string type
	isLoggedIn: false,
	lastLogin: ["monday", "tuesday"],
};
//by default lef side(key) is considered as string
// console.log(myobj.name);
// console.log(myobj["location in"]);
// console.log(myobj["isLoggedIn"]);
// console.log(typeof myobj[mysym]);

myobj.age = 22;
// console.log(myobj.age);
// Object.freeze(myobj); //no values can be changed now
// myobj.age = 23;
// console.log(myobj.age);

// console.log(myobj); // see and check how symbol appears

myobj.geeting = function () {
	console.log(`hello user,${myobj.name}`);
};

// console.log(myobj.geeting); // logs the refrence to function
// console.log(myobj.geeting());

//

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//sigleton - when object is made through constructor (it is unique)

const tinder = new Object(); //declaring a singleton

tinder.id = 123;
tinder.name = "anam";
// console.log(tinder);

const regularUser = {
	age: 21,
	gender: "female",
	fullname: {
		userfullname: {
			firstname: "anam",
			lastname: "sood",
		},
	},
};

// console.log(regularUser.fullname.userfullname?.firstname); //use question mark in nested(it means if (username) then)

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = Object.assign(obj1, obj2); //it returns an object and concatinate obj2 in obj1
const obj4 = Object.assign({}, obj1, obj2, obj3); // it concatinates all in an empty object
console.log(obj3 == obj1);
//or
const obj5 = { ...obj1, ...obj2, ...obj4 };

const objarray = [
	{
		id: 1,
		email: "anam@hbshdb.com",
	},
	{
		id: 2,
		email: "sanya@hbshdb.com",
	},
];

// console.log(objarray[1].id);

// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty("id"));

//++++++++++++++++++++++ de-stucturing ++++++++++++++++++++++++++++++++++++

const course = {
	courseInstructor: "yakshi",
	price: "999",
	coursename: "js in hindi",
};
// course.courseInstructor;

const { courseInstructor: instructor } = course;
console.log(instructor);
