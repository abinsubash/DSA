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
removeduplicate(){
    let current = this.head 
    let newset = new Set()
    let prev=null
    while(current){
        if(newset.has(current.value)){
            prev.next = current.next
            this.size--
        }else{
        newset.add(current.value)
        prev=current
        }
        current= current.next
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
list.append(12)
list.append(44)
list.append(66)
list.append(44)
list.print()
list.removeduplicate()
list.print()
