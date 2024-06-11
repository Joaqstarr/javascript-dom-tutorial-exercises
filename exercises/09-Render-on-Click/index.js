let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	document.body.appendChild(div);
});
let div = document.createElement("div");
div.style.background = "yellow";
div.innerHTML = "Hello World";