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
    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }
        else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    delete(value){
        let prev=this.head
        while (prev.next && prev.next.value!=value) {
            prev=prev.next
        }
        prev.next=prev.next.next
        this.size--
    }
    print(){
        let curr=this.head
        let list=''
        while(curr){
            list+=`${curr.value} `
            curr=curr.next
        }
        console.log(list);
    }
}

const list=new LinkedList()
list.append(1)
list.append(2)
list.append(3)

list.print()
list.delete(2)
list.print()