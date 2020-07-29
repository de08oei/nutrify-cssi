//DAIRY
var allDairy = [];
var dairyIndex = 0;
  
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



// addedDairy.setAttribute("id", dairyIndex);
//   dairyIndex = dairyIndex + 1;

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
            var lastIndex = allDairy.length - 1
            var lastElement = allDairy[lastIndex]
            allDairy.splice(a, 1, lastElement);
            allDairy.splice(lastIndex, 1);
            document.getElementById(a).id = null;
            document.getElementById(lastIndex).id = a;

          }
          
          dairyIndex = dairyIndex - 1;
          console.log(allDairy);
        }
      }
    }
  }
  
}

//CARBS

// Create a "close" button and append it to each list item
var myNodelistCarb = document.getElementsByTagName("LI");
var i;
for (var i = 0; i < myNodelistCarb.length; i++) {
  var spanCarbs = document.createElement("SPAN");
  var txtCarbs = document.createTextNode("\u00D7");
  spanCarbs.className = "close";
  spanCarbs.appendChild(txtCarbs);
  myNodelistCarb[i].appendChild(spanCarbs);
}

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// Add a "checked" symbol when clicking on a list item
var listCarbs = document.querySelector('ul');
listCarbs.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newCarbElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myCarbInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myCarb").appendChild(li);
  }
  document.getElementById("myCarbInput").value = "";

  var spanCarbs = document.createElement("SPAN");
  var txtCarbs = document.createTextNode("\u00D7");
  spanCarbs.className = "close";
  spanCarbs.appendChild(txtCarbs);
  li.appendChild(spanCarbs);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//Proteins

// Create a "close" button and append it to each list item
var myNodelistProtein = document.getElementsByTagName("LI");
var i;
for (var i = 0; i < myNodelistProtein.length; i++) {
  var spanProtein = document.createElement("SPAN");
  var txtProtein = document.createTextNode("\u00D7");
  spanProtein.className = "close";
  spanProtein.appendChild(txtProtein);
  myNodelistProtein[i].appendChild(spanProtein);
}

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// Add a "checked" symbol when clicking on a list item
var listProtein = document.querySelector('ul');
listProtein.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newProteinElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myProteinInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myProtein").appendChild(li);
  }
  document.getElementById("myProteinInput").value = "";

  var spanProtein = document.createElement("SPAN");
  var txtProtein = document.createTextNode("\u00D7");
  spanProtein.className = "close";
  spanProtein.appendChild(txtProtein);
  li.appendChild(spanProtein);

  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }
}

//Nuts

// Create a "close" button and append it to each list item
var myNodelistNuts = document.getElementsByTagName("LI");
var i;
for (var i = 0; i < myNodelistNuts.length; i++) {
  var spanNuts = document.createElement("SPAN");
  var txtNuts = document.createTextNode("\u00D7");
  spanNuts.className = "close";
  spanNuts.appendChild(txtNuts);
  myNodelistNuts[i].appendChild(spanNuts);
}

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// Add a "checked" symbol when clicking on a list item
var listNuts = document.querySelector('ul');
listNuts.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newNutsElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myNutsInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myNuts").appendChild(li);
  }
  document.getElementById("myNutsInput").value = "";

  var spanNuts = document.createElement("SPAN");
  var txtNuts = document.createTextNode("\u00D7");
  spanNuts.className = "close";
  spanNuts.appendChild(txtNuts);
  li.appendChild(spanNuts);

  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }
}

//Vegetables

// Create a "close" button and append it to each list item
var myNodelistVegetables = document.getElementsByTagName("LI");
var i;
for (var i = 0; i < myNodelistVegetables.length; i++) {
  var spanVegetables = document.createElement("SPAN");
  var txtVegetables = document.createTextNode("\u00D7");
  spanVegetables.className = "close";
  spanVegetables.appendChild(txtVegetables);
  myNodelistVegetables[i].appendChild(spanVegetables);
}

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// Add a "checked" symbol when clicking on a list item
var listVegetables = document.querySelector('ul');
listVegetables.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newVegetablesElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myVegetablesInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myVegetables").appendChild(li);
  }
  document.getElementById("myVegetablesInput").value = "";

  var spanVegetables = document.createElement("SPAN");
  var txtVegetables = document.createTextNode("\u00D7");
  spanVegetables.className = "close";
  spanVegetables.appendChild(txtVegetables);
  li.appendChild(spanVegetables);

  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }
}

//Fruits

// Create a "close" button and append it to each list item
var myNodelistFruits = document.getElementsByTagName("LI");
var i;
for (var i = 0; i < myNodelistFruits.length; i++) {
  var spanFruits = document.createElement("SPAN");
  var txtFruits = document.createTextNode("\u00D7");
  spanFruits.className = "close";
  spanFruits.appendChild(txtFruits);
  myNodelistFruits[i].appendChild(spanFruits);
}

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// Add a "checked" symbol when clicking on a list item
var listFruits = document.querySelector('ul');
listFruits.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newFruitsElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myFruitsInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myFruits").appendChild(li);
  }
  document.getElementById("myFruitsInput").value = "";

  var spanFruits = document.createElement("SPAN");
  var txtFruits = document.createTextNode("\u00D7");
  spanFruits.className = "close";
  spanFruits.appendChild(txtFruits);
  li.appendChild(spanFruits);

  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }
}
