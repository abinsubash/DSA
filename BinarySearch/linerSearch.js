function linerSearch(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]==target){
            return i
        }
    }
}

const res = linerSearch([1,9,5,3,2,7,0,8],0)
console.log(res)