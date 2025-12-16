//query selectors and queryselectorsall
//what is the need of queryselectors 
//can select single or multiple element within the method unlike getelements where we have to select single element through array


let element = document.querySelector("#codehelp");
console.log(element);

let mywel = document.querySelectorAll(".welcome");
console.log(mywel);

mywel[1].style.backgroundColor = "lightgreen";

