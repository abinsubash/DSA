// function febonacci(number,index=2,arr=[0,1]){
//     if(arr.length>number){
//         return arr
//     }
//     arr[index]=arr[index-1]+arr[index-2]
//     index++
//     return febonacci(number,index,arr)
// }

// let res = febonacci(12)

// console.log(res)
function febnoacci(number,array=[0,1]){
    if(array.length>number){
        return array
    }
    array.push(array[array.length-2]+array[array.length-1])
    return febnoacci(number,array)
}

console.log(febnoacci(12))