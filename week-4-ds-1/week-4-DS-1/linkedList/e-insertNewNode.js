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

    insertBeforeValue(x,value){
        if(this.isEmpty()){
            console.log(`this list is empty`)
            return null
        }
        
        if(this.head.value===value){
            const node=new Node(x)
            node.next=this.head
            this.head=node
            this.size++
        }
        else{
            let prev=this.head
            while(prev.next && prev.next.value!=value){
                prev=prev.next
            }
            if(prev.next){
                const node=new Node(x)
                node.next=prev.next
                prev.next=node
                this.size++
            }else{
                console.log(`${value} not in the list`)
                return null
            }
            
        }
    }
    insertAfterValue(x,value){
        if(this.isEmpty()){
            console.log(`this list is empty`)
            return null
        }
        
        if(this.head.value===value){
            const node=new Node(x)
            node.next=this.head.next
            this.head.next=node
            this.size++
        }
        else{
            let prev=this.head
            while(prev.next && prev.next.value!=value){
                prev=prev.next
            }
            if(prev.next){
                let curr=prev.next
                const node=new Node(x)
                node.next=curr.next
                curr.next=node
                this.size++
            }else{
                console.log(`${value} not in the list`)
                return null
            }
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
list.insertBeforeValue(10,3)
list.print()
list.insertAfterValue(20,3)
list.print()