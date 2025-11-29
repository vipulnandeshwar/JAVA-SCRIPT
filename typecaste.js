//implicit typecasting
let a=10, b="20";
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(b++);
console.log(b);
console.log(5*"6a");
console.log(10/0);
console.log(10*true);
console.log(10+true);
console.log(-10/0);
console.log(5*true+"5"-8+false);
//5*1+"5"-8+0
//5+"5"-8+0
//"55"-8+0
//47+0

console.log(true*false-2+"50"*true+8);
//1*0-2+"50"*1+8
//0-2+"50"*1+8
//-2+50+8
//-2-58
//56
console.log(2*false*false*false*true+"true"*8+"a"*undefined+5);

//explicit typecasting
let s="20",e=8
console.log(s+e);
console.log(Number(s)+e);
console.log(Number(s)+String(e));
console.log(Boolean(s)+String(e));
console.log(Boolean(50)+5);
console.log(Number("10a")*String(5));
