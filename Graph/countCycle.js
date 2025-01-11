class Graph {
    constructor(){
        this.list ={}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Set()
        }
    }
    addEdges(vertex1,vertex2){
        if(!this.list[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.list[vertex2]){
            this.addVertex(vertex2)
        }
        this.list[vertex1].add(vertex2)
        this.list[vertex2].add(vertex1)
    }
    print(){
        for(let el in this.list){
            console.log(el,"=>",[...this.list[el]])
        }
    }
    delete(vertex){
        if(!this.list[vertex]){
            return null
        }
        for(let char of this.list[vertex]){
            this.deleteEdges(char,vertex)
        }
        delete this.list[vertex]
    }
    deleteEdges(vertex1,vertex2){
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }
    BFS(start){
        let queue =[start]
        let visited = new Set()
        visited.add(start)
        while(queue.length){
            let vertex = queue.shift()
            console.log(vertex)
            for(let el of this.list[vertex]){
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
        for(let char of this.list[start]){
            if(!visited.has(char)){
                this.DFS(char,visited)
            }
        }
    }
    findShortest(start,end){
        if(!this.list[start]&&!this.list[end]){
            return null
        }
        let queue = [[start]]
        let visited = new Set()
        while(queue.length){
            let path = queue.shift()
            let vertex = path[path.length-1]
            if(vertex==end){
                return path
            }
            for(let el of this.list[vertex]){
                if(!visited.has(el)){
                visited.add(el)
                let newPath=[...path,el]
                queue.push(newPath)
                }
            }
        }
        return null
    }
    hasCycle(start,visited = new Set(),parent=null){
        visited.add(start)
        for(let char of this.list[start]){
            if(!visited.has(char)){
                if(!this.hasCycle(char,visited,start)){
                    return true
                }
                
            }else if(parent!=char){
                return true
            }
        }
        return false
    }
    countCycle(){
        let visited = new Set()
        let cycleCount = 0
        for(let el in this.list){
            if(!visited.has(el)){
                cycleCount = this.dfsCycle(el,visited,null)
            }
        }
        return cycleCount/2
    }
    dfsCycle(start,visited,parent){
        visited.add(start)
        let cycle=0
        for(let el of this.list[start]){
            if(!visited.has(el)){
                cycle+=this.dfsCycle(el,visited,start)
            }else if (el !=parent){
                cycle+=1 
            }
        }
        return cycle
    }
}
const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")

graph.addEdges("A", "B")
graph.addEdges("B", "C")
graph.addEdges("C", "F")
graph.addEdges("F", "A")

graph.addEdges("D", "E")
graph.addEdges("E", "G")
graph.addEdges("G", "F")
graph.addEdges("F", "D")

// console.log(graph.hasCycle("A"))
console.log(graph.countCycle())
// graph.BFS("A")
// graph.DFS("A")
// console.log(graph.findShortest("A","D"))
// graph.delete("A")
graph.print()