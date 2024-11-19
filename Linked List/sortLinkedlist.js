class Node{
    constructor(value){
        this.value=value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head =null
        this.tail = null
        this.size = 0
    }
    append(value){
        const node = new Node(value)
        let current= this.head
        if(this.head ==null){
            this.head= node 
            this.tail = node
        }else{
            while(current.next){
                current = current.next
            }
            current.next=node
            this.tail= node
        }
    }
    print(){
        let current = this.head
        let value =""
        while(current){
            value+="=>"+current.value
            current = current.next
        }
        console.log(value)

    
    }
}
const list = new linkedList()

list.append(12)
list.append(23)
list.append(44)
list.append(55)
list.append(99)
list.print()
