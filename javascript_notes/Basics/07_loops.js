// //for loop while loop do while loop

// //forEach method




// let arr1 = [1,2,3,4,5];
// let sum = 0;

// arr1.forEach(function(number, index) {
//     console.log(`element at ${index} : ${number}`);
// })

// arr1.forEach(function(number){
//     sum += number;
// })

// console.log(sum);

// let arr3 = [-1 , -2, -3, 0 , 1,2,3];

//  let newarr = arr3.filter(function(number){
//     return number>0;
//  })

//  console.log(arr3);
//  console.log(newarr);

// let newarr3 = [];
//  arr3.forEach(function(number, index) {
//      if(number>0){
//         newarr3.push(number);
//      }
//  })

//  console.log(newarr3);


//  ////////for of loop
//  let colors = ['red', 'green', 'yellow'];

// for(let color of colors){
//     console.log(color);
// }

// let person = {
//     name : "Navya",
//     age : 23
// }

// for(let key  in person){
//     console.log(key,":" , person[key]);
// }


// let numbers = [1,2,3,4,5,6];

// let new_numbers = [];

// numbers.forEach(function(number) {
//     new_numbers.push(number*2);
// })
// console.log(new_numbers);


// let new_nums = numbers.map(function(number) {
//     return number*2;
// })

// console.log(new_nums);


const students = [
  { name: 'Mayank', age: 21 },
  { name: 'Love', age: 24 },
  { name: 'Pranay', age: 18 }
];

let name_arr = students.map(function(student) {
    return student.name;
})

console.log(name_arr);
