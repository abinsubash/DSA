class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;   
        this.front = 0;  
    }

    enqueue(element) {
        this.items[this.rear] = element; 
        this.rear++;                     
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front]; 
        delete this.items[this.front];       
        this.front++;                        
        return item;                       
    }

    getSize() {
        return this.rear - this.front; 
    }

    isEmpty() {
        return this.getSize() === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.front]; 
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue();
queue.enqueue(12);
queue.enqueue(44);
queue.enqueue(55);
queue.enqueue(3);
queue.print(); 
console.log(queue.getSize()); 
console.log(queue.dequeue()); 
console.log(queue.peek());    
queue.print();               
