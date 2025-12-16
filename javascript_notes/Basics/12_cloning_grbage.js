let src = {
    age: 12,
    wt : 59,
    ht: 123,
}

// console.log(obj);

//since we can add new key value pairs to already created obj
// it makes the obj dianamic


// obj.color = "white";

// console.log(obj);

//object cloning != reference copy

let a = {
    val : 23,
}

let b = a; 

console.log(b); // this is reference copy the b and a and referring to same obj

////////////instead what we need is the new variable to refer to its own obj that is same as the obj that we cloned









// object cloning can be done: 
// spread operator 

let dest = {...src};
console.log("src: ", src);
console.log("dest: ", dest);
///////how to check if this is clone and not reference
//////change the original value and see if it changes clone thn its referernce else its clone

src.name = "navya";
console.log(src);
console.log(dest);



//assign/////////////////////

let assignedDest = Object.assign({}, src);

console.log(src);
console.log(assignedDest);



//iteration method/////////////

let iter_dest = {};

for(let key in src){
    
    let newKey = key;
    let newValue = src[key];

    iter_dest[newKey] = newValue;
}

console.log(iter_dest);











///////////GARBAGE COLLECTOR///////////////

//gc always runs in the background no control by us
// and it helps to free the memory that is of no use