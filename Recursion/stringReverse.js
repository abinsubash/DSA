function reverse(string,count=string.length-1,value=""){
    value =value+string[count]
    if(count==0){
        return value
    }
    count--
    return reverse(string,count,value)
    
}
let res = reverse("abin")
console.log(res)