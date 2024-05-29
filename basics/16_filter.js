// filter

const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newarr = myarr.filter((num) => num > 4);
// console.log(newarr);

const obj = [
	{
		book: "one",
		purchase: 2019,
		genre: "history",
	},
	{
		book: "two",
		purchase: 2000,
		genre: "horror",
	},
	{
		book: "three",
		purchase: 2021,
		genre: "science",
	},
	{
		book: "four",
		purchase: 2004,
		genre: "history",
	},
];

let newobj = obj.filter((bk) => bk.genre === "history");
newobj = obj.filter((bk) => {
	return bk.purchase >= 2005 && bk.genre === "history";
});
// console.log(newobj);

// map function

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = arr.map((num) => num + 10);

let newArr = arr
	.map((num) => num * 10)
	.map((num) => num + 1)
	.filter((num) => num > 40);
console.log(newArr);
