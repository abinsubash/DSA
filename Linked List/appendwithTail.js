class Node{
    constructor(value){
        this.value=value
        this.next =null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    getsize(){
        return this.size
    }
    append(value){
        const node = new Node(value)
        if(this.size==0){
            this.head=node
            this.tail = node
        }else{
            this.tail.next =node
            this.tail = node
        }
            this.size++
    }
    print(){
        let current = this.head
        let value =''
        while(current){
            value += " "+current.value
         current=current.next  
        }
        console.log(value)
    }
}

const list = new linkedList()
list.append(12)
list.append(33)
list.append(3)
list.append(4)
list.append(66)
list.print()

