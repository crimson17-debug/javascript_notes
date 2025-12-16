// // string 

// // console.log is a method that prints value to the console 
// const name = "john";


// const singleQuotes = 'hello!';
// const doubleQoutes = "hello!!";

// // using a variable within a variable to print its value
// const backticks = `hello!!! ${name}`;
// // the $ thing works only with backtick and not the singele and double qoutes

// console.log(singleQuotes);
// console.log(doubleQoutes);
// console.log(backticks);

// const strValue = "2 + 2";
// const realValue =`${2+2}` ;  //computation inside a string

// console.log(strValue);
// console.log(realValue);

// ///////////typeof value/////////////////////

// console.log(typeof backticks);
// console.log(typeof realValue);




// //**************numbers******************//

// const wholeNum = 5;
// const decNum = 0.5;

// console.log(wholeNum);
// console.log(decNum);

// /// computation with numbers//////////

// const result = wholeNum + decNum;
// const result1 = wholeNum - decNum;
// const result2 = wholeNum * decNum;
// const result3 = wholeNum / decNum;

// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);


// ///////string dividing /////////

// const result4 = "hello"/ decNum;

// console.log(result4);
// console.log(typeof result4); // number



// //*******booleans**************************//


// // true yes , 1, correct
// // false no , 0, incorrect

// const isCool = true;
// console.log(isCool);
// console.log(typeof isCool);

// //logic checkers < > ==

// console.log(20 < 12);



// //**********null**********//

// let age = null;// for now its empty something yet to be filled
// // age = 23; 
// console.log(age); 
// console.log(typeof age);

// // type of null is object 




// //**********undefined***************//


// let x;
// console.log(x); 
// // undefined is used to check whether the variable is initialied or not althought its declared;
// console.log(typeof x); // undefined



// //*********object****************//

// // all the above types are primitive they contain only one value 

// const person = {
//     name: "honey",
//     age : 25,
// }

// console.log(person);


// //dot notation////////////////////
// console.log(person.name);
// console.log(typeof person);            /// object
// console.log(typeof person.name);       /// string









// //***********array********************* */

// const arr= [1,2,3,4,5,3];
// console.log(arr);
// console.log(typeof arr);         //object

// const date = new Date();
// console.log(date);
// console.log(typeof date);



// //dynamically typed  is javascript////////////












// ////////////primitive datatypes

// // Number
// // String
// // boolean
// // undefined
// // null


let num1 = 23;
let num2 = 4.5;

console.log(typeof num1 );
console.log(typeof num2 );

///////string to numbers/////////

let strInt = "23";
let strFloat = "3.4";

let convFloat = parseFloat(strFloat);
let convoInt = parseInt(strInt);

console.log( typeof convFloat); //its cloning the value into a number i
console.log(typeof convoInt);

strInt = true; //bool

console.log( typeof convFloat); //number




////////////string/////////////
// "" '' `` three types

//double quotes
let myName = "hello";       //string
//single quotes
let urName = 'nono'         //string
//back ticks
let backIs = `${myName} ${urName}`;     //string

//////////////double and single quotes make sense what about hte backticks
//since we have different syntax for it 

// backticks enhance readability allowing concatenation and and newline characteristics with the literals these are template literals

let multiString = `${myName} ${urName}` //hello nono
let multiString2 = `${myName} 
${urName}`
//// hello
//// nono              spaces are also included



///METHODS ON STRING/////////////////////
//length, toUpperCase(), toLowerCase(),
//substring(), charAt(), indexOf(), split(), replace(),


// lenght property returns all the characters in string including spaces and punctuation marks

let len = multiString.length;
console.log(len);       //10 including spaces


/////////upper and lowercase////////////////

let uppercaseString = multiString.toUpperCase();
console.log(uppercaseString);
let lowercaseString = multiString.toLowerCase();
console.log(lowercaseString);


/////////substring method/////////////////

let sub = multiString.substring(1,3);
console.log(sub);  // el from hello(1,3) 3 excluded   from o starting



///////////split method///////////////////////
////convert strings into array of substrings////
let sp = "hello from the depp heart";
let newSp = sp.split(" ");
console.log(newSp);          //array of substrings


/////////join method//////////////////////////////////
///////converts array of substrings into strings///////

let newString = ['hello', 'my' , 'name', 'is'];

let joinString = newString.join(" ");
console.log(joinString);
joinString = newString.join();
console.log(joinString);





///////////boolean//////////////
let is = true;
let not = false;





//////////////undefined//////////////////////
///the variable is declared but the value is not assigned
//////or the variable is not initialized

let range;
console.log(range);     //undefined



////////////null////////////////////////
//null is explicitly assingmed to tell theat it is null value

let ran = null;
console.log(ran);     //null and the dt is object










