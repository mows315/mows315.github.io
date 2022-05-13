const div = document.getElementById("colored-element");

div.style.color = "green";

function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
const menu = document.querySelector('#parent-element');
menu.appendChild(createMenuItem('Appending'));
menu.appendChild(createMenuItem('Element'));

const forLoopArray = ["Item One", "Item Two", "Item Three", "Item Four"];
forLoopArray.forEach(element => console.log(element));

const element = document.getElementById("event-listener-button");
element.addEventListener("click", myFunction);
function myFunction() {
    console.log("Clicked");
}