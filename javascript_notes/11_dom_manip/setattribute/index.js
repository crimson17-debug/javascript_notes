let element = document.getElementById("fdiv");

element.setAttribute("class", "font");
element.setAttribute("class", "color");

/////////disadvantage it overwrites the preexisting attributes//////////


console.log(element);


//////using href

let anchor = document.getElementById("fanchor");
anchor.setAttribute("href", "https://www.codehelp.in/" );


let myBtn = document.getElementById("fbtn");

function addAttribute() {
    myBtn.setAttribute("style","color:red; font-size: 20px; background-color:lightgreen");
}




////////////////////getAttribute////////////////////////

let sbtn = document.getElementById("sbtn");

function getAttributeValue() {
    let fpara  = document.getElementById("fpara");
    let value = fpara.getAttribute("title");

    alert(`the attribute value is : ${value}`);

}