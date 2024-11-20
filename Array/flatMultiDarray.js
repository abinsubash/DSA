let a =[1,2,[3,[4,5,[6]],7],[8,9,10,11],12]
let newarr =[]
function flat(a){
    for(let i =0;i<a.length;i++){
        if(Array.isArray(a[i])){
            flat(a[i])
        }else{
            newarr.push(a[i])
        }
    }
}
flat(a)
console.log(newarr)