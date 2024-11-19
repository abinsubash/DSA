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
remove(value){
    if(this.head.value==value){
        this.head = this.head.next
    }
    let current= this.head
    while(current&&current.next){
        if(current.next.value==value){
            current.next = current.next.next
            this.size--
        }else{
            current=current.next
        }
    }
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
list.append(44)
list.append(66)
list.print()
list.remove(44)
list.print()

