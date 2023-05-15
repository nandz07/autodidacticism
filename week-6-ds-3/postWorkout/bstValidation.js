class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (!root.left) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (!root.right) {
                root.right = newNode
            }
            else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    insert(value) {
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }
    search(root, value) {
        if (!root) {
            console.log(`not present`);
            return false
        } else {
            if (root.value == value) {
                console.log(`value present`);
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }
    validateBST(root) {
        return this.isBST(root, null, null);
    }
    isBST(node, min, max) {
        if (node === null) {
            return true;
        }

        if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
            return false;
        }

        return this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max);
    }
}

let bst = new BinarySearchTree()
bst.insert(5)
bst.insert(1)
bst.insert(6)
bst.search(bst.root, 5)
bst.search(bst.root, 1)
bst.search(bst.root, 6)
bst.search(bst.root, 60)

let res=bst.validateBST(bst.root)
console.log(res);



