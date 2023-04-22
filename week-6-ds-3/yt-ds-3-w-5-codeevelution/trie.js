class Node{
    constructor(){
        this.children={}
        this.isWordEnd=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let current=this.root
        for(let i=0;i<word.length;i++){
            let charToInsert=word[i]
            if(!(charToInsert in current.children)){
                current.children[charToInsert]=new Node()
            }
            current=current.children[charToInsert]
        }
        current.isWordEnd=true
    }
    contains(word){
        let current=this.root
        for(let i=0;i<word.length;i++){
            let charTofind=word[i]
            if(!(charTofind in current.children)){
                return false
            }
            current=current.children[charTofind]
        }
        return true
    }
}
let trie=new Trie()
trie.insert('nandu')
trie.insert('naveen')
console.log(trie.contains("nans"));

let b1="hai"

let a={a1:{}}
if(b1 in a.a1){
    console.log("yes");
}else{
    console.log("no");
}
