class Heap {
    constructor(){
        this.item = []
    }
    insert(value){
        this.item.push(value)
        this.bubble()
    }
    bubble(){
        let idx = this.item.length-1
        let element = this.item[idx]
        while(idx>0){
            let parentIdex = Math.floor((idx-1)/2)
            let parent = this.item[parentIdex]
            if(element<=parent)break;
            [this.item[idx],this.item[parentIdex]]=[this.item[parentIdex],this.item[idx]]
            idx=parentIdex
        }
    }
    display(){
        console.log(this.item)
    }
    remove(){
        if(this.item.length==0)return null
        let max = this.item[0]
        let end = this.item.pop()
        if(this.item.length>0){
            this.item[0]=end
            this.bubbleDown()
        }
        return max
    }
    bubbleDown(){
        let idx = 0
        let length = this.item.length
        let element = this.item[idx]
        while(true){
            let leftChild,rightChild
            let swap = null
            let leftChildIdx = 2*idx+1
            let rightChildIdx= 2*idx+2
            if(leftChildIdx<length){
                leftChild = this.item[leftChildIdx]
                if(leftChild>element){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx<length){
                rightChild=this.item[rightChildIdx]
                if((swap!==null&&rightChild>leftChild)||(swap==null&&rightChild>element)){
                    swap = rightChild
                }
            }
            if(swap==null)break;
            this.item[idx]=this.item[swap]
            this.item[swap]=element
            idx = swap
        }
    }
    
        heapSort(){
        let arr = []
        let copy = [...this.item]
        while(this.item.length>0){
            arr.push(this.remove())
        }
        this.item = copy
    return arr
    }
}
const heap = new Heap()
heap.insert(1)
heap.insert(66)
heap.insert(44)
heap.insert(55)
heap.display()
heap.remove()
console.log('Sorted array',heap.heapSort())
heap.display()