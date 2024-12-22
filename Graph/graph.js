class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
           this.adjacencyList[vertex]=new Set()
        }
        
    }
    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    print(){
        for(let vertex in this.adjacencyList){
            console.log(vertex,"=>",[...this.adjacencyList[vertex]])
        }
    }
    delete(vertex){
        if(!this.adjacencyList[vertex]) return null
        for(let el of this.adjacencyList[vertex]){
            this.deleteVertex(el,vertex)
        }
    }
    deleteVertex(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    BFS(start){
        let queue =[start]
        let visited = new Set()
        visited.add(start)
         while(queue.length){
             let vertex = queue.shift()
             console.log(vertex)
             for(let el of this.adjacencyList[vertex]){
                 if(!visited.has(el)){
                     visited.add(el)
                     queue.push(el)
                 }
             }
         }
    }
    DFS(start,visited = new Set()){
        visited.add(start)
        console.log(start)
        for(let el of this.adjacencyList[start]){
            if(!visited.has(el)){
                this.DFS(el,visited)
            }
        }
    }
    
    hasCycle(vertex,visited=new Set(),parent = null){
        visited.add(vertex)
        for(let el of this.adjacencyList[vertex]){
            if(!visited.has(el)){
                if(this.hasCycle(el,visited,vertex)){
                    return true
                }
            }else if(el!==parent){
                return true
            }
        }
        return false
    }
    hashEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1].has(vertex2)&&this.adjacencyList[vertex2].has(vertex1))
    }
   
}
const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addEdges("A","B")
graph.addEdges("B","C")
graph.addEdges("C","D")
graph.addEdges("D","A")
// graph.delete("A")
graph.print()
graph.DFS("A")
console.log(graph.hasCycle("B"))