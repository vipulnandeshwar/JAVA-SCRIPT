//Without arg and para
let a=function () {
    console.log("hi fe");
}
a()

//With arg and para
let s=function (x,z) {
    console.log(x,z);
    console.log(x+z);
}
s(10,20)

//less no of arg and para
let s1=function(z,x,y,c){
    console.log(z,x,y,c);
    console.log(z+x);
}

//more no of args and less no of para
let s2=function(z,x){
    console.log(z,x);
    console.log(z+x);
    console.log(arguments);
    console.log(arguments[2],arguments[3]);
}
s2(10,20,40,50)

//with arg and no para
let s3=function(){
    console.log(arguments);
    console.log(arguments[0],arguments[1],arguments[3]);
}
s3(10,20,40,50)

let s4=function(z,x,c,v){
  console.log(z,x,c,v);
}

//hoisting
//s5()
//let //refrense error
//var //type error
var s5=function () {
    console.log("hi hoisting");
}

//s5()
var d=82
let s6=function(){
    var d=8
    console.log(d);
    console.log(this.d);
    console.log(window.d);
}
s6()

let s7=function(){
    console.log("hi return");
    return "hello"
}
s7()
console.log(s7());

console.log("prototype" in s7);
let r=new s7()
console.log(Object.getPrototypeOf(r)==s7.prototype);
