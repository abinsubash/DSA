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
reverse(){
    if(this.size==0){
        return console.log("pooda")
    }else{
        let current = this.head
        let pre = null 
        let next = null
        while(current){
            next=current.next
            current.next = pre
            pre = current 
            current = next
        }
        this.head = pre
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
list.reverse()
list.print()
