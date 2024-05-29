//Date

// const date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.getDate());
// console.log(date.toTimeString());
// console.log(typeof date);

//to create specific date
//let mydate = new Date(2023, 0, 23); // 0 -> jan
// let mydate = new Date(2023, 0, 23, 5, 3);
// let mydate = new Date("2023-01-14"); // yy-dd-mm
let mydate = new Date("01-23-2023"); //mm-dd-yy

// console.log(mydate.toLocaleString());

//timestamp - application -used to compare who placed order first
let timestamp = Date.now();
console.log(timestamp); //time sice refernce date and now in milisecond

console.log(mydate.getTime());
