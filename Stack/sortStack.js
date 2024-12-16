class Stack {
    constructor(){
        this.item=[]
    }
    push(value){
    this.item.push(value)
    }
    pop(){
    return this.item.pop()
    }
    isEmpty(){
        return this.item.length===0
    }
    sort(){
        let newStack =new Stack()
        while(!this.isEmpty()){
            let temp = this.pop()
            while(!newStack.isEmpty()&&newStack.peek()>temp){
                this.push(newStack.pop())
            }
            newStack.push(temp)
        }
        while(!newStack.isEmpty()){
            this.push(newStack.pop())
        }
    }
    display(){
        console.log(this.item)
    }
}
const stack = new Stack()
stack.push(12)
stack.push(2)
stack.push(3)
stack.display()
stack.sort()
stack.display()

