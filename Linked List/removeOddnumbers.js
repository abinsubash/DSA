class Node{
    constructor(value){
        this.value=value
        this.next = null
  }
}
class linkedList{
    
      constructor(){
          this.head = null
          this.tail = null
          this.size = 0
      }
  append(value){
      const node = new Node(value)
        if(this.head==null){
            this.head = node 
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
  }
  removeDuplicate(){
 
      let current = this.head
      if(this.head.value%2==0){
         current=current.next
         this.head = current.next
      }
      while(current){
          if(current.next.value%2==0){
              current.next=current.next.next
          }
          current=current.next
      }
  }
  print(){
      let current = this.head
      let value = ""
      while(current){
          value += " "+current.value
          current = current.next
      }
      console.log(value)
  }
}


const list =new linkedList()
list.append(12)
list.append(2)
list.append(33)
list.append(55)
list.append(66)
list.append(9)
list.append(7)
list.append(76)
list.print()
list.removeDuplicate()
list.print()

 