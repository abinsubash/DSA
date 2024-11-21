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
    append(value){
        const node = new Node(value)
        let current = this.head
        if(this.size==0){
            this.head=node
        }else{
            while(current.next){
                current =current.next
            }
            current.next=node
        }
            this.size++
    }

middle(){
    let slow = this.head
    let fast = this.head.next
    while(fast&&fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    console.log(slow.value)
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
list.append(12)
list.append(77)
list.append(5)
list.append(8)
list.append(66)
list.print()
list.middle()
list.print()
