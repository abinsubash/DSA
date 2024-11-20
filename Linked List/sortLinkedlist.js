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


    sorting(){
        if(!this.head || !this.head.next)return
        let swapped
        do{
            swapped =  false
            let current = this.head
            while(current.next){
                if(current && current.next.value < current.value){
                let temp = current.value
                current.value = current.next.value
                current.next.value = temp
                swapped = true
                }
                current = current.next   
            }
     
            
        }while(swapped)
    }

   sorting(){
    if(!this.head||!this.head.next) return
    let swapped 
    do{
        swapped = false
        let current = this.head
        while(current.next){
            if(current&&current.next.value>current.value){
                let temp = current.value
                current.value = current.next.value
                current.next.value = temp
                swapped= true
            }
            current = current.next
        }
    }while(swapped)
}

    print(){
        let current = this.head
        let value =""
        while(current){
            value+=current.value+"=>"
            current = current.next
            
        }
        console.log(value)

    
    }
}
const list = new linkedList()

list.append(33)
list.append(44)
list.append(3)
list.append(55)
list.append(1)
list.print()
list.sorting()
list.print()

