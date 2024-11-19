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
     insert(value,index){
        const node = new Node(value)
        if(index<0||index>this.size){
            return console.log("enter a valid index")
        }else{
            let current = this.head
            for(let i=0;i<index-1;i++){
                current=current.next
            }
            node.next=current.next
            current.next=node
            this.size++
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
list.insert(23,1)
list.print()
