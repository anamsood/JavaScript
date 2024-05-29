const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
	// console.log(i);
}

const str = "hello world";
for (let st of str) {
	// console.log(st);
}

// map

const map = new Map();

map.set("in", "india");
map.set("af", "africa");
map.set("am", "america");
map.set("in", "india");
map.set("in", "indonesia");

console.log(map); //only unique values and keys

for (const key of map) {
	// console.log(key);
}

for (const [key, value] of map) {
	// console.log(key + " -: " + value);
}

//object
const obj = {
	js: "javascript",
	rb: "ruby",
	sw: "swift",
};

// for (const key of obj) {
// 	console.log(key);
// }
//error for objects

for (const key in obj) {
	// console.log(`${key} is shortcut for ${obj[key]}`);
}

const lang = ["java", "python", "javascript"];

for (const i in lang) {
	// console.log(i); // here is is index
}

//for-in does not work for map

lang.forEach((item) => {
	// console.log(item);
});

function printme(item) {
	// console.log(item);
}
lang.forEach(printme);

lang.forEach((item, index, arr) => {
	// console.log(item, index, arr);
});

const objArray = [
	{
		lang: "java",
		shortcut: "java",
	},
	{
		lang: "python",
		shortcut: "py",
	},
	{
		lang: "javascript",
		shortcut: "js",
	},
];

objArray.forEach((item) => {
	// console.log(item.lang);
});
//values cant be returned in for-each
