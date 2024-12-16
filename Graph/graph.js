// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right =null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root
//     }
//     insert(value){
//         const node = new Node(value)
//         if(this.root==null){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(root.value>node.value){
//             if(root.left==null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right==null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
    
//     inOrder(root = this.root){
//         if(root){
//          this.inOrder(root.left)
//          console.log(root.value)
//          this.inOrder(root.right)
//         }
//     }
//     levelOrder(){
//         let queue = [];
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value)
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
    
//     min(root = this.root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
//     max(root=this.root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }
//     search(value,root = this.root){
//         if(!root){
//             return false
//         }if(root.value==value){
//             return true
//         }else if(root.value>value){
//             return this.search(value,root.left)
//         }else if(root.value<value){
//             return this.search(value,root.right)
//         }
//     }
//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(root===null){
//             return root
//         }
//         if(root.value>value){
//             root.left=this.deleteNode(root.left,value)
//         }else if(root.value<value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left&&!root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//         root.value = this.min(root.right)
//         root.right = this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
//     closest(target){
//         let closest = this.root.value
        
//         function traverse(node){
//             if(!node){
//                 return null
//             }
//             if(Math.abs(node.value-target)<Math.abs(closest-target)){
//                 closest= node.value
//             }
//             if(node.value>target){
//                 return traverse(node.left)
//             }else{
//                 return traverse(node.right)
//             }
//         }
//         traverse(this.root)
//         return closest
//     }
    
// }

// const BST = new BinarySearchTree()
// BST.insert(12)
// BST.insert(33)
// BST.insert(55)
// BST.insert(77)
// BST.insert(66)
// BST.delete(33)
// BST.levelOrder()
// // console.log(BST.min())
// // console.log(BST.max())
// // console.log(BST.search(32))
// // console.log(BST.closest(60))
// // BST.inOrder()


class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
        
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex,"->",[...this.adjacencyList[vertex]])
        }
    }
    hashEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1].has(vertex2)&&this.adjacencyList[vertex2].has(vertex1))
    }
    
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 
        }
        for(let adjacentVertex  of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    
    bfs(startvertex){
        let result = []
        let visited = new Set()
        let queue = [startvertex]
        visited.add(startvertex)
        while(queue.length){
            let current = queue.shift()
            result.push(current)
            for(let neighbor of this.adjacencyList[current]){
                if(!visited.has(neighbor)){
                     visited.add(neighbor)
                queue.push(neighbor)
                }
            }
        }
        return result
    }
}


const graph = new Graph()
graph.addVertex("A")
graph.addEdge("C","B")
graph.addEdge("B","C")
graph.addVertex("C")
// console.log(graph.hashEdge("C","A"))
// graph.removeVertex("C")
console.log(graph.bfs("C"))
graph.display()



















