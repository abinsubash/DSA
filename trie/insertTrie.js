class Node{
    constructor(){
        this.children = {}
        this.endword =false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
        
    }
insert(word){
    let curr = this.root
    for(let char of word){
        if(!curr.children[char]){
            curr.children[char]=new Node()
        }
        curr = curr.children[char]
    }
    curr.endword = true
}
search(word){
    let cur = this.root
    for(let char of word){
        if(!cur.children[char]){
            return false
        }
        cur= cur.children[char]
    }
    return cur.endword
}
   
   startWith(word){
        let cur = this.root
        for(let char of word){
            if(!cur.children[char]){
                return false
            }
            cur = cur.children[char]
        }
        return true
   } 
    print(root = this.root,word=" "){
        if(root.endword){
            console.log(word)
        }
        for(let char in root.children){
            if(root.children[char]){
                this.print(root.children[char],word+char)
            }
        }
    }
    
    autoComplete(prifix){
        let cur = this.root
        let res = []
        for(let char of prifix){
            if(!cur.children[char]){
                return []
            }
            cur = cur.children[char]
        }
        
        function traverse(cur,prifix){
            if(cur.endword){
                res.push(prifix)
            }
            for(let char in cur.children){
                traverse(cur.children[char],prifix+char)
            }
            
        }
            traverse(cur,prifix)
            return res
    }
    
    deleteWord(word){
        function deletefn(word,cur,index){
            if(index==word.length){
                if(!cur.endword){
                    return false
                }
                cur.endword=false
                return Object.keys(cur.children).length==0
            }
            
            let el = word[index]
            if(!cur.children[el]){
                return false
            }
            let result = deletefn(word,cur.children[el],index+1)
            if(result){
                delete cur.children[el]
                return Object.keys(cur.children).length==0&&!cur.endword
            }
            return false
        }
        deletefn(word,this.root,0)
        
    }
    longestPrifix(){
        let res = ""
        function traverse(word,root){
        if(root.endword){
            if(word.length>res.length){
                res = word
            }
        }
        for(let el in root.children){
            if(root.children[el]){
                traverse(word+el,root.children[el])
            }
        }
            
        }
        traverse("",this.root)
        return res
    }
    
}

const trie = new Trie()
trie.insert("APPLE")
trie.insert("APP")
trie.insert("BANANA")
// console.log(trie.search("BANANA"))
// console.log(trie.startWith("APPL"))
trie.deleteWord("APPLE")
trie.print()
// console.log(trie.autoComplete("AP"))


