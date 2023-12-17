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
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.size++
    }
    prepend(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }
    print(){
        let curr=this.head
        let list=``
        while(curr){
            list+=` ${curr.value}`
            curr=curr.next
        }
        console.log(list);
    }
    delete(value){
        if(this.isEmpty()){
            console.log(`is empty`);
            return null
        }
        if(this.head.value==value){
            this.head=this.head.next
            console.log(`removed ${value} which was head`);
            this.size--
            return value
        }
        let prev=this.head
        while(prev.next && prev.next.value!=value){
            prev=prev.next
        }
        if(prev.next){
            prev.next=prev.next.next
            console.log(`removed ${value}`);
            this.size--
            return value
        }
        console.log(`${value} is not in this list`);
        return null
    }
    sort(){
        let swapped
        do{
            swapped=false
            let prev=this.head
            while(prev.next){
                if(prev.value>prev.next.value){
                    [prev.value,prev.next.value]=[prev.next.value,prev.value]
                    swapped=true
                }
                prev=prev.next
            }
        }while(swapped)
    }

}

let list=new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(3)
list.append(150)
list.append(22)
list.print()
list.prepend(99)
list.print()
list.delete(34)
list.delete(99)
list.delete(20)
list.print()
list.sort()
list.print()