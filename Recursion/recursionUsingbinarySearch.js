function binarySearch (array,target,left=0,right=array.length-1){
    let middle = Math.floor((left+right)/2)
    if(left>right){
        return -1
    }
    if(array[middle] ==target){
        return middle
    }
    if(target<array[right]){
        return binarySearch(array,target,left,middle-1)
    }else {
        return binarySearch(array.target.middle+1,right)
    }
}


let res = binarySearch([1,2,3,4,5,6,7,8],4)
console.log(res)