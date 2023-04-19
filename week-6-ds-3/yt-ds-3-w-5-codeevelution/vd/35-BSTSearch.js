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
        return this.root === null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
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
    search(root,value){
        if(!root){
            console.log(`value not found`);
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
}

const bst=new BinerySearchTree()
// console.log(`tree is emplty ${bst.isEmpty()}`);
// bst.insert(2)
// bst.insert(1)
// bst.insert(3)
// console.log(`tree is emplty ${bst.isEmpty()}`);
// console.log(bst.search(bst.root,1));
// console.log(bst.search(bst.root,2));
// console.log(bst.search(bst.root,3));
// console.log(bst.search(bst.root,30));
bst.insert(2)
bst.insert(1)
bst.insert(3)
// console.log(bst.isEmpty());
console.log(bst.search(bst.root,3));
console.log(bst.search(bst.root,2));
console.log(bst.search(bst.root,1));
console.log(bst.search(bst.root,30));


