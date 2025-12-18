let h1=document.querySelector("h1")
console.log(window);
console.log(window.navigator.online);

if(window.navigator.online){
    h1.innerText="😂"
}
else{
    h1.innerText="😒"
}

let share=document.querySelector("#share")
share.addEventListener("click",()=>{
    console.log(window.navigator.mediaDevices.getDisplayMedia());
    
})

let cam=document.querySelector("#cam")
let v=document.querySelector("#video")
cam.addEventListener("click",()=>{
    console.log(window.navigator.mediaDevices.getUserMedia({audio:true,video:true})
    .then((e)=>{
        v.srcObject=e
    }));
})

let c1=document.querySelector("#cl")
cl.addEventListener("click",()=>{
console.log(window.navigator.geolocation.getCurrentPosition((p)=>{
    console.log(p.coords.latitude);
    console.log(p.coords.longitude);
    let map=`https://www.google.com/maps/place/${p.coords.latitude},${p.coords.longitude}`
    window.location.href=map
    
}));

})

let loc=document.querySelector("#loc")
let inp=document.querySelector("input")
loc.addEventListener("click",()=>{
    console.log(input.value);
    window.location.href=`https://www.google.com/maps/place/${input.value}`
    inp.value=""
})