const myNums = [1, 2, 3, 4, 5];

// const total = myNums.reduce(function (accumulator, currentVal) {
// 	console.log(`acc: ${accumulator} and curr: ${currentVal}`);
// 	return accumulator + currentVal;
// }, 0);

const total = myNums.reduce((acc, currval) => acc + currval, 0);
// console.log(total);

const shoppingCart = [
	{
		item: "laptop",
		price: 20000,
	},
	{
		item: "table",
		price: 1000,
	},
];
const totalPrice = shoppingCart.reduce((acc, currval) => acc + currval.price, 0);
console.log(totalPrice);
