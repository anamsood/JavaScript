//primitve

//Numbers
//Boolean
//String
//Null - standalone value
//Undefined
//Symbols - for unique values
//bigInt

const sym = Symbol(123);
console.log(sym);
const sym2 = Symbol(123);
console.log(sym2);

console.log(sym == sym2);
//reference or non-primitve
//object, arrays , functions

console.log(typeof null); //object
console.log(typeof undefined); //undefined
