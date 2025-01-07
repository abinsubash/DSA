class Graph{
    constructor(){
        this.list = {}
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
    removeVertex(vertex){
        for(let char of this.list[vertex]){
            if(char){
                this.removeEdges(vertex,char)
            }
        }
        delete this.list[vertex]
    }
    removeEdges(vertex1,vertex2){
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }
    print(){
        for(let char in this.list){
            if(this.list[char]){
                console.log(char,"=>",[...this.list[char]])
            }
        }
    }
    BFS(start){
        let queue = [start]
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
        for(let el of this.list[start]){
            if(!visited.has(el)){
            this.DFS(el,visited)
            }
        }
    }
    findShortest(start,end){
        if(!this.list[start]||!this.list[end]){
            return null
        }
        let queue = [[start]]
        let visited = new Set()
        visited.add(start)
        while(queue.length){
            let path = queue.shift()
            let vertex = path[path.length-1]
            if(vertex==end){
                return path
            }
            for(let el of this.list[vertex]){
                if(!visited.has(el)){
                    visited.add(el)
                    let newPath = [...path,el]
                    queue.push(newPath)
                }
            }
        }
        return null
    }
    hasCycle(vertex,visited = new Set(),parent){
        visited.add(vertex)
        for(let char of this.list[vertex]){
            if(!visited.has(char)){
                if(!this.hasCycle(char,visited,vertex)){
                    return true
                }
            }else if(char!=parent){
                return true
            }
        }
        return false
    }
    hasEdge(vertex1,vertex2){
        return (this.list[vertex1].has(vertex2)&&this.list[vertex2].has(vertex1))
    }
    findDigree(vertex){
        if(this.list[vertex]){
            return this.list[vertex].size
        }
        return null
    }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
// graph.addVertex("E")
graph.addEdges("A", "B");
graph.addEdges("B", "C");
graph.addEdges("C", "D");
graph.addEdges("D", "A");
// console.log(graph.hasCycle("A"))
console.log(graph.findDigree("A"))
// console.log(graph.hasEdge("A","D"))
// graph.removeVertex("B")
// graph.BFS("A")
// console.log("Shortest Path from A to C:", graph.findShortest("A", "C")); 
// graph.DFS("A")
graph.print()