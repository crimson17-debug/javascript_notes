let mydiv = document.querySelector("#mydiv");

let newElement = document.createElement("span");
newElement.textContent = "hello there  how are you!";

// let newElement2 = document.createElement("span");
// newElement2.textContent = "after begin content";

// let newElement3 = document.createElement("span");
// newElement3.textContent = "before end content";

// let newElement4 = document.createElement("span");
// newElement4.textContent = "after end content";

mydiv.insertAdjacentElement("beforebegin", newElement);
// mydiv.insertAdjacentElement("afterbegin", newElement2);
// mydiv.insertAdjacentElement("beforeend", newElement3);
// mydiv.insertAdjacentElement("afterend", newElement4);

// let parent = document.querySelector("#mydiv");
let child = document.querySelector("#mypara");


// parent.removeChild(child);

let parent = child.parentElement;

parent.removeChild(child);