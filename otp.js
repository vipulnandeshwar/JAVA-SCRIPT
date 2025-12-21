let btn = document.querySelector("button")
let h1 = document.querySelector("h1")
btn.addEventListener('click',()=>{
    setTimeout(()=>{
        let a=  Math.floor(Math.random()*10000);
   window.alert(a)
   console.log(a);
   h1.innerText= a;
    },5000)
   
})