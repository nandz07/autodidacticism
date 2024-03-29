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
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left){
                this.insertNode(root.left,newNode)
            }else{
                root.left=newNode
            }
        }else{
            if(root.right){
                this.insertNode(root.left,newNode)
            }else{
                root.right=newNode
            }
        }
    }
    search(root,value){
        if(!root){
            console.log(`value not found`);
            return false
        }else{
            if(root.value===value){
                return true
            }
            else if(root.value>value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
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
        if(!root.left){
            console.log(root.value);
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            console.log(root.value);
            return root.value
        }else{
            return this.max(root.right)
        }
    }
}

let bst=new BinerySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
// console.log(bst);
// console.log(bst.search(bst.root,7));
// console.log(bst.search(bst.root,30));
console.log(`pre`);
bst.preOrder(bst.root)
console.log(`in`);
bst.inOrder(bst.root)
console.log(`post`);
bst.postOrder(bst.root)
console.log(`level`);
bst.levelOrder()
console.log(`max`);
bst.max(bst.root)
console.log(`min`);
bst.min(bst.root)


