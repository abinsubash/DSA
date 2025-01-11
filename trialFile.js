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


// class Graph{
//     constructor(){
//         this.list={}
//     }
//     insertVertex(vertex){
//         if(!this.list[vertex]){
//             this.list[vertex]=new Set()
//         }
//     }
//     insertEdges(vertex1,vertex2){
//         if(!this.list[vertex1]){
//             this.insertVertex(vertex1)
//         }
//         if(!this.list[vertex2]){
//             this.insertVertex(vertex2)
//         }
//         this.list[vertex1].add(vertex2)
//         this.list[vertex2].add(vertex1)
//     }
//     deleteVertex(vertex){
//         for(let val of this.list[vertex]){
//             this.deleteEdges(vertex,val)
//         }
//         delete this.list[vertex]
//     }
//     deleteEdges(vertex1,vertex2){
//         this.list[vertex1].delete(vertex2)
//         this.list[vertex2].delete(vertex1)
//     }
//     print(){
//         for(let value in this.list){
//             console.log(value,"=>",[...this.list[value]])
//         }
//     }
    // BFS(start){
    //     let queue = [start]
    //     let visited = new Set()
    //     visited.add(start)
    //     while(queue.length){
    //         let vertex = queue.shift()
    //         console.log(vertex)
    //         for(let value of this.list[vertex]){
    //             if(!visited.has(value)){
    //                 visited.add(value)
    //                 queue.push(value)
    //             }
    //         }
    //     }
    // }
    // DFS(start,visited = new Set()){
    //     visited.add(start)
    //     console.log(start)
    //     for(let char of this.list[start]){
    //         if(!visited.has(char)){
    //             this.DFS(char,visited)
    //         }
    //     }
    // }
    // hasEdges(vertex1,vertex2){
    //     return this.list[vertex1].has(vertex2)&&this.list[vertex2].has(vertex1)
    // }
    // hasCycle(start,visited=new Set(),parent=null){
    //     visited.add(start)
    //     for(let char of this.list[start]){
    //         if(!visited.has(char)){
    //             if(this.hasCycle(char,visited,start)){
    //                 return true
    //             }
    //         }else if(parent!==char){
    //             return true
    //         }
    //     }
    //     return false
    // }
    // findShortestPath(start,end){
    //     if(!this.list[start]||!this.list[end]){
    //         return null
    //     }
    //     let queue = [[start]]
    //     let visited = new Set()
    //     visited.add(start)
    //     while(queue.length){
    //         let path = queue.shift()
    //         let vertex = path[path.length-1]
    //         if(vertex==end){
    //             return path
    //         }
    //         for(let val of this.list[vertex]){
    //             if(!visited.has(val)){
    //                 visited.add(val)
    //                 let newPath= [...path,val]
    //                 queue.push(newPath)
    //             }
    //         }
    //     }
    //     return null
    // }
//     findShortest(start,end){
//         if(!this.list[start]||!this.list[end]){
//             return null
//         }
//         let queue = [[start]]
//         let visited = new Set()
//         visited.add(start)
//         while(queue.length){
//             let path = queue.shift()
//             let vertex = path[path.length-1]
//             if(vertex==end){
//                 return path
//             }
//             for(let el of this.list[vertex]){
//                 if(!visited.has(el)){
//                     visited.add(el)
//                     let newPath = [...path,el]
//                     queue.push(newPath)
//                 }
//             }
//         }
//         return null
//     }
//     hasCycle(start,visited=new Set(),parent = null){
//         visited.add(start)

//         for(let el of this.list[start]){
//             if(!visited.has(el)){
//                 if(this.hasCycle(el,visited,start)){
//                     return true
//                 }
//             }else if(parent !=el){
//                 return true
//             }
//         }
//         return false
//     }
//     BFS(start){
//         let queue = [start]
//         let visited = new Set()
//         visited.add(start)
//         while(queue.length){
//             let vertex = queue.shift()
//             console.log(vertex)
//             for(let el of this.list[vertex]){
//                 if(!visited.has(el)){
//                     visited.add(el)
//                     queue.push(el)
//                 }
//             }
//         }
//     }
//     DFS(start,visited=new Set()){
//         visited.add(start)
//         console.log(start)
//         for(let char of this.list[start]){
//             if(!visited.has(char)){
//                 this.DFS(char,visited)
//             }
//         }
//     }
// }

// const graph = new Graph()
// graph.insertVertex("A")
// graph.insertVertex("B")
// graph.insertVertex("C")
// graph.insertVertex("D")
// graph.insertVertex("E")
// graph.insertVertex("F")
// graph.insertEdges("A","E")
// graph.insertEdges("E","D")
// graph.insertEdges("D","C")
// graph.insertEdges("C","F")
// graph.insertEdges("C","B")
// graph.insertEdges("B","A")
// console.log(graph.hasEdges("A","E"))
// console.log(graph.hasCycle("A"))
// console.log(graph.findShortest("A","D"))
// graph.BFS("A")
// graph.DFS("A")
// graph.deleteVertex("A")
// graph.print()

// class Node{
//     constructor(){
//         this.children= {}
//         this.endWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new Node()
//     }
//     insert(word){
//         let root = this.root
//         for(let char of word){
//             if(!root.children[char]){
//                 root.children[char]=new Node()
//             }
//             root=root.children[char]
//         }
//         root.endWord = true
//     }
    // print(root= this.root,word=""){
    //     if(root.endWord){
    //         console.log(word)
    //     }
    //     for(let char in root.children){
    //         if(root.children[char]){
    //             this.print(root.children[char],word+char)
    //         }
    //     }
    // }
    // print(root=this.root,word=""){
    //     if(root.endWord){
    //         console.log(word)
    //     }
    //     for(let char in root.children){
    //         if(root.children[char]){
    //         this.print(root.children[char],word+char)
    //         }
    //     }
    // }
    // search(word){
    //     let root = this.root
    //     for(let char of word){
    //         if(!root.children[char]){
    //             return false
    //         }
    //         root= root.children[char]
    //     }
    //     return root.endWord
    // }
    // autoComplete(prifix){
    //     let root = this.root
    //     let res = []
    //     for(let char of prifix){
    //         if(!root.children[char]){
    //             return []
    //         }
    //         root = root.children[char]
    //     }
    //     function traverse(root,prifix){
    //         if(root.endWord){
    //             res.push(prifix)
    //         }
    //         for(let char in root.children){
    //             traverse(root.children[char],prifix+char)
    //         }
    //     }
    //     traverse(root,prifix)
    //     return res
    // }
    // autoComplete(prifix){
    //     let root =this.root 
    //     for(let char of prifix){
    //         if(!root.children[char]){
    //             return []
    //         }
    //         root = root.children[char]
    //     }
    //     let res = []
    //     function traverse(root,prifix){
    //         if(root.endWord){
    //             res.push(prifix)
    //         }
    //         for(let el in root.children){
    //             traverse(root.children[el],prifix+el)
    //         }
    //     }
    //     traverse(root,prifix)
    // return res
    // }
    
    // delete(word){
    //     let root = this.root
    //     for(let char of word){
    //         if(!root.children[char]){
    //             return false
    //         }
    //         root = root.children[char]
    //     }
    //     if(root.endWord){
    //         root.endWord = false
    //         return true
    //     }
    // }
    // delete(word){
    //     function deleteFn(word,root,index){
    //         if(index==word.length){
    //             if(!root.endWord){
    //                 return false
    //             }
    //             root.endWord = false
    //             return Object.keys(root.children).length==0
    //         }
    //         let el= word[index]
    //         if(!root.children[el]){
    //             return false
    //         }
    //         let res = deleteFn(word,root.children[el],index+1)
    //         if(res){
    //             delete root.children[el]
    //             return Object.keys(root.children).length&&!root.endWord
    //         }
    //         return false
    //     }
    //     deleteFn(word,this.root,0)
    // }
    
    // delete(word){
    //     function deleteFn(root,word,index){
    //         if(index==word.length){
    //             if(!root.endWord){
    //                 return false
    //             }
    //             root.endWord= false
    //             return Object.keys(root.children).length==0
    //         }
    //         let el = word[index]
    //         if(!root.children[el]){
    //             return false
    //         }
    //         let res = deleteFn(root.children[el],word,index+1)
    //         if(res){
    //             delete root.children[el]
    //             return Object.keys(root.children).length==0&&!root.endWord
    //         }
    //         return false
    //     }
    //     let root = this.root
    //     deleteFn(root,word,0)
    // }
    
    
    
    // longestCommon(word){
    //     let root = this.root
    //     let prifix = ""
    //     for(let char of word){
    //         if(root.children[char]){
    //             prifix+=char
    //             root = root.children[char]
    //             if(root.endWord){
    //                 break
    //             }
    //         }else{
    //             break
    //         }
    //     }
    //     return prifix
    // }
    // longestPrifix(){
    //     let longest = ""
    //     function traverse(root,word=""){
    //         if(longest.length<word.length){
    //             longest = word
    //         }
    //         for(let el in root.children){
    //             if(root.children[el]){
    //                 traverse(root.children[el],word+el)
    //             }
    //         }
    //     }
    //     let root = this.root
    //     traverse(root)
    //     return longest
    // }
    
    // longestCommon(prifix){
    //     let root = this.root 
    //     let res = ""
    //     for(let char of prifix){
    //         if(root.children[char]){
    //           root = root.children[char]
    //           res+=char
    //           if(root.endWord){
    //               break
    //           }
    //         }else{
    //             break
    //         }
    //     }
    //     return res
    // }
    
    // longestPrifix(){
    //     let root = this.root
    //     let largest = ""
    //     function traverse(root,word=""){
    //         if(root.endWord&&largest.length<word.length){
    //             largest = word
    //         }
    //         for(let el in root.children){
    //             if(root.children[el]){
    //              traverse(root.children[el],word+el)
    //             }
    //         }
    //     }
    //     traverse(root)
    //     return largest
    // }
    
// }
// const trie =new Trie()
// trie.insert("ABIN")
// trie.insert("ABHISHA")
// trie.insert("SUBASHKK")
// trie.insert("ROJA")
// trie.delete("ABIN")
// console.log(trie.longestCommon("ABHU"))
// console.log(trie.longestPrifix())
// trie.print()
// console.log(trie.search("ABIN"))
// console.log(trie.autoComplete("AB"))



// class MinHeap{
//     constructor(){
//         this.item=[]
//     }
//     insert(value){
//         this.item.push(value)
//         this.bubbleUp(this.item.length-1)
//     }
//     bubbleUp(index){
//         let parentIndex=Math.floor((index-1)/2)
//         while(index>0&&this.item[index]<this.item[parentIndex]){
//             [this.item[index],this.item[parentIndex]]=[this.item[parentIndex],this.item[index]]
//              this.bubbleUp(parentIndex)
//         }
//     }
    
//     print(){
//         console.log(this.item)
//     }
// }

// const heap = new MinHeap()
// heap.insert(12)
// heap.insert(4)
// heap.insert(5)
// heap.insert(55)
// heap.print()

// function heapify(arr,n,i){
//     let largest = i
//     let left = 2*i+1
//     let right = 2*i+2
//     if(left>0&&arr[left]<arr[i]){
//         largest=left
//     }
//     if(right>0&&arr[right]<arr[i]){
//         largest=right
//     }
//     if(i!=largest){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }
// }

// function heapSort(array){
//     let n = array.length
//     for(let i=Math.floor(n/2);i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i=n-1;i>0;i--){
//         [arr[i],arr[0]]=[arr[0],arr[i]]
//         heapify(arr,i,0)
//     }
// }
// let arr = [923,44,556,1,66,3,0]
// heapSort(arr)
// console.log(arr)




// function heapSort(arr){
//     let n = arr.length
//     for(let i=Math.floor(n/2)-1;i>=0;i--){
//      heapify(arr,n,i)   
//     }
//     for(let i=n-1;i>0;i--){
//         [arr[i],arr[0]]=[arr[0],arr[i]]
//         heapify(arr,i,0)
//     }
// }
// function heapify(arr,n,i){
//     let left = 2*i+1
//     let right = 2*i+2
//     let smallest = i
//     if(left<n&&arr[left]>arr[smallest]){
//         smallest = left
//     }
//     if(right<n&&arr[right]>arr[smallest]){
//         smallest = right
//     }
//     if(smallest!=i){
//         [arr[smallest],arr[i]]=[arr[i],arr[smallest]]
//         heapify(arr,n,smallest)
//     }
    
// }


// let arr = [1,44,6,77,2,4,99]
// heapSort(arr)
// console.log(arr)

// class MaxHeap{
//     constructor(){
//         this.item=[]
//     }
//     insert(value){
//         this.item.push(value)
//         this.bubbleUp(this.item.length-1)
        
//     }
//     bubbleUp(index){
//         let parentIndex = Math.floor((index-1)/2)
//         while(index>0&&this.item[index]>this.item[parentIndex]){
//             [this.item[index],this.item[parentIndex]]=[this.item[parentIndex],this.item[index]]
//             this.bubbleUp(parentIndex)
//         }
//     }
//     extractMax(){
//         let removeElement = this.item[0]
//         this.item[0]=this.item.pop()
//         this.bubbleDown(0)
//         return removeElement
//     }
//     bubbleDown(index){
//         let left = 2*index+1
//         let right = 2*index+2
//         let largest = index
//         if(left<this.item.length-1&&this.item[left]>this.item[largest]){
//             largest = left
//         }
//         if(right<this.item.length-1&&this.item[right]>this.item[largest]){
//             largest = right
//         }
//         if(largest!=index){
//             [this.item[index],this.item[largest]]=[this.item[largest],this.item[index]]
//             this.bubbleDown(largest)
//         }
//     }
//     print(){
//         console.log(this.item)
//     }
// }
// const heap=new MaxHeap()
// heap.insert(12)
// heap.insert(63)
// heap.insert(33)
// heap.insert(4)
// heap.insert(99)
// heap.insert(55)
// console.log(heap.extractMax())
// heap.print()

// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//        this.root = null 
//     }
//     insert(value){
//         const node = new Node(value)
//         if(this.root==null){
//             this.root = node
//         }else{
//             this.insertNode(node,this.root)
//         }
//     }
//     insertNode(node,root){
//         if(node.value<root.value){
//             if(root.left==null){
//                 root.left = node
//             }else{
//                 this.insertNode(node,root.left)
//             }
//         }else{
//             if(root.right==null){
//                 root.right = node
//             }else{
//                 this.insertNode(node,root.right)
//             }
//         }
//     }
//     inOrder(root = this.root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }
//     levelOrder(root = this.root){
//         let queue = [this.root]
//         while(queue.length){
//             let cur = queue.shift()
//             console.log(cur.value)
//             if(cur.left){
//                 queue.push(cur.left)
//             }
//             if(cur.right){
//                 queue.push(cur.right)
//             }
//         }
//     }
    
//     delete(value){
//         this.root = this.deleteNode(value)
//     }
//     deleteNode(value,root=this.root){
//         if(root==null){
//             return root
//         }
//        if(root.value>value){
//            root.left=this.deleteNode(value,root.left)
//        }else if (root.value<value){
//            root.right=this.deleteNode(value,root.right)
//        }else{
//            if(!root.left&&!root.right){
//                return null
//            }
//            if(!root.left){
//                 return root.right
//            }
//            if(!root.right){
//                return root.left
//            }
//            root.value = this.min(root.right)
//            root.right = this.deleteNode(root.value,root.right)
//        }
//        return root
//     }
//     min(root =this.root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
//     // findClosest(target){
//     //     let closest = this.root.value
//     //     function traverse(root){
//     //         if(!root){
//     //             return null
//     //         }
//     //         if(Math.abs(root.value-target)<Math.abs(closest-target)){
//     //             closest = root.value
//     //         }
//     //         if(target<root.value){
//     //             return traverse(root.left)
//     //         }else{
//     //             return traverse(root.right)
//     //         }
//     //     }
//     //     traverse(this.root)
//     //     return closest
//     // }
    
//     // findClosest(target){
//     //     let closest = this.root.value
//     //     function traverse(root){
//     //         if(!root){
//     //             return null
//     //         }
//     //         if(Math.abs(root.value-target)<Math.abs(closest-target)){
//     //             closest=root.value
//     //         }
//     //         if(target<root.value){
//     //             return traverse(root.left)
//     //         }else{
//     //             return traverse(root.right)
//     //         }
//     //     }
//     //     traverse(this.root)
//     //     return closest 
//     // // }
//     // isBST(root = this.root,min = null,max = null){
//     //     if(root == null){
//     //         return true
//     //     }
//     //     if((min!=null&&root.value<=min)||(max!=null&&root.value>max)){
//     //         return false
//     //     }
//     //     return this.isBST(root.left,min,root.value)&&this.isBST(root.right,root.value,max)
//     // }
    
//     // findSecondThird(){
//     //     let stack = []
//     //     let res= []
//     //     let root= this.root
//     //     while(stack.length>0||root){
//     //         while(root){
//     //             stack.push(root)
//     //             root = root.right
//     //         }
//     //         root = stack.pop()
//     //         res.push(root.value)
//     //         root = root.left
//     //     }
//     //     return res
//     // }
    
//     // findSecondThird(){
//     //     let stack = []
//     //     let res = []
//     //     let root = this.root
//     //     while(stack.length>0||root){
//     //         while(root){
//     //             stack.push(root)
//     //             root =root.left
//     //         }
//     //         root = stack.pop()
//     //         res.push(root.value)
//     //         root = root.right
//     //     }
//     //     return res
//     // }
    
//     // findKth(k){
//     //     let count = 0
//     //     let result = null
//     //     function inOrder(root){
//     //         if(root==null||result!==null){
//     //             return null
//     //         }
//     //         inOrder(root.left)
//     //         count++
//     //         if(count==k){
//     //             result = root.value
//     //             return 
//     //         }
//     //         inOrder(root.right)
//     //     }
//     //     inOrder(this.root)
//     //     return result
//     // }
    
//     // findKth(k){
//     //     let count = 0
//     //     let res = null
//     //     function inOrder(root){
//     //         if(root==null||res!==null){
//     //             return 
//     //         }
//     //         inOrder(root.left)
//     //         count++
//     //         if(count==k){
//     //             res= root.value
//     //             return 
//     //         }
//     //         inOrder(root.right)
//     //     }
//     //     inOrder(this.root)
//     //     return res
//     // }
//     // removeEven(root=this.root){
//     //     if(root==null){
//     //         return 
//     //     }
//     //       root.left= this.removeEven(root.left)
//     //       root.right =  this.removeEven(root.right)
//     //         if(root.value%2==0){
//     //         return this.deleteNode(root.value,root)
//     //         }
//     //         return root   
//     // }
//     // findDepth(target,root = this.root,depth=0){
//     //     if(root==null)return -1
//     //     if(root.value==target){
//     //         return depth
//     //     }
//     //     if(root.value>target){
//     //         return this.findDepth(target,root.left,depth+1)
//     //     }else{
//     //         return this.findDepth(target,root.right,depth+1)
//     //     }
//     // }
//     height(root = this.root){
//         if(root==null){
//             return -1
//         }
//         let leftHeight = this.height(root.left)
//         let rightHeight = this.height(root.right)
//         return Math.max(leftHeight,rightHeight)+1
//     }
//     sumOfLeft(root=this.root){
//         let sum=0
//         if(root ===null){
//             return 0
//         }
//         if(root.left !==null){
//             sum +=root.left.value
//         }
//         return sum + this.sumOfLeft(root.left) + this.sumOfLeft(root.right)
        
//     }
//     isBalanced(root = this.root){
//         if(root ==null){
//             return null
//         }
//         let left = this.isBalanced(root.left)
//         if (left === -1) return -1;
//         let right = this.isBalanced(root.right)
//         if (right === -1) return -1
//          if (Math.abs(left - right) > 1) {
//         return -1;
//     }
//         return Math.max(left, right) + 1;
//     }
    
// }
// const BST = new BinarySearchTree()
// BST.insert(12)
// BST.insert(3)
// BST.insert(99)
// BST.insert(144)
// BST.insert(5)
// BST.insert(2)
// // BST.inOrder()
// // BST.delete(144)
// // BST.removeEven()
// // console.log(BST.findDepth(5))
// // console.log(BST.isBST())
// // console.log(BST.findSecondThird())
// // console.log(BST.findKth(3))
// // console.log("hi",BST.findClosest(10))
// // console.log("sum",BST.sumOfLeft())
// console.log("HI",BST.isBalanced())
// // console.log(BST.height())
// BST.levelOrder()














