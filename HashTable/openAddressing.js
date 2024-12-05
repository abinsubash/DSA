

class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash (key){
        let total =0
        for(let i = 0 ; i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index = this.hash(key)
        let startIndex = index
        while(this.table[index]){
        if(this.table[index][0]==key){
          this.table[index][1]=value 
          return ;
        }
        index = (index+1)%this.size
        if(index===startIndex)return console.log("Hash table is full")
        } 
        this.table[index]=[key,value]
    }
    get(key){
        let index = this.hash(key)
        let startIndex=index
        while(this.table[index]){
            if(this.table[index][0]==key){
                return this.table[index][1]
            }
            index = (index+1)%this.size
            if(index==startIndex)return undefined
        }
        return undefined
    }
    remove(key){
        let index = this.hash(key)
        let startIndex = index
        while(this.table[index]){
            if(this.table[index][0]==key){
                this.table[index]=undefined
                return true
            }
            index = (index+1)%this.size
            if(index==startIndex)return false
        }
        return false
    }
    display(){
        for(let i = 0 ;i < this.table.length ; i++){
            if(this.table[i]){
            console.log(this.table[i])
            }
        }
    }
    
}
const table = new hashTable(5);
table.set("name", "Abin");
table.set("mane", "Subash");
table.set("place", "Thottilpalam");
table.display();
table.remove("place")
table.display()

