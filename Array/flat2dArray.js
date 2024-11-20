let a =[1,2,[3,4],[5,6,7,8],7]
let newarr =[]
for(let i = 0;i<a.length;i++){
    if(a[i].length){
    for(let j = 0;j<a[i].length;j++){
        newarr.push(a[i][j])
    }
    }else{
        newarr.push(a[i])
    }
}

console.log(newarr)