// Your code here
let toDo = document.querySelector("#addToDo");
let list = document.querySelector("ul");
toDo.addEventListener("change", (event)=>{
    let value = event.target.value;
    console.log(value);
    if(value != ""){
        list.appendChild(createListItem(value));
        
    }
    target.value = "";
    target.innerHTML = "";
})

function createListItem(value){
    let li = document.createElement("li");
    li.innerHTML = "<span><i class=\"fa fa-trash\"></i></span> " + value;
    subscribeToDeleteEvent(li);

    return li;
}

function subscribeToDeleteEvent(obj){
    let span = obj.children[0];
    let icon = span.children[0];
    icon.addEventListener("click", (event)=>{
        list.removeChild(event.target.parentNode.parentNode);
    });
}


let startingChildren = list.children;
for(let i = 0; i < startingChildren.length; i++){
    subscribeToDeleteEvent(startingChildren[i]);
}