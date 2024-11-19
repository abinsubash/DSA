function palindrome(string,value1,value2,count=0){
    value2=string[(string.length-1)-count]
    value1=string[count]
    if(value1!=value2){
        return false
    }
    if(count==(string.length-1)/2){
        return true
    }
    count++
    return palindrome(string,value1,value2,count)
}
let  result = palindrome("abina")
console.log(result)