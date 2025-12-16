// let newElement = document.createElement("p");
// newElement.textContent = "hello there";
// document.body.appendChild(newElement);





let paragraph = document.createElement("p");
let text = document.createTextNode("hello this is textnode creation");
paragraph.appendChild(text);
document.body.appendChild(paragraph);


let myhead = document.getElementsByTagName("h1");
myhead[0].style.cssText = "background-color:blue";