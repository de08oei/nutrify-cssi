var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const Recipe = new mongoose.Schema({
	Recipe_Name: String,
	Recipe_Allergens: Array,
	Recipe_Ingredients: Array,
	Recipe_Procedure: Array,
	Recipe_LowTime: Number,
	Recipe_HighTime: Number,
	Recipe_Cuisine: String
});

const User = new mongoose.Schema({
	Token: String,
	Fridge: Array,
	Liked_Recipes: Array
});

mongoose.model("Recipe", Recipe);
mongoose.model("User", User);


mongoose.connect("http://localhost:3000", function (err, res){
	if (err) {
		console.log("OOPS " + err);
	} else {
		console.log("Connected on 3000");
	}
});
