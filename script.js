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
var dairyButtonDel = document.getElementById("dairyButtonIdDel").addEventListener("click", delDairyProduct);

function addDairyProduct() {
  console.log("HI")
  var addedDairy = document.getElementById("dairyAdd").value;
  dairyProducts.push(addedDairy.toUpperCase());
  console.log(dairyProducts)
  
  //https://stackoverflow.com/questions/20673959/how-to-add-new-li-to-ul-onclick-with-javascript
  var ul = document.getElementById("dairy");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(addedDairy));
  ul.appendChild(li);
}

function delDairyProduct() {
  console.log("Del dairy");
  let index;
  var delIngredient = document.getElementById("dairyAdd").value;
  for (var i = 0; i < dairyProducts.length; i++) {
    if (dairyProducts[i] == delIngredient.toUpperCase()) {
      index = i;
      dairyProducts.splice(i, 1);
      break;
    }
  }
  var list = document.getElementById("dairy")
  console.log(list)
  console.log(list[0])
  list.removeChild(list[index]);
}

//carbs
var carbs = [];
var carbsButton = document.getElementById("carbButtonId").addEventListener("click", addCarbs);

function addCarbs() {
  console.log("carbs");
  var addedCarb = document.getElementById("carbAdd").value;
  carbs.push(addedCarb.toUpperCase());
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
  proteins.push(addedProtein.toUpperCase());
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
  nuts.push(addedIngredient.toUpperCase());
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
  vegetables.push(addedIngredient.toUpperCase());
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
  fruits.push(addedIngredient.toUpperCase());
  console.log(fruits);
  
  var ul = document.getElementById("fruits");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(addedIngredient));
  ul.appendChild(li);
}

//packaged foods
var packaged = [];
var packagedButton = document.getElementById("packageButtonId").addEventListener("click", addPackage);

function addPackage() {
  console.log("package");
  var addedIngredient = document.getElementById("packageAdd").value;
  packaged.push(addedIngredient.toUpperCase());
  console.log(packaged);
  
  var ul = document.getElementById("packaged");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(addedIngredient));
  ul.appendChild(li);
}

//spices and sauces
var sAndS = [];
var SSButton = document.getElementById("ssButtonId").addEventListener("click", addSS);

function addSS() {
  console.log("ss");
  var addedIngredient = document.getElementById("ssAdd").value;
  sAndS.push(addedIngredient.toUpperCase());
  console.log(sAndS);
  
  var ul = document.getElementById("ss");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(addedIngredient));
  ul.appendChild(li);
}

//beverages
var beverages = [];
var beveragesButton = document.getElementById("beveragesButtonId").addEventListener("click", addBeverage);

function addBeverage() {
  console.log("beverage");
  var addedIngredient = document.getElementById("beveragesAdd").value;
  beverages.push(addedIngredient.toUpperCase());
  console.log(beverages);
  
  var ul = document.getElementById("beverages");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(addedIngredient));
  ul.appendChild(li);
}

//miscellaneous
var misc = [];
var miscButton = document.getElementById("miscButtonId").addEventListener("click", addMisc);

function addMisc() {
  console.log("package");
  var addedIngredient = document.getElementById("miscAdd").value;
  misc.push(addedIngredient.toUpperCase());
  console.log(misc);
  
  var ul = document.getElementById("misc");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(addedIngredient));
  ul.appendChild(li);
}

/* navbar */ 
function openNav() {
  document.getElementById("navBar").style.width = "100%";
}

function closeNav() {
  document.getElementById("navBar").style.width = "0";
}
