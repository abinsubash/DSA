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


class MinHeap {
    constructor(){
        this.item=[]
    }
    swap(i,j){
        [this.item[i],this.item[j]]=[this.item[j],this.item[i]]
    }
    insert(value){
        this.item.push(value)
        this.bubbleUp(this.item.length-1)
    }
    bubbleUp(index){
        let parentIndex =Math.floor((index-1)/2)
        while(index>0&&this.item[parentIndex]>this.item[index]){
            this.swap(index,parentIndex)
            this.bubbleUp(parentIndex)
        }
    }
    extractMin(){
        let removeVal = this.item[0]
        this.item[0]=this.item.pop()
        this.bubbleDown(0)
        return removeVal
    }
    bubbleDown(index){
        let left = 2*index+1
        let right = 2*index+2
        let smallest = index
        if(left<this.item.length&&this.item[smallest]>this.item[left]){
            smallest = left
        }
        if(right<this.item.length&&this.item[smallest]>this.item[right]){
            smallest = right
        }
        if(smallest!=index){
            this.swap(index,smallest)
            this.bubbleDown(smallest)
        }
    }
    display(){
        console.log(this.item)
    }
    
}

const minheap=new MinHeap()
// minheap.insert(21)
// minheap.insert(44)
// minheap.insert(6)
// minheap.insert(8)
// // minheap.display()
// minheap.extractMin()
// // minheap.display()


let arr = [12,33,4,55,6,7,8]
function heapSort(arr){
    for(let val of arr){
        minheap.insert(val)
    }
    let newarr=[]
while (newarr.length != arr.length){
    newarr.push(minheap.extractMin())
    }
    console.log(newarr)
    
}
heapSort(arr)