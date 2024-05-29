function outer() {
	let username = "hitesh";

	function inner() {
		let secret = "my123";
		console.log("inner", username);
	}
	function innerTwo() {
		console.log("innerTwo", username);
		console.log(secret);
	}
	inner();
	innerTwo();
}
outer();
console.log("TOO OUTER", username);

//lexical scope means when inner functions have access to variables defined in outer functions
//it means inner func share same memory space as outer
//in execution context , memory execution of inner func mein outer ke variables bhi define hote h
