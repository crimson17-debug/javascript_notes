 let Element = document.getElementById("babbar");

console.log(Element)

Element.className += "class1 class2"

Element.classList = Element.className.replace("class1","class3")


console.log(Element.className)

console.log(Element.classList[0]) //returns the DOMtokenlist(2)


Element.classList.add("class4","class5")
console.log(Element.classList)
Element.classList.remove("class3")
console.log(Element.classList)
let isPresent = Element.classList.contains("class3")
console.log(isPresent)
Element.classList.toggle("class5")
console.log(Element.classList)
Element.classList.toggle("toggled")
console.log(Element.classList)