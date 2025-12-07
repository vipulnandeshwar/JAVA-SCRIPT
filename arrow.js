let a=()=>{
    console.log("Hello arrow fun");
    console.log("h1");
}
a()

//implicit arrow function
//single parameter
let b=x=>"Hello"+x
console.log(b(5));
console.log(b(15));

//without parameter
let c=()=>"Hello"
console.log(c());
console.log(c());

//more no of parameters
let d=(x,y)=>x+y
console.log("hello i");

console.log(d(5,10));
console.log(d(15,10));

//explicit arrow functon
let w=()=>{return "hello js"}

console.log(w());

let e=()=>{
console.log("Hi second arrow");
return "hello e fun"
}

console.log(e());
console.log(e());
console.log(e);

//with parameters wid arguments

let r=(t,u)=>{
    console.log(t+u);
    console.log(t,u);
}
r(5,2)

//less para with more no of argu
let r1=(t,u)=>{
     console.log(t,u);
    console.log(t*u);
    // console.log(arguments);
}
r1(10,20,30,40,50)

//prototype
let r2=()=>{
    console.log("hi prototype");
}

r2()

console.log("prototype" in r2);

//let r3=new r2()
// console.log(Object.getPrototypeOf);

var f=20
let r4=()=>{
    var f=50
    console.log(f);
    console.log(this.f);
    console.log(window.f);
}
r4()
