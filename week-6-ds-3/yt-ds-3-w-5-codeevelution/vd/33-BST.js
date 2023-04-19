class NOde{
    constructor(){
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
}

const bst=new BinerySearchTree()
console.log(`tree is emplty ${bst.isEmpty()}`);
