const area = document.getElementById('dropdown-area');
const button = document.createElement("button");

// CREATE DROPDOWN LISTING
const dropDownList = document.createElement("div");
dropDownList.setAttribute("id", "dropdownDiv");
dropDownList.style.backgroundColor = "#333";
dropDownList.style.padding = "20px";
dropDownList.style.display = "none";

// CREATE ITEMS UNDER THE DROPDOWNLIST
const dropdownUl = document.createElement("ul");
dropdownUl.setAttribute("id", "dropdownUl");
var menuText = ['Nav Point', 'Loiter Time', 'Loiter Turns', 'Loiter Infinite'];

for (var i = 0; i < menuText.length; i++) {
	var dropdownLi = document.createElement("li");
    var dropdownLiNode = document.createTextNode(menuText[i]);
    dropdownLi.appendChild(dropdownLiNode);
    dropdownLi.setAttribute("id", "dropdownLi-" + (i+1));
    dropdownUl.appendChild(dropdownLi);

    dropdownLi.onclick = menuClick;
}


function menuClick() {
	var menuTextItem = this.innerHTML;
	var matches = document.querySelector("#dropdownUl li");

	for (var i = 0; i < menuText.length; i++) {
		matches.parentNode.childNodes[i].classList.remove('active');
	}

	this.classList.add('active');
	button.innerHTML = menuTextItem;
	dropDownList.style.display = "none";

	switch (menuTextItem) {
	    case 'Nav Point':
	    	console.log(menuTextItem);
	        break;
	    case 'Loiter Time':
	    	console.log(menuTextItem);
	        break;
	    case 'Loiter Turns':
	    	console.log(menuTextItem);
	        break;
	    case 'Loiter Infinite':
	    	console.log(menuTextItem);
	        break;
	    default: 
	        console.log('None');
	}
}

dropDownList.appendChild(dropdownUl);

// CREATE BUTTON

const buttonNode = document.createTextNode('Nav Point');
button.setAttribute("id", "dropdown-button");
button.appendChild(buttonNode);

// BUTTON CLICK FUNCTION
button.onclick = buttonClick;
window.onclick = buttonClick;

function buttonClick() {
	console.log('Hi, I am Button!!');
	if (dropDownList.style.display === "none") {
		dropDownList.style.display = "block";
	} else {
		dropDownList.style.display = "none";
	}
}

// APPEND IN BODY
area.appendChild(button);
area.appendChild(dropDownList);

var activeClass = document.getElementById('dropdownLi-1');
console.log(activeClass);
activeClass.classList.add('active');

var dropdownAr = document.getElementById('dropdownDiv');

window.onclick = function(event) {
  if (!event.target.matches('#dropdown-button')) {
    var dropdowns = document.getElementById('dropdownDiv');
      if (dropdowns.style.display = "block") {
        dropdowns.style.display = "none";
      }
  }
}

console.log(area);
