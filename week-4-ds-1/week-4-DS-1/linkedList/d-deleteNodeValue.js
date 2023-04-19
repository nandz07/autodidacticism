class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        this.size
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    removeValue(value){
        if(this.isEmpty()){
            console.log(`list is empty`)
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
            console.log(`${value} removed successfully`)
            return value
        }
        else{
            let prev=this.head
            while(prev.next && prev.next.value!=value){
                prev=prev.next
            }
            if(prev.next){
                const removeNode=prev.next
                prev.next=removeNode.next
                this.size--
                console.log(`${value} removed successfully`)
                return value
            }
            console.log(`${value} does not exist in the list`)
            return value
        }
    }
    print(){
        if(this.isEmpty()){
            console.log(`this list is empty`)
        }
        else{
            let curr=this.head
            let listValue=''
            while(curr){
                listValue+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValue)
        }
    }
}
const list=new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.print()
list.removeValue(2)
list.print()
list.removeValue(1)
list.print()
list.removeValue(45)
list.print()