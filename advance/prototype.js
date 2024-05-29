let herotype = {
	spiderman: "sling",
	thor: "hammer",
	getSpiderPower: function () {
		console.log(`power of hero is : ${this.spiderman}`);
	},
};

const myheros = ["thor", "spiderman"];

Object.prototype.anam = function () {
	console.log(`anam is present in all objects`);
};
//object prototype will be accessible to all datatypes but vice-versa not true

herotype.anam();
myheros.anam();
