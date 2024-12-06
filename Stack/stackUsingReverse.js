class Stack{
    constructor(){
        this.items=[]
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        return this.item.pop()
    }
    reverse(str){
        let newStack =" "
        for(let i = 0 ; i<str.length;i++){
            this.items.push(str[i])
        }
        for(let i = 0 ; i<str.length;i++){
            newStack +=this.items.pop()
        }
        return newStack
    }
}
let stack = new Stack()
console.log(stack.reverse("hello"))