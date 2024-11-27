// Demonstrate bubble sort on the array [5, 3, 8, 4, 2]. Show each pass.

function bubbleSort(array){
    let swapped
    do{
        swapped = false
        
        for(let i = 0 ;i<array.length-1;i++){
            if(array[i]>array[i+1]){
                [array[i],array[i+1]]=[array[i+1],array[i]]
                swapped =true
            }
            console.log(array)
            
        }
    }while(swapped)
    return array
}
let res = bubbleSort([5, 3, 8, 4, 2])
console.log("This si res",res)