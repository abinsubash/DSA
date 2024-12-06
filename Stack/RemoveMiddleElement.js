class Stack{
    constructor(){
        this.items=[]
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        return this.items.pop()
    }
    middle(){
        let mid = Math.floor(this.items.length/2)
        console.log(this.items[mid])
        let temp = []
        for(let i =0;i<this.items.length;i++){
            if(i==mid)
            continue
            temp.push(this.items[i])
        }
        this.items=temp
    }
    display(){
        console.log(this.items)
    }
}

const stack = new Stack()
stack.push(22)
stack.push(33)
stack.push(66)
stack.display()
stack.middle()
stack.display()
stack.push(55)
stack.display()