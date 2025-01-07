class WeightedGraph{
    constructor(){
        this.list={}
    }
    insert(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Map()
        }
    }
    addEdges(vertex1,vertex2,weight){
        if(!this.list[vertex1]){
            this.insert(vertex1)
        }
        if(!this.list[vertex2]){
            this.insert(vertex2)
        }
        this.list[vertex1].set(vertex2,weight)
        this.list[vertex2].set(vertex1,weight)
    }
    remove(vertex){
        for(let char in this.list){
            this.removeEdges(vertex,char)
        }
        delete this.list[vertex]
    }
    removeEdges(vertex1,vertex2){
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }
    print(){
        for(let values in this.list){
            console.log(values,"=>",[...this.list[values]])
        }
    }
}
const weighted=new WeightedGraph()
weighted.insert("A")
weighted.insert("B")
weighted.insert("C")
weighted.insert("D")
weighted.addEdges("A","B",12)
weighted.addEdges("B","C",23)
weighted.remove("A")
weighted.print()

