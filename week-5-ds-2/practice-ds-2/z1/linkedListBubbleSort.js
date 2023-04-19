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
        const node=new Node(value)
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
    print(){
        let listValue=''
        let curr=this.head
        while(curr){
            listValue+=`${curr.value} `
            curr=curr.next
        }
        console.log(listValue);
    }
    bubbleSort(){
        let swapped
            do{
                let curr=this.head
                swapped=false
                while (curr && curr.next ) {
                    if(curr.value>curr.next.value){
                        [curr.value,curr.next.value]=[curr.next.value,curr.value]
                        swapped=true
                    }
                    curr=curr.next
                }
            }while(swapped)
                
        }
}


const list=new LinkedList()
list.append(10)
list.append(2)
list.append(13)
list.append(10)
list.append(254)
list.append(13)
list.append(1)
list.append(2)
list.append(13)
list.print()
list.bubbleSort()
list.print()