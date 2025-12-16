

////array is a data structure in javascript 
////it is an object that collets and stores elements of different datatypes
///// array in javascript are dynamic since we donot specify its size exclusively

///////creating an array
///////1/array literal notation []
let arr1 = [];
arr1 = ["hello", "my", "name"];
console.log(arr1);

////////2/ array constructor
const arr2 = new Array(2,3,"hello");
// arr2 = new Array(2,3,"hello");  error assignment to const variable
console.log(arr2);

///accesing elements
//by literal []
console.log(arr1[2]);

//last element by the length property of arrays
console.log(arr2[arr2.length - 1]);

///index as variable///////////
let index = 1;
console.log(arr1[index]);


//insertion in arrays////////////////////
//insert at start
arr1.unshift("Navya");
console.log(arr1);
//insert at end
arr1.push("nono");
console.log(arr1);
//insert at random index
arr1.splice(2,0,"spliced"); //delete 0 elements inserts at 2
// arr1.splice(2,1,"spliced"); //delete 1 at index 2 elements inserts at 2
// arr1.splice(2,4,"spliced"); //delete elements including at index 2 elements inserts at 2 and no error
// arr1.splice(2,-1,"spliced"); //delete 0 elements inserts at 2 error
console.log(arr1);


//filter methods/////////////////
// const newArray = arr1.filter(_callback function_);syntax
let num = [1,2,3,4,5,5]
const newArray = num.filter(function(numbers){
    return numbers >2;
})

console.log(newArray);

//filter on array of objects/////////////

let identity = [
    {id : 1,
     name: "product a",
     price : 23
    },
    {id : 2,
     name: "product b",
     price : 33
    },
    {id : 3,
     name: "product c",
     price : 21
    }
]

const newObj = identity.filter(function(ide) {
    return ide.price > 23;
})

console.log(newObj);
const newWord = identity.filter((obj) => obj.id <3 );
console.log(newWord);


//reduce method it reduces the array to single elelment and 
// exucutes the callbackfunction for each element in the array

const num12 = [1,2,3,4,5];

let sum = num12.reduce((accumalator , currentvalue) => {
    console.log(accumalator, currentvalue);
    return accumalator + currentvalue;
},0) //inital value

console.log(sum);






