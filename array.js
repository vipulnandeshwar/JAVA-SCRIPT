// literal way
let arr =[]
console.log(arr);

// new keyword
let arr1 = new Array()
console.log(arr1);

// Constructor
let arr2 = Array()
console.log(arr2);

let arr3 = [10,20,"hi",true,false,NaN,undefined,10n,10.5,null]
console.log(arr3);
console.log(arr3[2]);

let arr4 = []
console.log(arr4);//[]
arr4.push(10,20)
console.log(arr4);
arr4.push(30);
console.log(arr4);

arr4.shift()
console.log(arr4);

arr4.unshift("hi",50)
console.log(arr4);
arr4.unshift(true)
console.log(arr4);   

