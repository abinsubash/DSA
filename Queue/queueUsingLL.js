
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Queue{
    constructor(){
        this.rear = null
        this.front = null
        this.size =0
    }
    enqueue(value){
        let node = new Node(value)
     if(this.size ===0){
         this.front =this.rear= node
     }else{
         this.rear.next = node
         this.rear = node
     }
     this.size++
    }
    
    
    dequeue(){
        if(this.size==0){
            return console.log("THis is empty")
        }
         let removedValue = this.front.value;
        this.front = this.front.next
        if(this.front==null){
            this.rear = null
        }
        this.size--
        return removedValue
    }
    peek(){
        return this.front.value
    }
    display(){
        let current = this.front
        let res =""
        while(current){
            res +=current.value+"=>"
            current = current.next
        }
        console.log(res)
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log('Dequeued:', queue.dequeue());
queue.display();
console.log('Peek:', queue.peek());