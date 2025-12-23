let arr=[10,20,30,40,50]
console.log(arr);

let a=arr.reduce((acc,v)=>{
    console.log(acc,v);
    return acc+v
},5)
console.log(a);

let b=arr.map((e)=>{
    return e+5
})
console.log(b);

//flat
let arr1=[10,[20,30],[[[40]]],[50[[[[[[[[[[[60]]]]]]]]]]]]]
console.log(arr1);
console.log(arr1.flat(Infinity));

let arr2=[10,20,30,40,50]
 for(let i of arr2){
    console.log(i);
 }

 console.log(arr2.includes(5));
 console.log(arr2.includes(50));
 console.log(arr2.includes(30));
 console.log(arr2.includes(3));
 
 let arr3=[45,25]
 console.log(arr2.concat(arr3));
 
let q=arr2.entries()
console.log(q);
for(let i of q){
    console.log(i);
}

let arr4=[10,20,30,30,40,30,20,30,80,50]

console.log(arr4);
console.log(arr4.indexOf(30));
console.log(arr4.lastIndexOf(30));

let w=arr4.filter((s)=>{
    return s>30
})

console.log(w);
