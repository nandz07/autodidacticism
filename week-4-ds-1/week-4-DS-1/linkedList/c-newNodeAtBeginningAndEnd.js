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
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
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
list.print()
list.prepend(100)
list.print()