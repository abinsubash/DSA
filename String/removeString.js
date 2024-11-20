let string = "abin"
let result=""
for(let i = 0;i<string.length;i++){
    if(string[i]=="a"){
        result = string.slice(0,i)+string.slice(i+1)
        break
    }
}
console.log(result)