function insertion(arr){
    for(let i =1;i<arr.length;i++){
        let number = arr[i]
        let j =i-1
        while(j>=0&&arr[j]>number){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=number
    }
    return arr
}
let res = insertion([1,2,6,4,3,2,7,77,53,22])
console.log(res)