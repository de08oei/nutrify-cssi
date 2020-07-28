var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const Coordinates = new mongoose.Schema({
	x: Number,
	y: Number
});

mongoose.model("Coordinates", Coordinates);


mongoose.connect("http://localhost:3000", function (err, res){
	if (err) {
		console.log("OOPS " + err);
	} else {
		console.log("Connected on 3000");
	}
});
