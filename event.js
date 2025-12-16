// function demo(e) {
//     console.log('hi');
//     e.target.style.backgroundColor='orange'
// }

//html level event
let h=document.querySelector("h1")
function demo(){
    alert("modification started")
    h.innerText="h1"
    h.style.backgroundColor="hotpink"
    h.style.color="white"
}

//dom level event
let btn=document.querySelector("btn")
btn.ownerDocument=()=>{
    console.log("hello dom level");
    
}

//event handler/listner
let btn1=document.querySelector("#btn1")
btn1.addEventListener("click",(e)=>{
    console.log(e.target.innerText);
    console.log(e.target);
    e.target.innerText="tata"
    console.log(e);
    console.log(e.clientx);
    console.log(e.clienty);
    
})

let b1=document.body
function rncolor(){
    // console.log("btn");
    // console.log(b1);
    let r=Math.floor(Math.random())
}