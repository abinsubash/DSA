function sumOfArray(array,count=0,sum=0){
     sum = sum+array[count]
     if(array.length-1==count){
        return sum
     }
     count++
     return sumOfArray(array,count,sum)
}
let res = sumOfArray([1,2,3,4,5,6])
console.log(res)