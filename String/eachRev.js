let str = "abin subash"
let res =""
let temp=""
for(let i=0;i<str.length;i++){
    let char = str[i]
    if(char!=" "){
        temp=char+temp
    }else{
        res +=temp
        temp=" "
    }
}
res+=" "+temp
console.log(res)