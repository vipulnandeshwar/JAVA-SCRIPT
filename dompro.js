let b=document.body
console.log(b);

console.log(b.firstChild);
console.log(b.lastElementChild);
console.log(b.firstElementChild.nextElementSibling);
console.log(b.firstElementChild.nextElementSibling.firstElementChild);
console.log(b.lastElementChild.previousElementSibling);
console.log(b.lastElementChild.previousElementSibling.previousElementSibling);
console.log(b.firstChild);
console.log(b.firstChild.nextSibling.nextElementSibling);
console.log(b.lastChild.previousSibling);
console.log(b.lastChild.previousSibling.previousElementSibling);

let a=b.lastChild.previousSibling.previousElementSibling
console.log(a.parentElement);
console.log(a.parentElement.parentElement);
console.log(b.children);
console.log(b.childNodes);
console.log(b.firstElementChild.nextElementSibling.children);
console.log(b.firstElementChild.nextElementSibling.childNodes);
console.log(b.firstElementChild.nextElementSibling.childElementCount);

