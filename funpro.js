function demo(a,b,task){
// console.log("hello fb");
// console.log(a,b,task);
task(a,b)
}

demo(10,20,function(x,y){
    console.log(x+y);
})
demo(10,20,function d1(x,y){
    console.log(x*y);
})
demo(10,20,(x,y)=>{
    console.log(x-y);
})