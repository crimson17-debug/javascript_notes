// monitorEvents(document);  //click and it will show all the events when u click
// unmonitorEvents(document); //to stop monitroing


// if we click a button 
// then we are clicking the button is event 
// the button is the event target 
// the action performed after clicking is stored in a location == event listener

//addeEventListener()
//removeEventListener()

/* <event-target>.addEventListener(<event.type>, <function => action>)) */



function changeText(event) {
    console.log(event);
    let firstpar= document.getElementById("firstpar");
    firstpar.textContent = "love babbar";
}

let firstpar = document.getElementById("firstpar");

firstpar.addEventListener("click", changeText,true);
// firstpar.removeEventListener("click", changeText); removes event listener




//capturing phase div=article=p
//p is the  target phase
//p=article = div    bubbling phase

//addEventlistner bydefault is in bubbling phase mai hit hota hai


// event object 


// //default action////////////
// let anchorElement = document.getElementById('fanchor');

// anchorElement.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchorElement.textContent = "click done bhai";
// });



// let paras = document.querySelectorAll('p');

function alertPara(event) {
    if(event.target.nodeName === 'P')
    alert("this is the para alert" + event.target.textContent);
}

// for(let i = 0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener("click", alertPara);
// }



let mydiv = document.getElementById('firstdiv');

mydiv.addEventListener('click', alertPara);


