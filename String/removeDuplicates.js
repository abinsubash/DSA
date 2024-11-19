let str = "abinsubash"
let newchar = ""
for(let i=0;i<str.length;i++){
    if(newchar.includes(str[i])){
        continue;
    }else{
        newchar+=str[i]
    }
}
console.log(newchar)