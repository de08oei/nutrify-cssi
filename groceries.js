// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    console.log("hi")
    div.style.display = "none";
    
  }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//DAIRY
var allDairy = [];
var dairyIndex = 0;

// Create a new list item when clicking on the "Add" button
function newDairyElement() {
  var li = document.createElement("li");
 
  var inputValue = document.getElementById("myDairyInput").value;
  var t = document.createTextNode(inputValue);
  li.setAttribute("id", dairyIndex);
  dairyIndex++;
   
  allDairy.push(inputValue.toUpperCase());
  console.log(allDairy);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myDairy").appendChild(li);
  }
  document.getElementById("myDairyInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);  

  //this is the function that makes the list item disappear after clicking x
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      //this.parent().remove();
      div.style.display = "none";
      var thisIndex = div.id;
      console.log("you deleted index " + thisIndex)
      for (var a = 0; a < allDairy.length; a++) {
        if (a == thisIndex) {
          if (allDairy.length == 1) {
            allDairy.splice(a, 1);
            document.getElementById(a).id = null;
          }
          else if (allDairy.length == 2 && a == 1) {
            allDairy.splice(a, 1);
            document.getElementById(a).id = null;
            console.log("ind 1")
          }
          else if (allDairy.length == 2 && a == 0) {
            allDairy.splice(a, 1);
            document.getElementById(a).id = null;
            document.getElementById(1).id = 0;
            
            console.log("ind 0")
          }
          else {
            allDairy.splice(a, 1);
            document.getElementById(a).id = null;
            
            var newIndexes = a;
            while (newIndexes != allDairy.length) {
              document.getElementById(newIndexes + 1).id = newIndexes;
              newIndexes = newIndexes + 1;
            }

          }
          
          dairyIndex = dairyIndex - 1;
          console.log(allDairy);
        }
      }
    }
  }
  
}

//CARBS

var allCarb = [];
var carbIndex = 0;

// Create a new list item when clicking on the "Add" button
function newCarbElement() {
  var carbId = carbIndex + 0.1
  var li = document.createElement("li");
  var inputValue = document.getElementById("myCarbInput").value;
  var t = document.createTextNode(inputValue);
  li.setAttribute("id", carbId);
  carbIndex++;
   
  allCarb.push(inputValue.toUpperCase());
  console.log(allCarb);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myCarb").appendChild(li);
  }
  document.getElementById("myCarbInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);  
  

  //this is the function that makes the list item disappear after clicking x
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      //this.parent().remove();
      div.style.display = "none";
      var thisIndex = div.id - 0.1;
      console.log("you deleted index " + thisIndex)
      for (var a = 0; a < allCarb.length; a++) {
        if (a == thisIndex) {
          if (allCarb.length == 1) {
            allCarb.splice(a, 1);
            document.getElementById(a + 0.1).id = null;
          }
          else if (allCarb.length == 2 && a == 1) {
            allCarb.splice(a, 1);
            document.getElementById(a + 0.1).id = null;
            console.log("ind 1")
          }
          else if (allCarb.length == 2 && a == 0) {
            allCarb.splice(a, 1);
            document.getElementById(a + 0.1).id = null;
            document.getElementById(1 + 0.1).id = 0.1;
            
            console.log("ind 0")
          }
          else {
            allCarb.splice(a, 1);
            document.getElementById(a + 0.1).id = null;
            
            var newIndexes = a;
            while (newIndexes != allCarb.length) {
              document.getElementById(newIndexes + 1 + 0.1).id = newIndexes + 0.1;
              newIndexes = newIndexes + 1;
            }

          }
          
          carbIndex = carbIndex - 1;
          console.log(allCarb);
        }
      }
    }
  }
  
}

//Proteins

var allProtein = [];
var proteinIndex = 0;

// Create a new list item when clicking on the "Add" button
function newProteinElement() {
  var proteinId = proteinIndex + 0.2
  var li = document.createElement("li");
  var inputValue = document.getElementById("myProteinInput").value;
  var t = document.createTextNode(inputValue);
  li.setAttribute("id", proteinId);
  proteinIndex++;
   
  allProtein.push(inputValue.toUpperCase());
  console.log(allProtein);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myProtein").appendChild(li);
  }
  document.getElementById("myProteinInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);  
  

  //this is the function that makes the list item disappear after clicking x
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      var thisIndex = div.id - 0.2;
      console.log("you deleted index " + thisIndex)
      for (var a = 0; a < allProtein.length; a++) {
        if (a == thisIndex) {
          if (allProtein.length == 1) {
            allProtein.splice(a, 1);
            document.getElementById(a + 0.2).id = null;
          }
          else if (allProtein.length == 2 && a == 1) {
            allProtein.splice(a, 1);
            document.getElementById(a + 0.2).id = null;
            console.log("ind 1")
          }
          else if (allProtein.length == 2 && a == 0) {
            allProtein.splice(a, 1);
            document.getElementById(a + 0.2).id = null;
            document.getElementById(1 + 0.2).id = 0.2;
            
            console.log("ind 0")
          }
          else {
            allProtein.splice(a, 1);
            document.getElementById(a + 0.2).id = null;
            
            var newIndexes = a;
            while (newIndexes != allProtein.length) {
              document.getElementById(newIndexes + 1 + 0.2).id = newIndexes + 0.2;
              newIndexes = newIndexes + 1;
            }

          }
          
          proteinIndex = proteinIndex - 1;
          console.log(allProtein);
        }
      }
    }
  }
  
}

//Vegetables

var allVegetables = [];
var vegetablesIndex = 0;

// Create a new list item when clicking on the "Add" button
function newVegetablesElement() {
  var vegetablesId = vegetablesIndex + 0.3
  var li = document.createElement("li");
  var inputValue = document.getElementById("myVegetablesInput").value;
  var t = document.createTextNode(inputValue);
  li.setAttribute("id", vegetablesId);
  vegetablesIndex++;
   
  allVegetables.push(inputValue.toUpperCase());
  console.log(allVegetables);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myVegetables").appendChild(li);
  }
  document.getElementById("myVegetablesInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);  
  

  //this is the function that makes the list item disappear after clicking x
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      var thisIndex = div.id - 0.3;
      console.log("you deleted index " + thisIndex)
      for (var a = 0; a < allVegetables.length; a++) {
        if (a == thisIndex) {
          if (allVegetables.length == 1) {
            allVegetables.splice(a, 1);
            document.getElementById(a + 0.3).id = null;
          }
          else if (allVegetables.length == 2 && a == 1) {
            allVegetables.splice(a, 1);
            document.getElementById(a + 0.3).id = null;
            console.log("ind 1")
          }
          else if (allVegetables.length == 2 && a == 0) {
            allVegetables.splice(a, 1);
            document.getElementById(a + 0.3).id = null;
            document.getElementById(1 + 0.3).id = 0.3;
            
            console.log("ind 0")
          }
          else {
            allVegetables.splice(a, 1);
            document.getElementById(a + 0.3).id = null;
            
            var newIndexes = a;
            while (newIndexes != allVegetables.length) {
              document.getElementById(newIndexes + 1 + 0.3).id = newIndexes + 0.3;
              newIndexes = newIndexes + 1;
            }

          }
          
          vegetablesIndex = vegetablesIndex - 1;
          console.log(allVegetables);
        }
      }
    }
  }
  
}

//Fruits

var allFruits = [];
var fruitsIndex = 0;

// Create a new list item when clicking on the "Add" button
function newFruitsElement() {
  var fruitsId = fruitsIndex + 0.4;
  var li = document.createElement("li");
  var inputValue = document.getElementById("myFruitsInput").value;
  var t = document.createTextNode(inputValue);
  li.setAttribute("id", fruitsId);
  console.log(fruitsId)
  fruitsIndex++;
   
  allFruits.push(inputValue.toUpperCase());
  console.log(allFruits);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myFruits").appendChild(li);
  }
  document.getElementById("myFruitsInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);  
  

  //this is the function that makes the list item disappear after clicking x
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      //this.parent().remove();
      div.style.display = "none";
      var thisIndex = div.id - 0.4;
      console.log("you deleted index " + thisIndex)
      for (var a = 0; a < allFruits.length; a++) {
        if (a == thisIndex) {
          if (allFruits.length == 1) {
            allFruits.splice(a, 1);
            document.getElementById(a + 0.4).id = null;
          }
          else if (allFruits.length == 2 && a == 1) {
            allFruits.splice(a, 1);
            document.getElementById(a + 0.4).id = null;
            console.log("ind 1")
          }
          else if (allFruits.length == 2 && a == 0) {
            allFruits.splice(a, 1);
            document.getElementById(a + 0.4).id = null;
            document.getElementById(1 + 0.4).id = 0.4;
            
            console.log("ind 0")
          }
          else {
            allFruits.splice(a, 1);
            document.getElementById(a + 0.4).id = null;
            
            var newIndexes = a;
            while (newIndexes != allFruits.length) {
              document.getElementById(newIndexes + 1 + 0.4).id = newIndexes + 0.4;
              newIndexes = newIndexes + 1;
            }

          }
          
          fruitsIndex = fruitsIndex - 1;
          console.log(allFruits);
        }
      }
    }
  }
  
}
