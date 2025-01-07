function heapify(arr,n,i){
    let largest = i
    let left = 2*i+1
    let right = 2*i+2
    if(left>0&&arr[left]<arr[i]){
        largest = left
    }
    if(right>0&&arr[right]<arr[i]){
       largest= right
    }
    if(largest!=i){
        [arr[largest],arr[i]]=[arr[i],arr[largest]]
        heapify(arr,n,largest)
    }
}

function heapSort(arr){
    let n = arr.length
    for(let i=Math.floor(n/2);i>=0;i--){
        console.log("hi")
        heapify(arr,n,i)
    }
    for(let i=n-1;i>0;i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
         heapify(arr, i, 0);
    }
}


let arr = [2,3,5,1,66,9]
heapSort(arr)
console.log(arr)
