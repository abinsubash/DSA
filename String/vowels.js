let str = "Abaiouen"
let vowels = "aeiou"
let newstr =str.toLowerCase()
let count =0
for(let i=0;i<newstr.length;i++){
    if(vowels.includes(newstr[i])){
        count++
    }
}
console.log(count)