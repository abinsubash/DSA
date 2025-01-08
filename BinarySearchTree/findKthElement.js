class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
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
        if(root.value>node.value){
            if(root.left ==null){
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
    inOrder(root=this.root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    levelOrder(){
        let queue =[this.root]
        while(queue.length){
            let cur = queue.shift()
            console.log(cur.value)
            if(cur.left){
                queue.push(cur.left)
            }
            if(cur.right){
                queue.push(cur.right)
            }
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root ==null){
            return root
        }
        if(root.value>value){
            root.left = this.deleteNode(root.left,value)
        }else if(root.value<value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    
    min(root = this.root){
        if(!root.left){
            return root.value
        }
        return this.min(root.left)
    }
    findClosest(target){
        let closest = this.root.value
        function traverse(root){
        if(root==null){
            return null
        }
        if(Math.abs(root.value-target)<Math.abs(closest-target)){
            closest=root.value
        }
        if(target<root.value){
            return traverse(root.left)
        }
        if(target>root.value){
            return traverse(root.right)
        }
        }
         traverse(this.root)
        return closest
    }
    removeEvenNumber(root = this.root){
        if(root==null){
            return null
        }
        root.left = this.removeEvenNumber(root.left)
        root.right = this.removeEvenNumber(root.right)
        if(root.value%2==0){
            return this.deleteNode(root,root.value)
        }
        return root
    }
    height(root=this.root){
        if(root==null){
            return -1
        }
        let leftHeight = this.height(root.left)
        let rightHeight = this.height(root.right)
        return Math.max(leftHeight,rightHeight)+1
    }
    depth(target,root = this.root,depth=0){
        if(root==null)return -1
        if(root.value==target){
            return depth
        }
        if(root.value>target){
            return this.depth(target,root.left,depth+1)
        }else{
            return this.depth(target,root.right,depth+1)
        }
    }
    findSecondLargest(){
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
            current = current.left
        }
        return result
    }
    findKthElement(k){
        let count = 0
        let result = null
        function inOrder(root){
            if(root==null||result!==null){
                return 
            }
            inOrder(root.left)
            count++
            if(count==k){
                result = root.value
                return 
            }
        inOrder(root.right)
        }
        inOrder(this.root)
        return result
    }
}
const BST = new BinarySearchTree()
BST.insert(12)
BST.insert(3)
BST.insert(45)
BST.insert(44)
// console.log(BST.findSecondLargest())
BST.insert(5)
console.log(BST.findKthElement(1))
// BST.delete(12)
// BST.removeEvenNumber()
// console.log(BST.height())
// console.log(BST.depth(45))
// BST.levelOrder()
// console.log(BST.findClosest(55))
// BST.inOrder()