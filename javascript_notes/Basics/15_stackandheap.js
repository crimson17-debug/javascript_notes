// the variable is stored in the memory stack and heap based on its datatype 

// difference between the primitive and reference data types 

// stack is a fixed memory 
// it is for primitive data types 
// it has limited storage deteremined during compile time 
// primitive datatype 
// number 
// Boolean
// string         // in js string is not reference type 
// null
// defined 


// heap memory is for reference data types 
// heap memory is dynamic memoory locaiton 
// it is more flexibel and dynamic memory space 
// size is usaully larger than the stack 
// during the the program runs



// copy of variable also differs in primitve and reference 

// in primitive datatypes the copy of the value in that variable is taken 
// in primitive we cannot change the original value

let num1 = 23;
let newNum1 = num1;
newNum1 = 45;
console.log(newNum1);     //43
console.log(num1);       //23 no change bcs primitive type

//reference datatype

let person={
    name : "navya",
    age : 23,
    person : true
}

 let newName = person.name;
 newName = "maidhili";
 console.log(person);       // name : navya bcs we are changing the property without object 

 let person2 = person;
 person2.name = "maidhili";

 console.log(person);     //name : maidhili entire object should be copied

 //person1 and person2 point to the object in the heap this is referene copying not cloning


// ther reference datatypes are also dynamic 
// add, update delete

person.age = 43;      //modify
person.country = "INDIA";    //added
delete person.name;       //deleted

console.log(person);



