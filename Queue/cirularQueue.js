class circularQueue{
    constructor(capacity){
        this.item =new Array(capacity)
        this.capacity = capacity
        this.rear = -1
        this.front = -1
        this.currentLength=0
    }

    isFull(){
        return this.capacity===this.currentLength
    }
    isEmpty(){
        return this.currentLength==0
    }
    enqueue(element){
    if(!this.isFull()){
        this.rear = (this.rear+1)%this.capacity
        this.item[this.rear]=element
        this.currentLength++
        if(this.front==-1){
            this.front = this.rear
        }
    }
    }
    dequeue(){
        // let removeItem = this.item[this.front]
        this.item[this.front]=null
        this.front = (this.front+1)%this.capacity
        this.currentLength--
        if(this.isEmpty()){
            this.rear = -1
            this.front = -1
        }
    }
    peek(){
          return this.item[this.front]
    }
    
    display(){
        let str = ' '
        let i = this.front
        while(i != this.rear){
            str += this.item[i]+" "
            i=(i+1)%this.capacity
        }
        str +=this.item[i]
        console.log(str)
    }
}

let queue = new circularQueue(5)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

queue.display()
queue.dequeue()

queue.display()
queue.enqueue(1)
queue.display()





