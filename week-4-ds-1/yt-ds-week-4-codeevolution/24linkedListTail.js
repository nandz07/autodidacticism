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
        this.tail = null
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }

    // O(1)
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++

    }

    // O(1)
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    // O(1)
    removeFromFront() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    // O(n)
    removeFromEnd() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.tail.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while (prev.next != this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
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

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removeNode
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        }
        else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = prev.next.next
            // prev.next=removeNode.next
        }
        this.size--
        return removeNode.value
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value != value) {
                prev = prev.next
            }
            if (prev.next) {
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value) {
        if (this.isEmpty()) {
            console.log(`list is empty`);
            return -1
        }
        else {
            let curr = this.head
            let i = 0
            while (curr) {
                if (curr.value === value) {
                    return i
                }
                curr = curr.next
                i++
            }
            return -1
        }
    }
    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
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

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.prepend(10)
list.print()
list.removeFromFront()
list.removeFromEnd()
list.print()
console.log(list.getSize());
