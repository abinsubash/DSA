//in one loop 
let arr = [1,2,3,4,9,7,8,3,2]
let temp = 0
for(let i=0;i<arr.length/2;i++){
    temp=arr[i]
    arr[i]=arr[(arr.length-1)-i]
    arr[arr.length-1-i]=temp
}
console.log(arr)
