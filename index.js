let d1= document.querySelector("#d1")
let d2= document.querySelector("#d2")
let d3= document.querySelector("#d3")
let as= document.querySelector("aside")
let d4= document.querySelector("#d4")
let d5= document.querySelector("#d5")

d1.addEventListener("click",(e)=>{
    e.stopPropagation()
    d1.style.backgroundColor="red"
    console.log("red");   
},false)
d2.addEventListener("click",(e)=>{
    e.stopPropagation()
    d2.style.backgroundColor="pink"
    console.log("pink");   
},false)

as.addEventListener("click",(e)=>{
    e.stopPropagation()
    as.style.backgroundColor="green"
    console.log("green");   
},false)
d4.addEventListener("click",(e)=>{
    e.stopPropagation()
    d4.style.backgroundColor="yellow"
    console.log("yellow");   
},false)

d5.addEventListener("click",(e)=>{
    e.stopPropagation()
    d5.style.backgroundColor="blue"
    console.log("blue");   
},false)