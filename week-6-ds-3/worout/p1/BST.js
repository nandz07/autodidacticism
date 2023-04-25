class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinerySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    insert(value){
        let newNode=new Node(value)
        if(this.root===null){
            this.root=newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }
    search(root,value){
        if(!root){
            console.log(`${value} is not present in this tree`);
            return false
        }
        else{
            if(value===root.value){
                console.log(`${value} is present in this tree`);
                return true
            }
            else if(value<root.value){
                return this.search(root.left,value)
            }
            else{
                return this.search(root.right,value)
            }
        }
    }
}

let bst=new BinerySearchTree()
bst.insert(5)
bst.insert(1)
bst.insert(6)
bst.search(bst.root,6)
bst.search(bst.root,60)
