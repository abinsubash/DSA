class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root == null
    }
    insert(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(node,this.root)
        }
    }
    insertNode(node,root){
        if(node.value<root.value){
            if(root.left==null){
                root.left = node
            }else{
                this.insertNode(node,root.left)
            }
        }else{
            if(root.right==null){
                root.right = node
            }else{
                this.insertNode(node,root.right)
            }
        }   
    }
    height(root = this.root){
        if(root==null){
            return -1
        }
        let leftHeight = this.height(root.left)
        let rightHeigth = this.height(root.right)
        return Math.max(leftHeight,rightHeigth)+1
    }
    
    inOrder(root = this.root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
}

const bts = new binarySearchTree()
bts.insert(23)
bts.insert(5)
bts.insert(4)
bts.insert(8)
bts.inOrder()
console.log(bts.height())
