// class hashTable {
//     constructor(size){
//         this.table=[]
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         console.log(total%this.size)
//         return total%this.size
//     }
//     set(key,value){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let sameKey= bucket.find(item=>item[0]==key)
//             if(sameKey){
//                 sameKey[1]=value
//             }else{                             
//                 bucket.push([key,value])
//             }
//         }
//     }
    
//     get(key){
//         let index = this.hash(key) 
//         let bucket = this.table[index]
//         if(bucket){
//             let sameKey = bucket.find(item=>item[0]==key)
//             if(sameKey){
//                 return sameKey[1]
//             }
//         }
//         return undefined
//     }  
//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameKey=bucket.find(item=>item[0]==key)
//             if(sameKey){
//                 return bucket.splice(bucket.indexOf(sameKey),1)
//             }
//         }
//     }
    
//     display(){
//         for(let i =0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
    
// }
// const table = new hashTable(5)
// table.set("name","abin")
// table.set("mane","Subash")  
// table.set("place","Thottilpalam")  
// table.remove("name")
// table.set("age",18)
// table.display()



// *****stack using queue********

// class stackUsingQueue{
//     constructor(){
//     this.q1 =[]
//     this.q2 = []
//     }
//     push(value){
//         this.q2.push(value)
        
//         while(this.q1.length){
//             this.q2.push(this.q1.shift())
//         }
//         [this.q1,this.q2]=[this.q2,this.q1]
//     }
//     pop(){
//         if(this.q1.length==0){
//             console.log("Stack is empty")
//             return
//         }
//         return this.q1.shift()
//     }
//     display(){
//         console.log(this.q1)
//     }
// }
// const stack = new stackUsingQueue()
// stack.push(12);
// stack.push(33);
// stack.push(44);
// stack.display(); // [44, 33, 12]
// stack.push(55);
// stack.pop(); // Removes 55
// stack.display(); // [44, 33, 12]
// stack.push(66);
// stack.push(77);
// stack.display(); // [77, 66, 44, 33, 12]
// stack.pop(); // Removes 77
// stack.display(); // [66, 44, 33, 12]

// Queue using stack 
// class queueUsingStack{
//     constructor(){
//       this.stack1 =[]
//       this.stack2 =[]
//     }
//     enqueue(value){
//       this.stack1.push(value)
//      }
//      dequeue(){
//          while(this.stack2.length===0){
//              if(this.stack1.length>0){
//                  this.stack2.push(this.stack2.pop())
//              }
//          }
//          return this.stack2.pop()
//      }
     
//      display(){
//          let stackcopy = [...this.stack1].reverse()
//          return [...stackcopy,...this.stack2]
//      }
// }
// const queue = new queueUsingStack()
// queue.enqueue(12)
// queue.enqueue(33)
// queue.enqueue(44)
// queue.display()
// queue.enqueue(55)
// queue.dequeue()
// queue.display()
// queue.enqueue(66)
// queue.enqueue(77)
// queue.display()
// queue.dequeue()
// queue.display()

class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
        this.count = 0
    }
    hash (key){
        let total =0
        for(let i = 0 ; i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index = this.hash(key)
        let startIndex = index
        while(this.table[index]){
        if(this.table[index][0]==key){
          this.table[index][1]=value 
          return ;
        }
        index = (index+1)%this.size
        if(index===startIndex)return console.log("Hash table is full")
        } 
        this.table[index]=[key,value]
    }
    get(key){
        let index = this.hash(key)
        let startIndex=index
        while(this.table[index]){
            if(this.table[index][0]==key){
                return this.table[index][1]
            }
            index = (index+1)%this.size
            if(index==startIndex)return undefined
        }
        return undefined
    }
    remove(key){
        let index = this.hash(key)
        let startIndex = index
        while(this.table[index]){
            if(this.table[index][0]==key){
                this.table[index]=undefined
                return true
            }
            index = (index+1)%this.size
            if(index==startIndex)return false
        }
        return false
    }
    display(){
        for(let i = 0 ;i < this.table.length ; i++){
            if(this.table[i]){
            console.log(this.table[i])
            }
        }
    }
    
}
const table = new hashTable(5);
table.set("name", "Abin");
table.set("mane", "Subash");
table.set("place", "Thottilpalam");
table.display();
table.remove("place")
table.display()

