class Heap {
    constructor() {
        this.item = []; 
    }

    insert(value) {
        this.item.push(value); 
        this.bubble();
    }

    bubble() {
        let idx = this.item.length - 1;
        let element = this.item[idx]; 
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2); 
            let parent = this.item[parentIdx]; 
            if (element >= parent) break; 

            [this.item[idx], this.item[parentIdx]] = [this.item[parentIdx], this.item[idx]];
            idx = parentIdx; 
        }
    }

    display() {
        console.log(this.item);
    }
}

const heap = new Heap();
heap.insert(12);
heap.insert(77);
heap.insert(66);
heap.insert(55);
heap.display();

