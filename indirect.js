//id
let a=document.getElementById("d1")
console.log(a);
let b=document.getElementById("d2")
console.log(b);

//classname
let c=document.getElementsByClassName("d3")
console.log(c);
console.log(c[1]);
//classname will returns to html collection

//tagname
let d=document.getElementsByTagName(div)
console.log(d);
let e=document.getElementsByTagName(h1)
console.log(e);
//tagname will returns the html collection

//name
let f=document.getElementsByName("d4")
console.log(f);
console.log(f[3]);
//name will return the node list

//querryselector
let g=document.querySelector("#d1")
console.log(g);
let g1=document.querySelector(".d3")
console.log(g1);
let g2=document.querySelector("div")
console.log(g2);

//querselectorAll
let h=document.querySelectorAll("#d1")
console.log(h);
let h1=document.querySelectorAll("#d1")
console.log(h1);
let h2=document.querySelectorAll("#d1")
console.log(h2);
//queryselectorAll will returns 
