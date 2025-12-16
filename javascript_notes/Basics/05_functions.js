newFun();         //called before due to function hoisting
function newFun (){
    console.log("hlelo woerld");
};

// newFun1();        error no function hoisting
let newFun1 = function() {      
    console.log("this is expression function");
}

newFun1();

let newfun2 = () => {
    console.log(`arrow unctions`);
}
newfun2();


setTimeout(() => {
    const data = "data fetched succesfully";
    useCallback(data);
}, 1000);





// // function declaration === declaring or defining function
// function square(number){
//     return number*number;
// }


// console.log(square(2));

// // arrow functions

// const name = (number) =>{
//     console.log(hello);
//     return number*number;
// }


/////////////////variable hoisting
// the variable declaration is taken rather than the value ////////////////
console.log(age);
var age = 23;    //undefined

////////////function hoisting
///////////////the whole fuction shifts and can be hoisted within the range


{
myName("babbar");
function myName(name){
    console.log(name);
}
}


////////we cannot variable hoisting in let and const






// expression functions do not follow the function hoisting

// sayhello();

// function sayhello(){
//     console.log("hellowworld"); //hellowworld
// }


// sayhello();

// let sayhello = function(){
//     console.log("hellowerld");     //throws an error
// }




// class hoisting

// const obj1 = new Human();

// class Human {     //error in output

// }

// function greetMe(greet , fullname){
//     console.log("Hello", fullname);
//     greet()
// }

//  function greet(){
//     console.log("hello there!");
// }

// greetMe(greet,"navya");

// 
// function greetMe(greet , fullname){
//     console.log("Hello", fullname);
//     greet()
// }

//  function greet(){
//     console.log("hello there!");
// }

// greetMe(greet,"navya");


// function solve(no){
//     return function(no){
//         return no *no;
//     }
// }

// let  ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns)




// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a*b;
//     },
//     function(a,b){
//         return a-b;
//     }
// ]

// let addition = arr[0];
// let ans1 = addition(2,3);
// let multiplication = arr[1];
// let ans2 = multiplication(2,3);
// let subtraction = arr[2];
// let ans3 = subtraction(2,3);

// console.log(ans1)
// console.log(ans2)
// console.log(ans3)



