let string = "ab1sub-25ash88"

// let array  = string.match(/-?\d+(\.\d+)?/g).map(Number)
// console.log(array)

let array = string.match(/\d+/g).map(Number)
console.log(array)
