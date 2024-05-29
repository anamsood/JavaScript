const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.post("/tasks", (res, req) => {
	try {
		const user = {
			name: "anam",
			email: "anam@gamil.com",
			gender: "F",
		};
		const newuser = user;
		res.status(200).json(newuser);
	} catch (error) {
		console.log(error);
	}
});

app.listen(port, () => {
	console.log(`app is listening on port: ${port}`);
});
