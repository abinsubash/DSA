function factorial(number,count=1,res=1){
    res = res*count
    if(count==number){
            return res
        }
        count++

    return factorial(number,count,res)
}
let result = factorial(5)
console.log(result)


// function factorial(number,count=1,res=1){
// let sum  = 1
//   for(let i=1;i<=number;i++){
// sum =sum*i
// }
// return sum
// }
// let result = factorial(5)
// console.log(result)