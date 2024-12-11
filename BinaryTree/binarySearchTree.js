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
        return this.root ==null
    }
    insert(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNewNode(this.root,newNode)
        }
    }
    insertNewNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left==null){
                root.left = newNode
            }else{
                this.insertNewNode(root.left,newNode)
            }
        }else{
            if(root.right == null){
                root.right = newNode
            }else{
                this.insertNewNode(root.right,newNode)
            }
        }
    }
    
    search(value,root = this.root){
      if(!root){
          return false
      }else{
          if(root.value == value){
              return true
          }else if(value<root.value){
                return this.search(value,root.left)
          }else{
              return this.search(value,root.right)
          }
      }
    }
    
    preOrder(root = this.root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    
    inOrder(root = this.root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root = this.root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    
    levelOrder(){
        const queue=[]
        if(this.root){
            queue.push(this.root)
        }
        while(queue.length>0){
            let current = queue.shift()
            console.log(current.value)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
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
            return  root.value
        }else{
            return this.max(root.right)
        }
    }
    delete(value){
        this.root =this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root ==null){
            return root
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value >root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    
}
const bst = new binarySearchTree()
// console.log(bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(12)
bst.insert(7)
bst.insert(18)
// console.log(bst.search(5))
bst.levelOrder()
console.log("hi")
bst.delete(2)
bst.levelOrder()
// console.log(bst.max())
