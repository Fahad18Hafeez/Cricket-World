let a=6
function f(a){
    let f=1;
    for (let x=1;   x<=a; x++){
        f= f *x
    }
    return f;
}
console.log(f(a)) 
function factorial(a){
    let fac= Array.from(Array(a+1).keys())
    let c= fac.slice(1,).reduce((a,b)=>a*b)
    return c
}
console.log(f(a))