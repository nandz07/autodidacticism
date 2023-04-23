class Node{
    constructor(){
        this.children=new Map()
        this.wordEnd=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            let charToinsert=word[i]
            if(!(charToinsert in curr.children)){
                curr.children[charToinsert]=new Node()
            }
            curr=curr.children[charToinsert]
        }
        curr.wordEnd=true
    }
    contain(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            let charTofind=word[i]
            if(!(charTofind in curr.children )){
                return false
            }
            curr=curr.children[charTofind]
        }
        return true
    }
}
let trie=new Trie()
trie.insert("appu")
console.log(trie);
let r=trie.contain("appu")
let b=trie.contain("df")
console.log(r);
console.log(b);
