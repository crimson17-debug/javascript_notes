
// // class Human{

// //     //properties
// //     #age = 13;
// //     wt = 34;
// //     ht = 180;

// //     //behavior

// //     constructor(newAge, newHeight, newWeight){
// //         this.#age = newAge;
// //         this.ht = newHeight;
// //         this.wt = newWeight;
// //     }
    

// //     wlaking(){
// //         console.log("I am walking!", this.#age);

// //     }

// //     running(){
// //         console.log("I am running");
// //     }


// //     get fetchWeight(){
// //         return this.#age;
// //     }

// //     set modifyWeight(val){
// //         this.#age = val;
// //     }


// // }



// // let obj1 = new Human(23, 24,56);


// // console.log(obj1.wt);
// // console.log(obj1.ht);
// // console.log(obj1.fetchWeight);
















// // function sayName(myName= "Navya", lastName = myName.toUpperCase()){
// //     console.log("hello my name is: ", myName,lastName);
// // }


// // sayName();


// // function change(value = {wt:23, height:24}){
// //     console.log("hello the : ",value);
// // }

// // change();


// // function change(value = ["love", "babbar"]){
// //     console.log("hello the : ",value);
// // }

// // change(["not", "why"]);



// ///////////null and undefined

// // function getvale(value = "rahul"){
// //     console.log("hello the value: " , value);
// // }

// // getvale(null);
// // getvale(undefined);

// // // hello the value:  null
// // // hello the value:  rahul


// function getAge(){
//     return 123;
// }


// function utility(name="navya", age= getAge()){
//     console.log("hey", name, age);
// }

// utility();



// /////////////////objects/////////////////

// //////////objectliterals/////////////////

// let objEss = {
//     age: 23
// }

// //////////new object method////////////////

const objA = new Object();
objA.person = true;
objA.idiot = " no "
objA.age = 12;

console.log(objA)



///////////object create method

const objPrototype = {
    name : "mayank"
};

let objB = Object.create(objPrototype); // only datatype is copied and object is creeated


/////////////////factory functions/////////////

function createPerson(){

    return {
        name : "navya",
        age : 23
    }
}

let objC = createPerson();

console.log(objC.name);
/////////parameters and arguments in the functions




//////////constructor function///////////

function CreatePerson () {
    this.person = "nmavya",
    this.age = 12,
    this.lastName = "made",
    this.hobbies = ["car", "sing", "dance"]
    this.world = function() {
        console.log(`this is ${this.person}`);
    }

}


let objD = new CreatePerson();
console.log(objD);
objD.world();





//////////dot and bracket notation//////////

// brackets helps if the obj prooperties have special charatchter or numbers


// modifying object properties
// add 

console.log(objD.person);
// delete
// modify













