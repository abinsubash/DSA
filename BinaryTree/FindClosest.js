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

    
    isBST(root= this.root, min=null,max = null){
        if(root==null){
            return true
        }
        if((min!=null&&root.value<=min)||(max!=null&&root.value>max)){
            return false
        }
        return this.isBST(root.left,min,root.value)&&this.isBST(root.right,root.value,max)
    }   
    
    findClosest(target){
        let closest = this.root.value
        function traverse(node){
            if(!node){
                return null
            }
            if(Math.abs(node.value-target)<Math.abs(closest-target)){
                closest=node.value
            }
            if(target<node.value){
                return traverse(node.left)
            }else{
                return traverse(node.right)
            }
        }
        traverse(this.root)
        return closest
    }

}

const bst = new BinarySearchTree()
bst.insert(23)
bst.insert(66)
bst.insert(5)
bst.insert(33)
// bst.inOrder()
console.log(bst.search(33))
bst.levelOrder()
console.log("HI MY",bst.findClosest(47))

