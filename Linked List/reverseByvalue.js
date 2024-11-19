class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head=null
        this.tail=null 
        this.size=0
    }
    append(value){
        let node = new Node(value)
        if(this.size==0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
           this.tail= node
        }
        this.size++
    }
    
    passvalue(value){
        let current= this.head
        let temp = null
        let res=null
        if(this.head.value==value){
            return
        }
        while(current.next){
            if(current.next.value==value){
        res=current
            }
            current= current.next
        }
        
         if(res){
            this.tail.next= this.head
            this.head = res.next
            res.next=null
            this.tail= res
         }
    }
    print(){
        let value = " "
        let current = this.head
        while(current){
            value += " "+current.value
            current=current.next
        }
        console.log(value,this.tail)
    }
}
const list = new linkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)

list.print()
list.passvalue(3)
list.print()
