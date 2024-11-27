let arr = [1,2,3,33,2,21,4,66,4,55]
function bubbleSort(arr){
    let swapped
    do{
        swapped = false
    for(let i =0;i<arr.length-1;i++){
    if(arr[i]>arr[i+1]){
        let temp = arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
        swapped = true
    }
    }
    }while(swapped)
        return arr
}

console.log(bubbleSort(arr))
