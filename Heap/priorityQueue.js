
class Node{
    constructor(value,priority){
        this.value = value
        this.priority = priority
    }
}


class priorityQueue{
    constructor(){
        this.item=[]
    }
    enqueue(value,priority){
        const node = new Node(value,priority)
        this.item.push(node)
        this.bubbleUp(this.item.length-1)
    }
    
    bubbleUp(index){
        let parentIndex = Math.floor((index - 1) / 2);
         if (index > 0 && this.item[parentIndex].priority > this.item[index].priority) {
            [this.item[parentIndex], this.item[index]] = [this.item[index], this.item[parentIndex]];
            this.bubbleUp(parentIndex);
        }
    }
    dequeue(){
        let removeNode = this.item[0]
        this.item[0]=this.item.pop()
        if(this.item.length>0){
        this.bubbleDown(0)
        }
        return removeNode
    }
    bubbleDown(index){
         let left = 2 * index + 1;
        let right = 2 * index + 2;

        let smallest= index
        if(left< this.item.length&&this.item[left].priority<this.item[smallest].priority){
            smallest = left
        }
        if(right<this.item.length&&this.item[right].priority<this.item[smallest].priority){
            smallest = right
        }
        if(smallest!=index){
        [this.item[index], this.item[smallest]] = [this.item[smallest], this.item[index]];

            this.bubbleDown(smallest)
        }
    }
    
    display(){
        console.log(this.item)
    }
}
const queue = new priorityQueue()
queue.enqueue(12,4)
queue.enqueue(3,3)
queue.enqueue(44,2)
queue.enqueue(5,1)
console.log(queue.dequeue())
queue.display()



















