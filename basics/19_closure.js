function makeFunc() {
	const name = "Mozilla";
	function displayName() {
		console.log(name);
	}
	return displayName;
}

const myFunc = makeFunc();
myFunc();

//closure means when we return a whole function and uss function ka lexical scope bhi sath return hota h
//real world - in onclick function we write function ke andr function taki without click execute na ho
