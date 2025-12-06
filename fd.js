function demo() {
    console.log("Hello");
}

demo()//hello
console.log(demo());

function demo1() {
    console.log("H1");
    return "hi return keyword"
    console.log(urs);
    console.log(urs1);
    console.log(urs3);
}

demo1()
console.log(demo1());

console.log(demo1());

function d1() {
    console.log("h1 prototype");
    
}

d1()
console.log("prototype"in d1);
let a=new d1()
console.log(Object.getPrototypeOf(a)==d1.prototype);

