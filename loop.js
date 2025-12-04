let str1 = ""
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        str1 += "* ";
    }
    str1 += "\n";
}
console.log(str1);

let str2 = ""
for(let i=1; i<=5; i++){
    for(let j=1; j<=5-i; j++){
        str2 += "  ";
    }
    for(let k=1; k<=i; k++){
        str2 += "* ";
    }
    str2 += "\n"
}
console.log(str2);

let str3 = ""
for(let i=1; i<=5; i++){
    for(let j=1; j<=5-i; j++){
        str3 += "  ";
    }
    for(let k=1; k<=2*i-1; k++){
        str3 += "* ";
    }
    str3 += "\n";
}
console.log(str3);



let str4="", space1=3,star=1;
for(let i=1;i<=7;i++){
    for(let j=1;j<=space1;j++){
        str4+=""
    }
    for(let k=1;k<=star;k++){
        str4+="*"
    }
    str4+="\n"
    if(i<4){
        space1--
        star+=2
    }
    else{
        space1++;
        star-=2;
    }
}

//Number Pattern
//12345
//12345
//12345
//12345
//12345

let num=""
for(let i=1;i<=5;i++)