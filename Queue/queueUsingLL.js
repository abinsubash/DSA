// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.head = null; 
//         this.size = 0; 
//     }
//     push(value) {
//         const newNode = new Node(value);
//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.size++;
//     }
//     pop() {
//         if (this.head === null) {
//             console.log("Stack is empty!");
//             return;
//         }
//         const poppedValue = this.head.value;
//         this.head = this.head.next;
//         this.size--;
//         return poppedValue;
//     }

//     display() {
//         let current = this.head;
//         let res = "";
//         while (current) {
//             res += current.value + " => ";
//             current = current.next;
//         }
//         console.log(res || "Stack is empty!");
//     }
// }

// let stack = new Stack();
// stack.push(44);
// stack.push(2);
// stack.push(8);
// stack.push(11);
// console.log("Popped:", stack.pop());
// stack.display();

// class Stack {
//     constructor(){
//         this.item = []
//     }
//     push(value){
//         this.item.push(value)
//     }
//     pop(){
//         this.item.pop()
//     }
//     peek(){
//         this.item[this.item.length-1]
//     }
//     display(){
//         console.log(this.item)
//     }
    
// }
// let stack = new Stack()
// stack.push(44)
// stack.push(2)
// stack.push(8)
// stack.push(11)
// stack.display()


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
queue.display(); // Display the current queue
console.log('Peek:', queue.peek());