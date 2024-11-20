let arr = [1,2,3,4,9,7,8,3,2]
let target = 10
let result = ''
for(let i=0;i<arr.length;i++){
     let value =target-arr[i]
    if(arr.includes(value)){
    let  index=arr.indexOf(value)
        result+=arr[i]+"and"+arr[index]+","
    }
}
console.log(result)