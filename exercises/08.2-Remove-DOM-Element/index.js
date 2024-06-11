// Your code here
let parent = document.querySelector("#parentLi");
let children = parent.childNodes;
console.log(children);
parent.removeChild(children[3]);