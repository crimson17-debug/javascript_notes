let newElement = document.createElement("p");
newElement.textContent = "hi there this is before begin";

let element2 = document.createElement("p");
element2.textContent = "this is afterbegin";

let element3 = document.createElement("p");
element3.textContent = "this is beforeend";

let element4 = document.createElement("p");
element4.textContent = "this is afterend";

let mydiv = document.getElementById("fdiv");

mydiv.insertAdjacentElement("beforebegin",newElement);
mydiv.insertAdjacentElement("afterbegin", element2);
mydiv.insertAdjacentElement("beforeend", element3);
mydiv.insertAdjacentElement("afterend", element4);


