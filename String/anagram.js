let str1="abin" ,str2 ="bani"
if(str1.length!==str2.length){
    console.log('not anagram')
}else{
    let newstr1 = str1.split('').sort().join()
    let newstr2 = str2.split('').sort().join()
    if(newstr1==newstr2){
        console.log("this is anagram")
    }else{
        console.log("this is not anagram")
    }
}