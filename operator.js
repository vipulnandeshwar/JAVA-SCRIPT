for(let i=1;i<=5;i++){
    if(i==3){
        //continue
        break;
    }
    console.log(i);
}


let x="E"
switch(x){
    case "e":console.log("hi");
    case "E":console.log("Hello");
    case "a":console.log("bye");break;
    case "A":console.log("Good Bye");
    default:console.log("tata");
    
}

//Ternary Operator

let res=5>6?"S is greater":"6 is greater"
console.log(res);

let a=2000,b=510,c=30

let res1=a>b?(a>c?"a is greater":"c is greater"):(b>c?"b is greater":"c is greater")

console.log(res1);
