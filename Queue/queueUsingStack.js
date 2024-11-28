class QueueUsingStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(value){
        this.stack1.push(value)
    }
    dequeue(){
        if(this.stack2.length==0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    display(){
        let stack2Copy = [...this.stack2].reverse();
        let res = [...stack2Copy,...this.stack1]
        console.log(res)
    }
    
}

const queue = new QueueUsingStack()
queue.enqueue(12)
queue.enqueue(33)
queue.enqueue(44)
queue.display()
queue.enqueue(55)
queue.dequeue()
queue.display()
queue.enqueue(66)
queue.enqueue(77)
queue.display()
queue.dequeue()
queue.display()

