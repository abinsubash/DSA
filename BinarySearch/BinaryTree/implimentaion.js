class Node{
    constructor(value){
        this.value = value
        this.child1=null
        this.child2=null
        this.child3 = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(this.root==null){
            this.root =node
            return 
        }
        let queue = [this.root]
        while(queue.length>0){
            let cur = queue.shift()
            if(!cur.child1){
                cur.child1 = node
                break;
            }else{
                queue.push(cur.child1)
            }
            if(!cur.child2){
                cur.child2 = node
                break;
            }else{
                queue.push(cur.child2)
            }
            if(!cur.child3){
                cur.child3 =node
                break
            }else{
                queue.push(cur.child3)
            }
        }
        
    }
    
    inOrder(root= this.root){
        if(root){
            this.inOrder(root.child1)
            console.log(root.value)
            this.inOrder(root.child2)
            this.inOrder(root.child3)
        }
        return 
    }
}

const tree = new BinaryTree()
tree.insert(12)
tree.insert(3)
tree.insert(55)
tree.insert(66)
tree.inOrder()
