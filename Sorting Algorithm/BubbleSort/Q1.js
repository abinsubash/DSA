// Write a function to sort an array using bubble sort and count the number of swaps performed.

function bubbleSort(array){
    let swapped
    let count = 0
    do{
        swapped = false
        
        for(let i = 0 ;i<array.length-1;i++){
            if(array[i]>array[i+1]){
                [array[i],array[i+1]]=[array[i+1],array[i]]
                count++
                swapped =true
            }
            
        }
    }while(swapped)
    return count
}
let res = bubbleSort([2,45,3,11,6,4,1])
console.log(res)