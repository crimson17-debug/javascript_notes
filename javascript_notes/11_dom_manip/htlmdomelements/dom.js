
/////////////////getelementbyid////////////////////////////
//single argument and returns single element

let myId = document.getElementById("identity");
console.log(myId);

myId.textContent = "this is the changed content identity";
myId.style.backgroundColor = "black";
myId.style.color = "white";






///////////////////////getelementbyclassname////////////////
////it accepts single argument

/////its collection of elements with specific class name
/////////its array like object of all child elements which matches give class name


let myClass = document.getElementsByClassName("main");
console.log(myClass);

//////myclass.style.backgroundcolor ===error since its an array we need to access the required element

let elements = document.getElementsByClassName("code1");
elements[0].style.backgroundColor = "green";
elements[1].style.backgroundColor = "yellow";
elements[2].style.backgroundColor = "red";





//////////////getElementByTagName()/////////////////////////

///////it return an array with similar tagnames
//////it takes single argument tagname

let myhead = document.getElementsByTagName("h2");
console.log(myhead);

myhead[3].style.backgroundColor = "lightpink";
myhead[4].style.color = "skyblue";

