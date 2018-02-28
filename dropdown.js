const area = document.getElementById('dropdown-area');
const button = document.createElement("button");
button.setAttribute("id", "dropdown-button");

// CREATE DROPDOWN LISTING
const dropDownList = document.createElement("div");
dropDownList.setAttribute("id", "dropdownDiv");
dropDownList.style.backgroundColor = "#333";
dropDownList.style.padding = "20px";
dropDownList.style.display = "none";

var selectOption= document.getElementById("dropdownlist");

// CREATE BUTTON
var selectText = selectOption.selectedIndex;
var buttonNode = document.createTextNode(selectOption.options[selectText].innerHTML);
// var buttonNode1 = document.createTextNode(selectOption.options[selectText].innerHTML);
button.appendChild(buttonNode);

// CREATE ITEMS UNDER THE DROPDOWNLIST
const dropdownUl = document.createElement("ul");
dropdownUl.setAttribute("id", "dropdownUl");


for(i=0; i<selectOption.options.length;i++){
	var dropdownLi = document.createElement("li");
	var dropdownLiNode = document.createTextNode(selectOption.options[i].innerHTML);
	dropdownLi.setAttribute("value", selectOption.options[i].value);
	//Add operations here
	dropdownLi.appendChild(dropdownLiNode);
	dropdownUl.appendChild(dropdownLi);
	// dropdownLi.onclick = changeSelectOption;
}

dropDownList.appendChild(dropdownUl);

function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
    }

dropdownUl.onclick = function(event) {
        var target = getEventTarget(event);
        // alert(target.innerHTML);
        function changeSelectOption() {
			selectOption.onchange = GetSelectedTextValue();

			function GetSelectedTextValue() {
				// var buttonNode1;
				if (target.innerHTML === "Volvo") {
					selectOption.options[0].selected = "true";
					buttonNode = document.createTextNode(selectOption.options[0].innerHTML);

				} else if (target.innerHTML === "Saab") {
					selectOption.options[1].selected = "true";
					buttonNode = document.createTextNode(selectOption.options[1].innerHTML);
				} if (target.innerHTML === "Opel") {
					selectOption.options[2].selected = "true";
					buttonNode = document.createTextNode(selectOption.options[2].innerHTML);
				} else if (target.innerHTML === "Audi") {
					selectOption.options[3].selected = "true";
					buttonNode = document.createTextNode(selectOption.options[3].innerHTML);
				}
		        
		        button.appendChild(buttonNode);
		    }
		}
		changeSelectOption();

		

    };







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
// activeClass.classList.add('active');

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
