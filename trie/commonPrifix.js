class Node{
    constructor(){
        this.children={}
        this.endWord = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let cur = this.root
        for(let char of word){
            if(!cur.children[char]){
                cur.children[char]=new Node()
            }
            cur = cur.children[char]
        }
    cur.endWord = true
    }
    print(root = this.root,word=""){
        if(root.endWord){
            console.log(word)
        }
        for(let char in root.children){
            if(root.children[char]){
                this.print(root.children[char],word+char)
            }
        }
    }
    search(word){
        let root = this.root
        for(let char of word){
            if(!root.children[char]){
                return false
            }
            root = root.children[char]
        }
        return root.endWord
    }
    autoComplete(prifix){
        let root = this.root
        let res=[]
        for(let char of prifix){
              if(!root.children[char]) {
                  return []
              }
              root = root.children[char]
        }
            
        function traverse(root,prifix){
            if(root.endWord){
                res.push(prifix)
            }
            for(let char in root.children){
                traverse(root.children[char],prifix+char)
            }
            
        }
        traverse(root,prifix)
        return res
    }
    longest(word){
        let cur = this.root
        let prifix =""
        for(let char of word){
            if(cur.children[char]){
                prifix+=char
                cur = cur.children[char]
                if(cur.endWord){
                    break;
                }
            }else{
                break
            }
        }
        return prifix
    }
}
const trie = new Trie()
trie.insert("ABIN")
trie.insert("SUBASH")
trie.insert("ABHISHA")
trie.insert("ROJA")
console.log(trie.longest("ABHU"))
// console.log(trie.autoComplete("A"))
// console.log(trie.search("ABIN"))
// trie.print()
