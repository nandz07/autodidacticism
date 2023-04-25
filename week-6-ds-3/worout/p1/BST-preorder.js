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
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    search(root,value){
        if(!root){
            console.log(`${value} is not present`);
            return false
        }
        else{
            if(value===root.value){
                console.log(`${value} is present`);
                return true
            }else if(value<root.value){
                 this.search(root.left,value)
            }
            else{
                 this.search(root.right,value)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOreder(root){
        if(root){
            this.inOreder(root.left)
            console.log(root.value);
            this.inOreder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    levelOrdder(){
        let queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root){
            if(!root.left){
                console.log(root.value);
                return root.value
            }else{
                this.min(root.left)
            }
    }
}
let bst=new BinerySearchTree()
// bst.insert(5)
// bst.insert(1)
// bst.insert(6)
// bst.search(bst.root,6)
// bst.search(bst.root,3)
// bst.search(bst.root,1)
// bst.search(bst.root,5)
// bst.search(bst.root,50)

bst.insert(5)
bst.insert(2)
bst.insert(7)
bst.insert(1)
bst.insert(3)
bst.insert(8)
bst.insert(6)

console.log(`preorder`);
bst.preOrder(bst.root)
console.log(`inorder`);
bst.inOreder(bst.root)
console.log(`postOrder`);
bst.postOrder(bst.root)
console.log(`level order`);
bst.levelOrdder()
console.log(`min`);
bst.min(bst.root)
bst.search(bst.root,5)