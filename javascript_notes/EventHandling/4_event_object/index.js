let button = document.getElementById("myButton")

function eventObject(event) {
    console.log(event.type)
    console.log(event.target)
    console.log(event.clientX)
    console.log(event.clientY)
}


button.addEventListener("click",eventObject);

let link = document.getElementById("mylink")


function preventDef(event) {
    event.preventDefault();
    alert("Default behavior is prevented");
}

link.addEventListener("click",preventDef);