//datatypes are converted
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// == and === work differently
// >= > < converts null to 0

console.log(undefined == 0); // false in all cases

console.log(NaN == NaN); //false
const hi = NaN;
console.log(hi); //NaN
