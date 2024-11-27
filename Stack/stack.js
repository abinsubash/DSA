class Stack{
    constructor(){
        this.items=[]
    }

    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return console.log("NO Element In stack")
        }
        this.items.pop()
    }
    isEmpty(){
        return this.items.length==0
    }
    peek(){
        if(this.isEmpty()){
            return console.log("Stack is Empty")
        }
        return this.items[this.items.length-1]
    }
    print(){
        return console.log(this.items)
    }
}
const stack = new Stack
console.log(stack.isEmpty())
stack.push(12)
stack.push(33)
stack.push(54)
stack.push(7)
stack.pop()
console.log(stack.peek())
stack.print()
