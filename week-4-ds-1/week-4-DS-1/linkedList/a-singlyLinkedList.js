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
        return this.size
    }
    append(value){
        const node = new Node(value)
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
            console.log(`list is empty`);
        }
        else{
            let curr=this.head
            let listValue=''
            while (curr) {
                listValue+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValue);
        }
    }
}
const list=new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.print()
console.log(list);