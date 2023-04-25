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
    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(!root.left){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(!root.right){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(root,value){
        // console.log(root.value);
        if(!root){
            console.log(`value is not found`);
            return false
        }else {
            if(value<root.value){
               return this.search(root.left,value)
            }else if(value>root.value){
               return this.search(root.right,value)
            }else{
                console.log(`val present`);
                return true
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
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    levelOrder(){
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
        if(root.left){
            this.min(root.left)
        }else{
            console.log(root.value);
            return root.value
        }
    }
    max(root){
        if(root.right){
            this.max(root.right)
        }
        else{
            console.log(root.value);
            return root.value
        }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
}

let bst=new BinerySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(4)
bst.insert(2)
bst.levelOrder()
bst.delete(3)
console.log(`deletion`);
bst.levelOrder()
// bst.search(bst.root,10)
// bst.search(bst.root,3)
// bst.search(bst.root,15)
// bst.search(bst.root,155)

// bst.insert(5)
// bst.insert(2)
// bst.insert(7)
// bst.insert(1)
// bst.insert(3)
// bst.insert(6)
// bst.insert(8)

// console.log(`preOrder`);
// bst.preOrder(bst.root)
// console.log(`inOrder`);
// bst.inOrder(bst.root)
// console.log(`postOrder`);
// bst.postOrder(bst.root)
// console.log(`levelorder`);
// bst.levelOrder()
// console.log(`min`);
// bst.min(bst.root)
// console.log(`max`);
// bst.max(bst.root)
