/////////object /////////// arrays ////////functions;;;;;;;;;;;

let person = {
    name: "navya",
    age : 23,
    country: "india",
    sum : function(a,b) {
        return a+b;
    }
};


//accesing =======dot and square brackets
console.log(person.name);  //navya
console.log(person['name']); //navya


//////modifying//////////////////////////
person.isSleeping = false;

//////deleting the data///////////////////
delete person.age;

console.log(person);

////////functions in objects reffererd as methods///////

let sum = person.sum(2,3);
console.log(`the sum is ${sum}`);



////////////////////arrays////////////
//declaration of arrays//////////////
arr1 = []; 
///////initialization of the array////////
let fruits = ["apple", "banana", "orange"];
let mix = ["apple", 23, true];

/////////accesing the elements////////////
console.log(fruits[0]);





//methods in array///////////////
//we can add delete insert an modify the  array
// pop unshift push shift

fruits.push("dragonfruit");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("dragonfruit");
console.log(fruits);

fruits.shift();
console.log(shift);









//////////functions
// call back functions

