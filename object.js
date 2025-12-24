// literal way
let obj = {}
console.log(obj);

// new Keyword
let obj1 = new Object();
console.log(obj1);

// Constructor way
let obj2 = Object();
console.log(obj2);

// function Constructor
function demo(age, name){
    this.age = age
    this.name = name;
}

let a = new demo(10,"abc")
console.log(a);

let obj3={
    name1:"abc",
    id:123
}
console.log(obj3);
console.log(obj3.name1);
console.log(obj3.id);

let obj4={}

//insersion
obj4.name="xyz"
console.log(obj4);
obj4.id=1234    
console.log(obj4);
obj4.role="web dev"
console.log(obj4);

//updation
obj4.role="frontend dev"
console.log(obj4);

//deletion


let obj5


