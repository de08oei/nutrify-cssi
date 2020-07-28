//skeleton of the following functions:
// var ingredient = [];
// var ingredientButton = document.getElementById("ingredientButtonId").addEventListener("click", addIngredient);

// function addIngredient() {
//   var addedIngredient = document.getElementById("ingredientAdd").value;
//   carbs.push(addedIngredient);
  
//   var ul = document.getElementById("ingredientId");
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(addedIngredient));
//   ul.appendChild(li);
// }


//dairy
var dairyProducts = [];
var dairyButton = document.getElementById("dairyButtonId").addEventListener("click", addDairyProduct);

function addDairyProduct() {
  console.log("HI")
  var addedDairy = document.getElementById("dairyAdd").value;
  dairyProducts.push(addedDairy);
  console.log(dairyProducts)
  
  //https://stackoverflow.com/questions/20673959/how-to-add-new-li-to-ul-onclick-with-javascript
  var ul = document.getElementById("dairy");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(addedDairy));
  ul.appendChild(li);
  
}

//carbs
var carbs = [];
var carbsButton = document.getElementById("carbButtonId").addEventListener("click", addCarbs);

function addCarbs() {
  console.log("carbs");
  var addedCarb = document.getElementById("carbAdd").value;
  carbs.push(addedCarb);
  console.log(carbs);
  
  var ul = document.getElementById("carbs");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(addedCarb));
  ul.appendChild(li);
}

//protein
var proteins = [];
var proteinButton = document.getElementById("proteinButtonId").addEventListener("click", addProtein);

function addProtein() {
  console.log("protein");
  var addedProtein = document.getElementById("proteinAdd").value;
  carbs.push(addedProtein);
  console.log(proteins);
  
  var ul = document.getElementById("protein");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(addedProtein));
  ul.appendChild(li);
}

//nuts
var nuts = [];
var nutsButton = document.getElementById("nutsButtonId").addEventListener("click", addNuts);

function addNuts() {
  console.log("nuts");
  var addedIngredient = document.getElementById("nutsAdd").value;
  carbs.push(addedIngredient);
  console.log(nuts);
  
  var ul = document.getElementById("nuts");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(addedIngredient));
  ul.appendChild(li);
}

//vegetables
var vegetables = [];
var vegetablesButton = document.getElementById("vegeButtonId").addEventListener("click", addVegetables);

function addVegetables() {
  console.log("veges");
  var addedIngredient = document.getElementById("vegetablesAdd").value;
  carbs.push(addedIngredient);
  console.log(vegetables);
  
  var ul = document.getElementById("vegetables");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(addedIngredient));
  ul.appendChild(li);
}

//fruits
var fruits = [];
var fruitsButton = document.getElementById("fruitButtonId").addEventListener("click", addFruits);

function addFruits() {
  console.log("fruits");
  var addedIngredient = document.getElementById("fruitAdd").value;
  carbs.push(addedIngredient);
  console.log(fruits);
  
  var ul = document.getElementById("fruits");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(addedIngredient));
  ul.appendChild(li);
}

//packaged foods

//spices and sauces

//beverages

//miscellaneous
