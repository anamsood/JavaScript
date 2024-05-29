//Immediately invoked function expression (IIFE)

(function chai() {
	//named IIFE
	console.log("anam sood");
})();

//semicolon is important to write two IIFE

((name) => {
	console.log(`my name is ${name}`);
})("anam");

//it immediately invoke a function and also prevent global pollution
//like save variable name and makes code clean
