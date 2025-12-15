let b=document.body
console.log(b);
console.log(b.firstElementChild);
console.log(b.firstElementChild.innerText);
b.firstElementChild.innerText="hi"
console.log(b.firstElementChild.innerText);
let a=b.firstElementChild
console.log(a);
console.log(a.textContent);
a.textContent+=" tata"
a.textContent="<span>hello span</span>"
a.innerText="<div>hello div</div>"
a.innerHTML="<div>hello div</div>"
// b.innerHTML+="<section>hi</section>"
// let t=b.innerHTML=`<table border=2px solid height=200px width=200px>
//     <tr>
//         <td></td>
//         <td></td>
//         </tr>
//     <tr>
//         <td></td>
//         <td></td>
//     </tr>
// </table>`
// console.log(t);
// console.log(t.firstElementChild.firstElementChild);

let t1=document.createElement("table")
console.log(t1);
b.append(tr1)
let tr1=document.createElement("tr")
console.log(tr1);


let td1=document.createElement("td")
console.log(td1);
tr1.appendChild(td1)
let td2=document.createElement("td")
console.log(td2);
tr1.appendChild(td2)

let tr2=document.createElement("tr")
console.log(tr2);
t1.append(tr2)

let td3=document.createElement("td")
console.log(td3);
tr2.appendChild(td3)
let td4=document.createElement("td")
console.log(td4);
tr2.appendChild(td4)

t1.setAttribute("boder","2px solid")
t1.style.height="200px"
t1.style.width="200px"

td1.style.backgroundColor="red"
td1.style.backgroundColor="grey"
td1.style.backgroundColor="blue"
td1.style.backgroundColor="pink"
t1.setAttribute("cellspacing","0px")
td1.setAttribute("colspan","2")
td2.remove()
let sec=document.querySelector("section")
sec.remove()
t1.removeAttribute("border")
let inp=document.querySelector("input")
console.log(inp);
inp.value="hello"
console.log(inp.value);

