// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class BST{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insertNode(root,newNode){
//         if(newNode.value<root.value){
//             if(!root.left){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(!root.right){
//                 root.right=newNode
//             }else{
                
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }
//     insert(value){
//         let newNode=new Node(value)
//         if(this.isEmpty()){
//             this.root=newNode
//         }
//         else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value
//         }
//         else{
//             return this.min(root.left)
//         }
//     }
//     deleteNode(root,value){
//         if(root===null){
//             return null
//         }
//         if(value<root.value){
//             root.left= this.deleteNode(root.left,value)
//         }else if(value>root.value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }
// }

// let bst=new BST()
// bst.insert(4)
// bst.insert(1)
// bst.insert(5)
// console.log(bst);
// bst.delete(4)

// console.log(bst);
class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
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
    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
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
    search(root,value){
        if(!root){
            console.log(`value not present`);
            return false
        }if(value===root.value){
            console.log(`value present`);
            return true
        }
        if(value<root.value){
            this.search(root.left,value)
        }else{
            this.search(root.right,value)
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    deleteNode(root,value){
        if(root===null){
            return root
        }if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    
}

let bst=new BST()
bst.insert(4)
bst.insert(1)
bst.insert(5)
// console.log(bst);
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.preOrder(bst.root)
bst.levelOrder()
bst.search(bst.root,12)
bst.delete(4)
bst.levelOrder()