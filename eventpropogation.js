    let d= document.querySelector("div")
let s= document.querySelector("section")
let a= document.querySelector("aside")

d.addEventListener("click",(e)=>{
    e.stopPropagation()
    d.style.backgroundColor="red"
    console.log("red");   
},false)

s.addEventListener("click",(e)=>{
     e.stopPropagation()
    s.style.backgroundColor="pink"
    console.log("pink");  
},false)

a.addEventListener("click",(e)=>{
     e.stopPropagation()
    a.style.backgroundColor="green"
    console.log("green");  
},false)