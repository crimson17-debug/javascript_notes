//innerHTML
//outerHTML
//textContent
//innerText


let element = document.getElementById("myPara");


////////////innerHTML shows the actual code//////////
/////////////it doesnot include starttag and endtag///////

// let content = element.innerHTML;
// console.log(content);

// let new_content = "this is inner html";
// element.innerHTML = new_content;       




/////////////innerText///////////////////////////
//////////////////it doesnot include anytag////////////

// inner text shows what is shown by the browser

// let content = element.innerText;
// console.log(content);

// let new_content = "this is new content";
// element.innerText = new_content;



/////////////outerHTML//////////////////////
////////////it includes starttag content and endtage and also content tag////////

// let content = element.outerHTML;
// console.log(content);

// let new_content = "<div>hello there </div>";
// element.outerHTML = new_content;




//////////////textcontent ////////////////////////
//text content doesn't show any tags like inner text but returns entire html content 

let content = element.textContent;
console.log(content);








// innerHTML vs. outerHTML: innerHTML deals with the content inside the element, while outerHTML includes the element itself.

// innerText vs. textContent: innerText retrieves only visible text, excluding child elements, while textContent retrieves all text content, including child elements.
