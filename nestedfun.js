function demo(){
    function d1(){
        console.log("hi d1");
    }
    function d2(){
        console.log("hi d2");
    }
    d1()
    d2()    
}
demo()

function demo1(){
    function d1(){
        console.log("hi d1");
    }
    function d2(){
        console.log("hi d2");
    }
    return d1()
}
demo1()

function demo2(){
    function d1(){
        console.log("hi d1");
    }
    function d2(){
        console.log("hi d2");
    }
    return [d1,d2]
}
demo2 ()[0]()
demo2 ()[1]()

var a=10
function demo3(){
    var a=50
    function d1(){
        var a=20
        console.log("hi d1");
        console.log(a);
        console.log(this.a);
        console.log(window.a);
        
    }
function d2(){
    console.log(a);
    console.log("hi d2");
}
d1()
d2()
}
demo3()