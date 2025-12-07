function * demo() {
    // console.log("hi gen fun");
    yield "hello"
    yield "html"
    yield "tata"
}

let a=demo()
// a.next().value
console.log( a.next().value);//herllo
console.log( a.next().value);//html
console.log( a.next().value);//tata

function * d1(){
    console.log("hello1");
    yield "hello yield"
    console.log("tata");
    yield "bye"
    yield "see you"
    
}

let b=d1()
    console.log( b.next().value);
    console.log( b.next().value);
    console.log( b.next().value);
    console.log( b.next().done);

    //Hoesting

    let s=d2()
    console.log( s.next().value);
    
    function *d2(){
    yield "hello hoesting"
    }

    //prototype
    function * d3(){
    yield "hello prototype"
    }
    let q=d3()
    console.log(q.next().value);
    
    // let r=new q()
    // console.log(Object.getPrototypeOf(r)==d3.prototype);
    

    //Argument object

    function * d4(x,y) {
        console.log(x+y);
    yield x*y
    yield "hello argument"
    yield arguments   
    }

    let w=d4(5,10,50,80)
    console.log( w.next().value);
    console.log( w.next().value);
    console.log( w.next().value);