class Stack {
    constructor(){
        this.stack =[]
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
       return this.stack.pop()
    }
    display(){
        console.log(this.stack)
    }
    arrayUsingStack(array){
        let newStack = new Stack()
        while(array.length){
        newStack.push(array.pop())
        }
        console.log(newStack.stack)
    }
    
    
}

const stack = new Stack()
stack.push(12)
stack.push(3)
stack.push(4)
stack.display()
stack.arrayUsingStack([12,223,44,5,11])