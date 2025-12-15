// creating table by using java script
let b=document.body

let t1=document.createElement("table")
b.append(t1)
// console.log(t1);
// console.log(b);

//  # creating table row
let tr1=document.createElement("tr")
t1.append(tr1)

let tr2=document.createElement("tr")
t1.append(tr2)

let tr3=document.createElement("tr")
t1.append(tr3)

let tr4=document.createElement("tr")
t1.append(tr4)

// console.log(t1);

//  creating table column 
let td1=document.createElement("td")
tr1.append(td1)

let td2=document.createElement("td")
tr1.append(td2)

let td3=document.createElement("td")
tr2.append(td3)

let td4=document.createElement("td")
tr2.append(td4)

let td5=document.createElement("td")
tr3.append(td5)

let td6=document.createElement("td")
tr3.append(td6)

let td7=document.createElement("td")
tr4.append(td7)

let td8=document.createElement("td")
tr4.append(td8)
console.log(t1);

//   set attribute of that property

t1.setAttribute("border","2px solid")
t1.setAttribute("height","800px ")
t1.setAttribute("width","400px")

// use style tag to do 
td1.style.backgroundColor='orange'
td2.style.backgroundColor='lightpink'
td3.style.backgroundColor='lightblue'
td4.style.backgroundColor='lightgreen'
td5.style.backgroundColor='Yellow'
td6.style.backgroundColor='verylightpink'
td7.style.backgroundColor='skyblue'
td8.style.backgroundColor='hotpink'


// inside table 1 st box 

let tt1=document.createElement("table")
td1.append(tt1)
tt1.setAttribute("border","2px solid")
tt1.setAttribute("height","200px ")
tt1.setAttribute("width","200px")
tt1.setAttribute("cellspacing","2px")
tt1.setAttribute("cellpadding","2px")
console.log(b);
let ttr1=document.createElement("tr")
tt1.append(ttr1)
let ttr2=document.createElement("tr")
tt1.append(ttr2)
let ttr3=document.createElement("tr")
tt1.append(ttr3)
let ttr4=document.createElement("tr")
tt1.append(ttr4)

//  creating td of first one
let TDt1=document.createElement("td")
ttr1.append(TDt1)
let  TDt2=document.createElement("td")
ttr1.append(TDt2)
let TDt9=document.createElement("td")
ttr1.append(TDt9)
let  TDt10=document.createElement("td")
ttr1.append(TDt10)
let  TDt3=document.createElement("td")
ttr2.append(TDt3)
let  TDt4=document.createElement("td")
ttr2.append(TDt4)
let  TDt11=document.createElement("td")
ttr2.append(TDt11)
let  TDt12=document.createElement("td")
ttr2.append(TDt12)
let  TDt5=document.createElement("td")
ttr3.append(TDt5)
let TDt6=document.createElement("td")
ttr3.append(TDt6)
let  TDt13=document.createElement("td")
ttr3.append(TDt13)
let TDt14=document.createElement("td")
ttr3.append(TDt14)
let TDt7=document.createElement("td")
ttr4.append(TDt7)
let TDt8=document.createElement("td")
ttr4.append(TDt8)
let TDt15=document.createElement("td")
ttr4.append(TDt15)
let TDt16=document.createElement("td")
ttr4.append(TDt16)

//  rowspan and colsapn 
TDt1.setAttribute("colspan","4")
TDt3.setAttribute("rowspan","2")
TDt11.setAttribute("rowspan","2")
TDt7.setAttribute("colspan","2")

//  remove td of seventh
// .remove()

TDt2.remove()
TDt9.remove()
TDt10.remove()
TDt8.remove()
TDt5.remove()
TDt14.remove()



//   second 2 box
let A=document.createElement("table")
td2.append(A)
A.setAttribute("border","2px solid")
A.setAttribute("height","200px ")
A.setAttribute("width","200px")
A.setAttribute("cellspacing","2px")
A.setAttribute("cellpadding","2px")
console.log(b);
let A21=document.createElement("tr")
A.append(A21)
let A22=document.createElement("tr")
A.append(A22)
let A23=document.createElement("tr")
A.append(A23)
let A24=document.createElement("tr")
A.append(A24)
let A25=document.createElement("tr")
A.append(A25)

//  creating td of first one
let A_S1=document.createElement("td")
A21.append(A_S1)
let  A_S2=document.createElement("td")
A21.append(A_S2)
let A_S9=document.createElement("td")
A21.append(A_S9)
let  A_S10=document.createElement("td")
A21.append(A_S10)
let  A_S3=document.createElement("td")
A22.append(A_S3)
let  A_S4=document.createElement("td")
A22.append(A_S4)
let  A_S11=document.createElement("td")
A22.append(A_S11)
let  A_S12=document.createElement("td")
A22.append(A_S12)
let  A_S5=document.createElement("td")
A23.append(A_S5)
let A_S6=document.createElement("td")
A23.append(A_S6)
let  A_S13=document.createElement("td")
A23.append(A_S13)
let  A_S14=document.createElement("td")
A23.append(A_S14)
let A_S7=document.createElement("td")
A24.append(A_S7)
let A_S8=document.createElement("td")
A24.append(A_S8)
let A_S15=document.createElement("td")
A24.append(A_S15)
let A_S16=document.createElement("td")
A24.append(A_S16)
let A_S17=document.createElement("td")
A25.append(A_S17)
let A_S18=document.createElement("td")
A25.append(A_S18)
let A_S19=document.createElement("td")
A25.append(A_S19)
let A_S20=document.createElement("td")
A25.append(A_S20)

//  rowspan and colsapn 
A_S1.setAttribute("rowspan","2")
A_S9.setAttribute("rowspan","2")
A_S5.setAttribute("colspan","4")
A_S7.setAttribute("rowspan","2")
A_S15.setAttribute("rowspan","2")

//  remove td of seventh
A_S3.remove()
A_S11.remove()
A_S6.remove()
A_S13.remove()
A_S14.remove()
A_S17.remove()
A_S19.remove()


//   third box
let T=document.createElement("table")
td3.append(T)
T.setAttribute("border","2px solid")
T.setAttribute("height","200px ")
T.setAttribute("width","200px")
T.setAttribute("cellspacing","2px")
T.setAttribute("cellpadding","2px")
let Ttr1=document.createElement("tr")
T.append(Ttr1)
let Ttr2=document.createElement("tr")
T.append(Ttr2)
let Ttr3=document.createElement("tr")
T.append(Ttr3)
let Ttr4=document.createElement("tr")
T.append(Ttr4)

//  td of third box
let T_d1=document.createElement("td")
Ttr1.append(T_d1)
let  T_d2=document.createElement("td")
Ttr1.append(T_d2)
let T_d9=document.createElement("td")
Ttr1.append(T_d9)
let  T_d10=document.createElement("td")
Ttr1.append(T_d10)
let  T_d3=document.createElement("td")
Ttr2.append(T_d3)
let  T_d4=document.createElement("td")
Ttr2.append(T_d4)
let  T_d11=document.createElement("td")
Ttr2.append(T_d11)
let  T_d12=document.createElement("td")
Ttr2.append(T_d12)
let  T_d5=document.createElement("td")
Ttr3.append(T_d5)
let T_d6=document.createElement("td")
Ttr3.append(T_d6)
let  T_d13=document.createElement("td")
Ttr3.append(T_d13)
let  T_d14=document.createElement("td")
Ttr3.append(T_d14)
let T_d7=document.createElement("td")
Ttr4.append(T_d7)
let T_d8=document.createElement("td")
Ttr4.append(T_d8)
let T_d15=document.createElement("td")
Ttr4.append(T_d15)
let T_d16=document.createElement("td")
Ttr4.append(T_d16)

//  rowspan and colsapn 
T_d4.setAttribute("rowspan","2")
T_d4.setAttribute("colspan","2")

//  remove td of seventh
T_d11.remove()
T_d6.remove()
T_d13.remove()


// fourth box of td 
let F=document.createElement("table")
td4.append(F)
F.setAttribute("border","2px solid")
F.setAttribute("height","200px ")
F.setAttribute("width","200px")
F.setAttribute("cellspacing","2px")
F.setAttribute("cellpadding","2px")

// row of fourth
let Ftr1=document.createElement("tr")
F.append(Ftr1)
let Ftr2=document.createElement("tr")
F.append(Ftr2)
let Ftr3=document.createElement("tr")
F.append(Ftr3)
let Ftr4=document.createElement("tr")
F.append(Ftr4)
// td of fourth 

let F_d1=document.createElement("td")
Ftr1.append(F_d1)
let  F_d2=document.createElement("td")
Ftr1.append(F_d2)
let F_d9=document.createElement("td")
Ftr1.append(F_d9)
let  F_d10=document.createElement("td")
Ftr1.append(F_d10)
let  F_d3=document.createElement("td")
Ftr2.append(F_d3)
let  F_d4=document.createElement("td")
Ftr2.append(F_d4)
let  F_d11=document.createElement("td")
Ftr2.append(F_d11)
let  F_d12=document.createElement("td")
Ftr2.append(F_d12)
let  F_d5=document.createElement("td")
Ftr3.append(F_d5)
let F_d6=document.createElement("td")
Ftr3.append(F_d6)
let  F_d13=document.createElement("td")
Ftr3.append(F_d13)
let  F_d14=document.createElement("td")
Ftr3.append(F_d14)
let F_d7=document.createElement("td")
Ftr4.append(F_d7)
let F_d8=document.createElement("td")
Ftr4.append(F_d8)
let F_d15=document.createElement("td")
Ftr4.append(F_d15)
let F_d16=document.createElement("td")
Ftr4.append(F_d16)

//  rowspan and colsapn 
F_d1.setAttribute("rowspan","4")
F_d9.setAttribute("rowspan","4")

//  remove td of seventh
F_d3.remove()
F_d11.remove()
F_d5.remove()
F_d13.remove()
F_d7.remove()
F_d15.remove()


//  fifth table
let Fi=document.createElement("table")
td5.append(Fi)
Fi.setAttribute("border","2px solid")
Fi.setAttribute("height","200px ")
Fi.setAttribute("width","200px")
Fi.setAttribute("cellspacing","2px")
Fi.setAttribute("cellpadding","2px")
// row of table fith
let Fitr1=document.createElement("tr")
Fi.append(Fitr1)
let Fitr2=document.createElement("tr")
Fi.append(Fitr2)
let Fitr3=document.createElement("tr")
Fi.append(Fitr3)

//  td of that fifth
let Fi_d1=document.createElement("td")
Fitr1.append(Fi_d1)
let  Fi_d2=document.createElement("td")
Fitr1.append(Fi_d2)
let Fi_d3=document.createElement("td")
Fitr1.append(Fi_d3)
let Fi_d4=document.createElement("td")
Fitr2.append(Fi_d4)
let  Fi_d5=document.createElement("td")
Fitr2.append(Fi_d5)
let Fi_d6=document.createElement("td")
Fitr2.append(Fi_d6)
let Fi_d7=document.createElement("td")
Fitr3.append(Fi_d7)
let  Fi_d8=document.createElement("td")
Fitr3.append(Fi_d8)
let Fi_d9=document.createElement("td")
Fitr3.append(Fi_d9)

//  sixth  table
let si=document.createElement("table")
td6.append(si)
si.setAttribute("border","2px solid")
si.setAttribute("height","200px ")
si.setAttribute("width","200px")
si.setAttribute("cellspacing","2px")
si.setAttribute("cellpadding","2px")

// row of table
let sitr1=document.createElement("tr")
si.append(sitr1)
let sitr2=document.createElement("tr")
si.append(sitr2)
let sitr3=document.createElement("tr")
si.append(sitr3)

// td of sixth
let si_d1=document.createElement("td")
sitr1.append(si_d1)
let  si_d2=document.createElement("td")
sitr1.append(si_d2)
let si_d3=document.createElement("td")
sitr1.append(si_d3)
let si_d4=document.createElement("td")
sitr2.append(si_d4)
let  si_d5=document.createElement("td")
sitr2.append(si_d5)
let si_d6=document.createElement("td")
sitr2.append(si_d6)
let si_d7=document.createElement("td")
sitr3.append(si_d7)
let  si_d8=document.createElement("td")
sitr3.append(si_d8)
let si_d9=document.createElement("td")
sitr3.append(si_d9)
//  rowspan and colsapn 
si_d2.setAttribute("colspan","2")
si_d1.setAttribute("rowspan","3")
si_d6.setAttribute("rowspan","2")
//  remove td of seventh
si_d4.remove()
si_d7.remove()
si_d3.remove()
si_d9.remove()


//  seventh 
let se=document.createElement("table")
td7.append(se)
se.setAttribute("border","2px solid")
se.setAttribute("height","200px ")
se.setAttribute("width","200px")
se.setAttribute("cellspacing","2px")
se.setAttribute("cellpadding","2px")
// row of table
let setr1=document.createElement("tr")
se.append(setr1)
let setr2=document.createElement("tr")
se.append(setr2)
let setr3=document.createElement("tr")
se.append(setr3)

// td of seventh 
let se_d1=document.createElement("td")
setr1.append(se_d1)
let  se_d2=document.createElement("td")
setr1.append(se_d2)
let se_d3=document.createElement("td")
setr1.append(se_d3)
let se_d4=document.createElement("td")
setr2.append(se_d4)
let  se_d5=document.createElement("td")
setr2.append(se_d5)
let se_d6=document.createElement("td")
setr2.append(se_d6)
let se_d7=document.createElement("td")
setr3.append(se_d7)
let  se_d8=document.createElement("td")
setr3.append(se_d8)
let se_d9=document.createElement("td")
setr3.append(se_d9)

//  rowspan and colsapn 
se_d2.setAttribute("colspan","2")
se_d2.setAttribute("rowspan","2")
//  remove td of seventh
se_d3.remove()
se_d5.remove()
se_d6.remove()

// eigth of table
let E=document.createElement("table")
td8.append(E)
E.setAttribute("border","2px solid")
E.setAttribute("height","200px ")
E.setAttribute("width","200px")
E.setAttribute("cellspacing","2px")
E.setAttribute("cellpadding","2px")
// row of table
let Etr1=document.createElement("tr")
E.append(Etr1)
let Etr2=document.createElement("tr")
E.append(Etr2)
let Etr3=document.createElement("tr")
E.append(Etr3)
// eigth of td
let E_d1=document.createElement("td")
Etr1.append(E_d1)
let  E_d2=document.createElement("td")
Etr1.append(E_d2)
let E_d3=document.createElement("td")
Etr1.append(E_d3)
let E_d4=document.createElement("td")
Etr2.append(E_d4)
let  E_d5=document.createElement("td")
Etr2.append(E_d5)
let E_d6=document.createElement("td")
Etr2.append(E_d6)
let E_d7=document.createElement("td")
Etr3.append(E_d7)
let  E_d8=document.createElement("td")
Etr3.append(E_d8)
let E_d9=document.createElement("td")
Etr3.append(E_d9)

//  rowspan and colsapn  of eight
E_d7.setAttribute("colspan","3")
E_d2.setAttribute("rowspan","2")
//  remove td of eigth
E_d5.remove()
E_d8.remove()
E_d9.remove()