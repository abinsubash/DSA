class TrieNode{
    constructor(){
        this.children = {}
        this.endWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let current = this.root
        for(let i=0;i<word.length;i++){
            let insertData = word[i]
            if(!(insertData in current.children)){
                current.children[insertData]=new TrieNode()
            }
            current = current.children[insertData]
        }
        current.endWord=true
    }
    print(node = this.root, word =""){
        if(node.endWord){
            console.log(word)
        }
        for(let char in node.children){
            this.print(node.children[char],word+char)
        }
    }
}
const trie = new Trie();
trie.insert("abin");
trie.insert("abina");
trie.insert("ab");
trie.print();