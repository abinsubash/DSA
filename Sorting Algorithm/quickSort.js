function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivet = arr[arr.length-1]
    let left = []
    let right = []
    for(let i =0;i<arr.length-1;i++){
        if(arr[i]<pivet){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...left,pivet,...right]
}

let res = quickSort([1,2,5,55,3,27,77,45,8])
console.log(res)