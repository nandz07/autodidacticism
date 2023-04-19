class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.size = 0
        this.head = null
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }

    // O(1)
    pretend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // O(n)
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
            // console.log("H");
            // console.log(this.head);
            // console.log("N");
            // console.log(node);
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.pretend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index<0 || index>=this.size){
            return null
        }
        let removeNode
        if(index ===0){
            removeNode=this.head
            this.head=this.head.next
        }
        else{
            let prev =this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=prev.next.next
            // prev.next=removeNode.next
        }
        this.size--
        return removeNode.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            let prev=this.head
            while (prev.next && prev.next.value!=value) {
                prev=prev.next
            }
            if(prev.next){
                const removeNode=prev.next
                prev.next=removeNode.next
                this.size--
                return value
            }
            return null
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log(`this list is empty`);
        } else {
            var curr = this.head
            var listValue = ''
            while (curr) {
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue);
        }
    }

}
const list = new LinkedList()
console.log(`list is empty ? ${list.isEmpty()}`);
console.log(`list is empty ? ${list.getSize()}`);
list.print()
list.insert(10,0)
list.print()
list.insert(20,0)
list.print()
list.insert(30,1)
list.print()
list.insert(40,2)
list.print()
console.log(list.getSize());

console.log(list.removeValue(40));
list.print()

console.log(list.removeValue(20));
list.print()

console.log(list.removeValue(60));
list.print()
console.log(list.getSize());