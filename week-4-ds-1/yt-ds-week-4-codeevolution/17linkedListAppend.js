class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.size=0
        this.head=null
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    
    // O(1)
    pretend(value){
        const node=new Node(value)
        if(this.isEmpty){
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    // O(n)
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while (prev.next) {
                prev=prev.next
            }
            prev.next=node
            // console.log("H");
            // console.log(this.head);
            // console.log("N");
            // console.log(node);
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log(`this list is empty`);
        }else{
            var curr=this.head
            var listValue=''
            while (curr) {
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