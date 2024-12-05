class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Stack{
    construcor(){
        this.head = null
        this.size = 0
    }
    push(value){
        let node = new Node(value)
        if(this.head ==null){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
  
    pop(){
        let remValue = this.head.value
        this.head = this.head.next
        this.size--
        return remValue
    }
    peek(){
        return this.head.value
    }
    
    display(){
        let current = this.head 
        let res = ''
        while(current){
            res +=current.value+"=>"
            current = current.next
        }
    console.log(res)
    }
}
let stack = new Stack();
stack.push(44);
stack.push(2);
stack.push(8);
stack.push(11);
console.log(stack.peek())
console.log("Popped:", stack.pop());
stack.display();
