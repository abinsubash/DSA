//Rotate an array to the right by k steps, where k is given.

let arr = [1,2,3,4,9,7,8,3,2]
let k = 2
let newarr = arr.splice(0,k)
let res= [...arr, ...newarr];
console.log(res)
