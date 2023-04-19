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
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    bubbleSort(){
        do{
            var swapped=false
            let curr=this.head
            while(curr.next){
                if(curr.value>curr.next.value){
                    [curr.value,curr.next.value]=[curr.next.value,curr.value]
                    swapped=true
                }
                curr=curr.next
            }
        }while(swapped)
    }
    print(){
        let listValue=''
        let curr=this.head
        while(curr){
            listValue+=`${curr.value} `
            curr=curr.next
        }
        console.log(listValue);
    }
}

let list=new LinkedList()
list.append(5)
list.append(3)
list.append(1)
list.append(6)
list.print()
list.bubbleSort()
list.print()