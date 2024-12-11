class Stack{
    constructor(){
        this.items=[]
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        return this.items.pop()
    }
    reverseStr(str){
        let newStack= new Stack()
        for(let char of str){
            newStack.push(char)
        }
        let res = ""
        while(!newStack.isEmpty()){
            res+=newStack.pop()
        }
        return res
    }
}
let stack = new Stack()
console.log(stack.reverse("hello"))