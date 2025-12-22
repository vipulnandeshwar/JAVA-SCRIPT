let inp = document.querySelector("#inp")
let btn = document.querySelector("button")
let div = document.querySelector("div")

btn.addEventListener('click',()=>{
    let qr = new QRCode(div)
    console.log(qr);
    qr.makeCode(`https://www.${inp.value}.com`)
    inp.value = ""
    
})