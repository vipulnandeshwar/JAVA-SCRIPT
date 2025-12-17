let d1=document.querySelector("#gp")
d1.addEventListener("click",(e)=>{
    console.log(e.target.id);
    if(e.target.id=="gp"){
        e.target.style.backgroundColor="red"
    }
    else if(e.target.id=="par"){
        e.target.style.backgroundColor="pink"
    }
    else if(e.target.id=="ch"){
        e.target.style.backgroundColor="green"
    }
    
})