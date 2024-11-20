let arr = [1,2,3,4,9,7,8,3,2]
let largest = arr[0]
let smallest = arr[0]
for(let i =0;i<arr.length;i++){
    if(smallest>arr[i]){
        smallest = arr[i]
    }
    if(largest<arr[i]){
        largest=arr[i]
    }
}
console.log(largest,smallest)