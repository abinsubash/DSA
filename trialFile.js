// function bubbleSort(array){
//     let swapped
//     do{
//         swapped = false
//         for(let i=0;i<array.length;i++){
//             if(array[i]<array[i+1]){
//                 [array[i],array[i+1]]=[array[i+1],array[i]]
//                 swapped = true
//             }
//         }
//     }while(swapped)
//     console.log(array)
// }

// bubbleSort([23,33,5,1,66,7,3,4,5])

// function selectionSort(array){
//     for(let i=0;i<array.length-1;i++){
//     let lowest = i
//         for(let j=i+1;j<array.length;j++){
//             if(array[j]<array[lowest]){
//                 lowest  = j
//             }
//         }
//         if(i!=lowest){
//             [array[i],array[lowest]]=[array[lowest],array[i]]
//         }
//     }
//     console.log(array)
// }
// selectionSort([23,44,6,1,88,7,109])

// function insertionSort(array){
//     for(let i=1;i<array.length;i++){
//         let element = array[i]
//         let j = i-1
//         while(j>=0&&array[j]>element){
//             array[j+1]=array[j]
//             j--
//         }
//         array[j+1]=element
//     }
//     console.log(array)
// }

// insertionSort([13,4,5,6,7,90,23,1,6])

// function quicksort(array){
//     if(array.length<2){
//         return array
//     }
//     let pivot = array[array.length-1]
//     let left=[]
//     let right = []
    
//     for(let i=0;i<array.length-1;i++){
//         if(pivot>array[i]){
//             left.push(array[i])
//         }else{
//             right.push(array[i])
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]
// }

// console.log(quicksort([12,3,4,66,3,1,77]))


// function mergeSort(array){
//     if(array.length<2){
//         return array
//     }
//     let mid = Math.floor(array.length/2)
//     let left=array.slice(0,mid) 
//     let right= array.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     let sortArr =[]
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             sortArr.push(left.shift())
//         }else{
//             sortArr.push(right.shift())
//         }
//     }
//     return [...sortArr,...left,...right]
// }


// console.log(mergeSort([2,55,66,1,66,9,10,44]))

// class Stack{
//     constructor(){
//         this.stack=[]
//     }
//     push(value){
//         this.stack.push(value)
//     }
//     pop(){
//       return this.stack.pop()
//     }
//     isEmpty(){
//         return this.stack.length==0
//     }
//     peek(){
//         return this.stack[this.stack.length-1]
//     }
//     display(){
//         console.log(this.stack)
//     }
    // sort(){
    //     let tempStack = new Stack()
    //     while(!this.isEmpty()){
    //         let temp = this.pop()
    //         while(!tempStack.isEmpty()&&tempStack.peek()>temp){
    //             this.push(tempStack.pop())
    //         }
    //         tempStack.push(temp)
    //     }
    //     console.log(tempStack)
    //     while(!tempStack.isEmpty()){
    //         this.push(tempStack.pop())
    //     }
    // }
    // valid(str){
    //     let openBrackets="{[("
    //     let closingBrackets=")]}"
    //     let matchingPairs ={
    //         ")":"(",
    //         "}":"{",
    //         "]":"[",
    //     }
    //     let newStack = new Stack()
    //     // while(!this.isEmpty()){
    //     //     let temp =this.pop()
    //     //     if(closingBrackets.includes(temp)){
    //     //         newStack.push(temp)
    //     //     }else if(openBrackets.includes(temp)){
    //     //         if(newStack.isEmpty()||matchingPairs[newStack.pop()]!==temp){
    //     //             return false
    //     //         }
    //     //     }
    //     // }
    //     for(let char of str){
    //         if(openBrackets.includes(char)){
    //             newStack.push(char)
    //         }else if(closingBrackets.includes(char)){
    //             if(newStack.isEmpty()||matchingPairs[char]!==newStack.pop()){
    //                 return false
    //             }
    //         }
    //     }
    //     return newStack.isEmpty()
    // }
    
    // reverse(str){
    //     let newStack = new Stack()
    //     for(let char of str){
    //         newStack.push(char)
    //     }
    //     let res =""
    //     while(!newStack.isEmpty()){
    //         res+=newStack.pop()
    //         // this.push(newStack.pop())
    //     }
    //     return res
    // }
    
    
    
// }
// const stack = new Stack()
// stack.push(12)
// stack.push(33)
// stack.push(4)
// stack.push(8)
// stack.push(1)
// stack.display()
// stack.sort()
// stack.display()
// let str = "({[{]})"
// for(let i=0;i<str.length;i++){
//     stack.push(str[i])
// }
// stack.display()
// console.log(stack.valid("[{}]"))
// console.log(stack.pop())
// console.log(stack.peek())






// class StackUsingQueue{
//     constructor(){
//         this.q1=[]
//         this.q2=[]
//     }
//     push(value){
//         this.q2.push(value)
//         while(this.q1.length){
//             this.q2.push(this.q1.shift())
//         }
//         [this.q1,this.q2]=[this.q2,this.q1]
//     }
//     pop(){
//         return this.q1.shift()
//     }
//     peek(){
//         return this.q1[0]
//     }
//     display(){
//         console.log(this.q1)
//     }
// }
// const stack = new StackUsingQueue()
// stack.push(23)
// stack.push(6)
// stack.push(7)
// stack.push(22)
// stack.display()
// console.log(stack.peek())
// stack.pop()
// stack.display()

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class Stack{
//     constructor(){
//         this.head=null 
//         this.size=0
//     }
//     push(value){
//         let node = new Node(value)
//         if(this.head==null){
//             this.head=node
//         }else{
//         node.next = this.head
//         this.head = node
//         }
//         this.size++
//     }
// display() {
//         let current = this.head;
//         let res = "";
//         while (current) {
//             res += current.value;
//             if (current.next) res += " => ";
//             current = current.next;
//         }
//         console.log(res);
//     }
// }
// const stack = new Stack()
// stack.push(12)
// stack.push(54)
// stack.push(6)
// stack.display()



// class Queue{
//     constructor(){
//         this.queue = []
//     }
//     enqueue(value){
//         this.queue.push(value)
//     }
//     dequeue(){
//         this.queue.shift()
//     }
//     display(){
//         console.log(this.queue)
//     }
// }
// const queue = new Queue()
// queue.enqueue(12)
// queue.enqueue(2)
// queue.enqueue(6)
// queue.enqueue(77)
// queue.display()


// class QueueUsingStack{
//     constructor(){
//         this.stack1 =[]
//         this.stack2 =[]
//     }
//     enqueue(value){
//         this.stack1.push(value)
//     }
//     dequeue(){
//         if(this.stack2.length==0){
//             while(this.stack1.length>0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
        
//         this.stack2.pop()
        
//     }
//     display(){
//         let copy = [...this.stack2].reverse()
//         let res = [...copy,...this.stack1]
//         console.log(res)
//     }
// }
// const queue = new QueueUsingStack()
// queue.enqueue(12)
// queue.enqueue(133)
// queue.enqueue(17)
// queue.enqueue(188)
// queue.display()
// queue.dequeue()
// queue.display()

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Queue{
//     constructor(){
//         this.front = null
//         this.rear = null
//         this.size = 0
//     }
//     enqueue(value){
//         let node = new Node(value)
//         if(this.front==null){
//             this.front=this.rear =node
//         }else{
//         this.rear.next = node
//         this.rear =node
//         }
//     }
//     dequeue(){
//         this.front = this.front.next
//     }
//     display(){
//         let current = this.front 
//         let res = ""
//         while(current){
//             res+=current.value+"=>"
//             current = current.next
//         }
//         console.log(res)
//     }
// }
// const queue =  new Queue()
// queue.enqueue(12)
// queue.enqueue(14)
// queue.enqueue(55)
// queue.enqueue(188)
// queue.dequeue()
// queue.display()

// class CircularQueue{
//     constructor(capacity){
//         this.queue = []
//         this.rear = -1
//         this.front = -1
//         this.capacity = capacity 
//         this.currentLength = 0
//     }
//     isFull(){
//         return this.currentLength ==this.capacity
//     }
//     enqueue(value){
//         if(this.isFull()){
//             return console.log("Queue is full")
//         }
//         this.rear = (this.rear+1)%this.capacity
//         this.queue[this.rear]=value
//         if(this.front==-1){
//             this.front = this.rear
//         }
//         this.currentLength++
//     }
//     isEmpty(){
//         return this.currentLength==0
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return console.log("Queue is Empty")
//         }
//         let remove = this.queue[this.front]
//         this.queue[this.front] =null
//         this.front = (this.front+1)%this.capacity
//         if(this.isEmpty()){
//             this.front=-1
//             this.rear = -1
//         }
//         this.currentLength--
//         return remove
//     }
//     display(){
//         let str = ""
//         let i = this.front
//         while(i!=this.rear){
//             str+=this.queue[i]+" "
//             i=(i+1)%this.capacity
//         }
//         str+=this.queue[i]
//         console.log(str)
//     }
// }

// const queue = new CircularQueue(5)
// queue.enqueue(23)
// queue.enqueue(3)
// queue.enqueue(55)
// queue.enqueue(4)
// queue.enqueue(7)
// console.log(queue.dequeue())
// queue.display()






























