// function demo(){
//    setTimeout(()=>{
//      for (let i = 1; i <= 10; i++) {
//         console.log(i);   
//     }
//    },5000)
// }
// demo()

// function d1(){
//     console.log("hi");   
// }
// d1()

// function d2(){
//    setTimeout(()=>{
//      console.log("tata");  
//    },7000)
// }
// d2()

function demo(){
   setInterval(()=>{
     for (let i = 1; i <= 10; i++) {
        console.log(i);   
    }
   },5000)
   
}
demo()

function d1(){
    console.log("hi");   
}
d1()

// function d2(){
//    setTimeout(()=>{
//      console.log("tata");  
//    },7000)
// }
// d2()

let btn=document.querySelector("button")
let h1=document.querySelector("h1")

// btn.addEventListener("click",()=>{
//     setInterval(()=>{
//         console.log("h1");
//         let date=new Date()
//         console.log(date.getDate());
//         console.log(date.getDay());
//         console.log(date.getFullYear());
//         console.log(date.getMonth());
//         console.log(date.getHours());
//         console.log(date.getMinutes());
//         console.log(date.getMilliseconds());
//         console.log(date.getSeconds());
//         console.log(date.getTime());
//         console.log(date.toLocaleString());
//         console.log(date.toLocaleDateString());
//         console.log(date.toLocaleTimeString());
//         h1.innerText=date.toLocaleTimeString()
        
//     },1000)
// })

function demo1(){
    let date1=new Date()
    h1.innerText=date1.toLocaleTimeString()
}

let a=setInterval(demo1,1000)
btn.addEventListener("click",()=>{
    clearInterval(a)
})