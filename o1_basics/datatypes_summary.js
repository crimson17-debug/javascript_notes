/* how the data us put and accesed from memory
we differentiate the data into primitive and non-primitive*/


// Primitive

// 7 types
//(call by value: we take the value by copying it )
// string , number, boolean, null(empty), undefined(undecided var and memory declared), symbol(uniqe the value), BigInt


// is javascript dyanamicaly typed or static typed?
// dynamaically typed : since the type is not defined 
// static typed : the type is defined like int , etc

const score = 100;
const value = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherid = Symbol("123")

console.log(id ==anotherid) //false because symbol gives it uniqueness

const bigNumber = 3244444444455555555666n // big int 




//Reference (NOn primitive)

//Array , objects , functions all have object type but functions is object function

const heroes = ["iron_man" , "superman"]; // array
// object//////////////////

let myobj =
{
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hellow world");
}


// null ---> object
// undefined ----> undefined
//function ----> function but it is object function


///+++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive type we use stack memory) -copy of variable declared
// heap (non primitive type we use heap memory)- change in oringinal value

let myYoutubename = "navyautube.com"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(anothername); // the value will be chaiaurcode only it will not change
console.log(myYoutubename); 


// pass by reference

let userone = {
    email: "navyamade@12.com",
    name: "navya"
}

usertwo = userone
console.log(userone);
console.log(usertwo);

usertwo.email = "nav@124"

console.log(userone);
console.log(usertwo); // the values of both variables change 




/*         ||||||||||||||||||||||     ||||||||||||||||||||||
           |useronev and usertwo|---->|                    |
           ||||||||||||||||||||||     |                    |
                                      |                    |
           ||||||||||||||||||||||     |   email and  name  |
           |    chaiaurcode     |     |                    |
           ||||||||||||||||||||||     |                    |
                                      |                    |
           ||||||||||||||||||||||     |                    |
           |    anothername     |     ||||||||||||||||||||||
           ||||||||||||||||||||||           heap

           ||||||||||||||||||||||     
           |   myYoutubeName    |
           |||||||||||||||||||||| 

            stack--------------
           */
          