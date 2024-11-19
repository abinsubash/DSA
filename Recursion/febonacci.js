function febonacci(number,index=2,arr=[0,1]){
    if(arr.length>number){
        return arr
    }
    arr[index]=arr[index-1]+arr[index-2]
    index++
    return febonacci(number,index,arr)
}

let res = febonacci(12)

console.log(res)