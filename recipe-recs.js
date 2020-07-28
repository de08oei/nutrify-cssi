class Recipe {
  constructor(name, cuisine, timeLow, timeHigh, ingredients = [], matchPercent, dietRestrict) {
    this.name = name;
    this.cuisine = cuisine;
    this.timeLow = timeLow;
    this.timeHigh = timeHigh;
    this.ingredients = ingredients; //done
    this.matchPercent = matchPercent; //done
    this.dietRestrict = dietRestrict; //done
  }
}

recipes = [];
let restrictions = [];
let matchRequirement = 50;

let tomatoSoup = new Recipe("Tomato Soup", "American", 15, 120, ["Water", "Tomatoes", "Basil"], 70, ["Dairy-Free", "Gluton-Free", "Vegan"]);



//end testing sample recipe

//goes through all the preference checks
//eliminates bad recipe matches then sorts good matches
//in order that they match preferences
function finalRecommendations() {
  dietCheck();
  matchCheck();
  return recipes;
}

//checks to see if each recipe recommended avoids diet restrictions
function dietCheck() {
  for (var i = 0; i < recipes.length(); i++) {
    var dietMatchCheck = ingredientsCompare(recipes[i].ingredients.toUpperCase(), restrictions[].toUpperCase());
    if (dietMatchCheck == false) {
      recipes.push[recipes[i]];
    }
  }
}

//helper method to dietCheck()
//compares ingredients with restrictions to ensure nothing prohibitive
//is included in recipe recommendations
function ingredientsCompare(ingredients[], dietRestrictions[]) {
  for (var i = 0; i < ingredients.length(); i++) {
    for (var j = 0; j < ingredients.length(); j++) {
      if (ingredients[i] == dietRestrictions[j]) {
        return false;
      }
    }
  }
  return true;
}

//checks to see if each recipe has at least the min % of ingredients match
function matchCheck() {
  for (var i = 0; i < recipes.length(); i++) {
    var matchCheck = matchCompare(matchRequirement, recipes[i].ingredients.toUpperCase(), availableIngredients[].toUpperCase());
    if (matchCheck == false) {
      recipes.push[recipes[i]];
    }
  }
}

//helper method to matchCheck()
//compares ingredients of recipe and ingredients available to ensure
//a satisfactory amount is already in stock
function matchCompare(matchRequirement, ingredients[], availableIngredients[]) {
  var matches;
  var matchPercent = 100 * (matches / ingredients.length());
  
  for (var i = 0; i < ingredients.length(); i++) {
    for (var j = 0; j < availableIngredients.length(); j++) {
      if (ingredients[i] == dietRestrictions[j]) {
        matches++;
      }
    }
  }
  
  if (matchPercent < matchRequirement) {
    return false;
  }
  
  return true;
}

//compares cuisine of recipe and cuisine preferred
function cuisineCheck() {
  
}

//helper method to cuisineCheck()
//compares cuisines to evaluate priority showing
function cuisineCompare() {
  
}


//compares desired time to complete and actual time
//recipes with prep time exceeding user range are eliminated
function timeCheck() {
  
}

//helper method to timeCheck()
function timeCompare() {
  
}
