function heapSort(arr){
    let n = arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
     heapify(arr,n,i)   
    }
    for(let i=n-1;i>0;i--){
        [arr[i],arr[0]]=[arr[0],arr[i]]
        heapify(arr,i,0)
    }
}
function heapify(arr,n,i){
    let left = 2*i+1
    let right = 2*i+2
    let smallest = i
    if(left<n&&arr[left]>arr[smallest]){
        smallest = left
    }
    if(right<n&&arr[right]>arr[smallest]){
        smallest = right
    }
    if(smallest!=i){
        [arr[smallest],arr[i]]=[arr[i],arr[smallest]]
        heapify(arr,n,smallest)
    }
    
}


let arr = [1,44,6,77,2,4,99]
heapSort(arr)
console.log(arr)
