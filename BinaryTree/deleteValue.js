class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(this.root==null){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(root.value>node.value){
            if(root.left==null){
                root.left = node
            }else{
                 this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right= node
            }else{
                 this.insertNode(root.right,node)
            }
        }
    }
    inOrder(root = this.root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
       levelOrder(){
        let queue = [];
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    
    
    
    min(root = this.root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root = this.root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    delete(value){
     this.root = this.deleteNode(this.root,value)
    }
    
    deleteNode(root,value){
        if(root==null){
            return root;
        }
        if(root.value>value){
            root.left=this.deleteNode(root.left,value)
        }else if(root.value<value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }
            if(!root.left){
                    return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

}

const bst = new BinarySearchTree()
bst.insert(23)
bst.insert(66)
bst.insert(5)
bst.insert(33)
// bst.inOrder()
console.log(bst.search(33))
// console.log(bst.min())
// console.log(bst.max())
bst.delete(23)
bst.levelOrder()