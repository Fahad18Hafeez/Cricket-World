let [x,y] = [1,5]
console.log(x,y)
let obj = {
    a:1,
    b:2,
    c:3,
}
let {a,b} = obj
console.log(a,b)
function sum(a,b,c,d){
return a+b+c+d
}
let arr=[1,2,4,6]
// let sum=arr
console.log(sum(arr[0],arr[1],arr[2],arr[3]))
console.log(sum(...arr))