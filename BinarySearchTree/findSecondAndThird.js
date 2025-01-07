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
            this.insertNode(node,this.root)
        }
    }
    insertNode(node,root){
        if(!root){
            return null
        }
        if(root.value>node.value){
            if(!root.left){
                root.left = node
            }else{
                this.insertNode(node,root.left)
            }
        }else{
            if(!root.right){
                root.right =node
            }else{
                this.insertNode(node,root.right)
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
    findSecondAndThird(){
        if(!this.root){
            return null
        }
        let result =[]
        let stack = []
        let current = this.root
        while(stack.length>0||current){
            while(current){
                stack.push(current)
                current = current.right
            }
            current = stack.pop()
            result.push(current.value)
            if(result.length==3){
                break 
            }
            current = current.left;
            
        }
        return {
            firstLargest:result[0]||null,
            secondLargest: result[1] || null,
            thirdLargest: result[2] || null,
        };
    }
}

const BST = new BinarySearchTree()
BST.insert(12)
BST.insert(45)
BST.insert(76)
BST.insert(8)
BST.insert(3)
BST.insert(5)
BST.inOrder()

console.log(BST.findSecondAndThird())