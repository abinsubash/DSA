class Node{
    constructor(value){
        this.value = value 
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(this.root == null){
            this.root = node
            return 
        }
        let queue = [this.root]
        while(queue.length){
            let cur = queue.shift()
            if(!cur.left){
                cur.left = node
                break
            }else {
                queue.push(cur.left)
            }
            if(!cur.right){
                cur.right = node
                break
            }else{
                queue.push(cur.right)
            }
        }
    }
    
    inOrder(root =this.root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    BFS(target,root = this.root){
        let queue = [this.root]
            while(queue.length){
                let node = queue.shift()
                if(node.value==target)return true
                if(node.left)queue.push(node.left)
                if(node.right)queue.push(node.right)
            }
            return false
    }
    findKth(k){
        let count =0
        let res = null
        function inOrder(root){
            if(!root){
                return null
            }
            inOrder(root.left)
            count++
            if(count==k){
                return res = root.value
            }
            inOrder(root.right)
        }
        inOrder(this.root)
        return res
    }
}


const BT = new BinaryTree()

BT.insert(23)
BT.insert(4)
BT.insert(66)
BT.insert(7)
BT.inOrder()
console.log(BT.BFS(77))
console.log(BT.findKth(1))













