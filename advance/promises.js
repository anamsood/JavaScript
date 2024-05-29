const promise1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log("task1 completed");
		resolve();
	}, 1000);
});

promise1
	.then(() => {
		console.log("promise1 completed");
	})
	.catch((error) => {
		console.log(error);
	});

new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log("Async task 2");
		resolve({ user: "anam", gender: "F" });
	}, 1000);
}).then(function (user) {
	console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let error = true;
		if (!error) {
			resolve({ username: "hitesh", password: "123" });
		} else {
			reject("ERROR: Something went wrong");
		}
	}, 1000);
});

promiseFour
	.then((user) => {
		console.log(user);
		return user.username; // it will be returned to next 'then' function
	})
	.then((username) => {
		console.log(username); //chaining
	})
	.catch(function (error) {
		console.log(error);
	})
	.finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let error = true;
		if (!error) {
			resolve({ username: "javascript", password: "123" });
		} else {
			reject("ERROR: JS went wrong");
		}
	}, 1000);
});

async function consumePromiseFive() {
	try {
		const response = await promiseFive; //async wait alone cannot handle error so try-catch use
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}

consumePromiseFive();

async function getallUsers() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await response.data.json();
		console.log(data);
	} catch (error) {
		console.log("E : ", error);
	}
}

getallUsers();

fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
