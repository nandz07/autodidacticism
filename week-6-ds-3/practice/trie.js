// class Node{
//     constructor(){
//         this.children=new Map()
//         this.end=false
//     }
// }
// class Trie{
//     constructor(){
//         this.root=new Node()
//         }
//     insert(word){
//         let curr=this.root
//         for(let i=0;i<word.length;i++){
//             let charToInsert=word[i]
//             if(!(charToInsert in curr.children)){
//                 curr.children[charToInsert]=new Node()
//             }
//             curr=curr.children[charToInsert]
//         }
//         curr.end=true
//     }
//     contain(word){
//         let curr=this.root
//         for(let i=0;i<word.length;i++){
//             let charToCheck=word[i]
//             if(!(charToCheck in curr.children)){
//                 return false
//             }
//             curr=curr.children[charToCheck]
//         }
//         return true
//     }
// }

// let trie=new Trie()
// trie.insert("appu")
// console.log(trie);
// console.log(trie.contain("appu"));
// console.log(trie.contain("appafgsdfg"));

class Node{
    constructor(){
        this.children=new Map()
        this.end=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            let charToInsert=word[i]
            if(!(charToInsert in curr.children)){
                curr.children[charToInsert]=new Node()
                curr=curr.children[charToInsert]
            }
        }
        curr.end=true
    }
    contains(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            
        }
    }
}