class Node{
    constructor(value){
        this.value=value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.size=0
    }
   
    prepend(value){
        let node = new Node(value)
        let current = this.head
        this.head = node
        this.head.next= current
    }
    print(){
        let current = this.head 
        let values =''
        while(current){
            values+=" "+current.value
            current = current.next
        }
        console.log(values)
    }
}


const list = new linkedList()
list.prepend(12)
list.prepend(44)
list.prepend(66)
list.print()