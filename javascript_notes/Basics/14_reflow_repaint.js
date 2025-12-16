
// const a1 =performance.now();

// for(let i = 0 ; i<100; i++){
//     let para = document.createElement("p");
//     para.textContent = "this is a para" + i;
//     document.body.appendChild(para);
// }

// const a2 = performance.now();

// console.log(a2 - a1);

let t1 = performance.now();

let mydiv = document.createElement("div");

for(let i = 1; i<=100; i++){
    let para = document.createElement("p");
    para.textContent = "this is para" + i;
    mydiv.appendChild(para);
}

document.body.appendChild(mydiv);

let t2 =performance.now();

console.log(t2 - t1);

