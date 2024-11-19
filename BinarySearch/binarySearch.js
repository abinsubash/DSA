function binarySearch(array,target){
    let left = 0
    let right = array.length-1
    while(left <= right){
       let middle = Math.floor((left + right)/2)
        if(array[middle]==target){
            return middle
        }else if(target< array[middle]){
            right=middle-1
        }else{
            left=middle+1
        }
    }
}

let res = binarySearch( [1,2,3,4,5,6,7,8],2)
console.log(res)