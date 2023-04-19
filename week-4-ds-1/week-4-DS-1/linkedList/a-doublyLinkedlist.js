class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class LinkedList{
    constructor(){
        this.size=0
        this.head=null
        this.tail=null
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }
        else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log(`List is empty`)
        }
        else{
            let curr=this.head
            let listValue=''
            while(curr){
                listValue+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValue);
        }
    }
}
const list=new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.print()
console.log(list);