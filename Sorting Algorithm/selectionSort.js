function selectionSort(array){
    for(let i = 0;i<array.length;i++){
        let lowest = i
        for(let j = i+1;j<array.length;j++){
            if(array[i]>array[j]){
                lowest = j
            }
        }
        if(lowest!==i){
            [array[i],array[lowest]]=[array[lowest],array[i]]
        }
    }
    return array
    
}

let res =selectionSort([20, 12, 10, 15, 2])
console.log(res)