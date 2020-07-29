//DAIRY

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
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newDairyElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myDairyInput").value;
  var t = document.createTextNode(inputValue);
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

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
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

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

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
