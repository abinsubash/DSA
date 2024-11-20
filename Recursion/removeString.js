function removeString(string,target,result="",i=0){
    if(i==string.length){
        return result
    }
    if(string[i]!=target){
        result+=string[i]
        console.log(result)
    }
    i++
    return removeString(string,target,result,i)
   }
   