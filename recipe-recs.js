// constructor(name, surname, number, grades = []) {
//     this.name = name;
//     this.surname = surname;
//     this.number = number;
//     this.grades = grades;
// }  



class Recipe {
  constructor(name, cuisine, timeLow, timeHigh, ingredients = [], matchPercent, dietRestrict) {
    this.name = name;
    this.cuisine = cuisine;
    this.timeLow = timeLow;
    this.timeHigh = timeHigh;
    this.ingredients = ingredients;
    this.matchPercent = matchPercent;
    this.dietRestrict = dietRestrict;
  }
}

recipe = [];
let restrictions = [];

//goes through all the preference checks
//eliminates bad recipe matches then sorts good matches
//in order that they match preferences
function finalRecommendations() {
  dietCheck();
  return recipe;
}

//checks to see if each recipe recommended avoids diet restrictions
function dietCheck() {
  for (var i = 0; i < recipe.length(); i++) {
    var matchCheck = ingredientCompare(recipe[i].ingredients, restrictions[]);
    if (matchCheck == false) {
      recipe.push[recipe[i]];
    }
  }
}

//helper method to dietCheck()
//compares ingredients with restrictions to ensure nothing prohibitive
//is included in recipe recommendations
function ingredientsCompare(ingredients[], dietRestrictions[]) {
  for (var i = 0; i < ingredients.length(); i++) {
    for (var i = 0; i < ingredients.length(); i++) {
      if (ingredients[i] == dietRestrictions[j]) {
        return false;
      }
    }
  }
  return true;
}
