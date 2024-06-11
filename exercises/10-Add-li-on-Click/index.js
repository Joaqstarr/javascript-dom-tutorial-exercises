let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	myLi.appendChild(listElem);
});

let listElem = document.createElement("li");
listElem.innerHTML = "Fourth element";
let myLi = document.querySelector("#myList");