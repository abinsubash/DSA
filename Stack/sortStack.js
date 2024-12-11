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
        let tempStack=[]
        while(!this.isEmpty()){
            let temp = this.pop()
            while(tempStack.length>0&&tempStack[tempStack.length-1]<temp){
                this.push(tempStack.pop())
                
            }
        tempStack.push(temp)
        }
        while(tempStack.length>0){
            this.push(tempStack.pop())
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

