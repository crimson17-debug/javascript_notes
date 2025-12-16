// element.addEventListener(event,callbackFunction,options);
//element---the html element to which the event listner will be added
//event -----  a string representing the type of event to listen for ---click 
//callbackFunctions --- the function executed when the event occurs
//option optional

let mybtn = document.getElementById("myButton");

//adding event listener to the button



mybtn.addEventListener("mouseover",function () {
    mybtn.style.backgroundColor = "orange";
    mybtn.style.color = "red";
});

mybtn.addEventListener("mouseout",function() {
    mybtn.style.backgroundColor = "red";
    mybtn.style.color = "orange";
})


let myinput = document.getElementById("myInput");

myinput.addEventListener("input",function(event){
    console.log(event.target.value);
})


let firbtn = document.getElementById("firbtn")

function changeBackground() {
    firbtn.style.backgroundColor = "blue";
    firbtn.style.color = "white";
}

function finalChange(){
    firbtn.style.backgroundColor = "green";
    firbtn.style.color = "white";
}

firbtn.addEventListener("mouseover",changeBackground);
firbtn.addEventListener("mouseout",finalChange);


setTimeout(function(){
    firbtn.removeEventListener("mouseover",changeBackground);
    alert("Event listener removed!")
}, 5000);